"use client";

import Button from "@/components/atoms/button";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

// Schéma de validation avec Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  subject: z
    .string()
    .min(2, { message: "Le sujet doit contenir au moins 2 caractères" }),
  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

export default function ContactForm() {
  const { language } = useLanguage();

  // Fonction utilitaire pour accéder aux traductions
  const t = (key: string): string => {
    // Gestion des clés imbriquées (comme 'hero.title')
    const keys = key.split(".");
    // Utilisation d'une approche sans typage spécifique pour naviguer dans l'objet de traductions
    let value: unknown = translations[language as keyof typeof translations];

    for (const k of keys) {
      if (
        value &&
        typeof value === "object" &&
        k in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Retourne la clé si la traduction n'est pas trouvée
      }
    }

    return typeof value === "string" ? value : key;
  };
  // États du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Gestion des changements de champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Valider les données du formulaire
      const validatedData = contactFormSchema.parse(formData);

      // Envoyer les données à notre API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("contact.error"));
      }

      // Réinitialiser le formulaire en cas de succès
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus({
        type: "success",
        message: t("contact.success"),
      });
    } catch (error) {
      // Gérer les erreurs de validation
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Gérer les autres erreurs
        setSubmitStatus({
          type: "error",
          message:
            error instanceof Error ? error.message : "Une erreur est survenue",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder={t("contact.name")}
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.name ? "border-red-500" : "border-border"
          } bg-background`}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder={t("contact.email")}
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.email ? "border-red-500" : "border-border"
          } bg-background`}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder={t("contact.subject")}
          value={formData.subject}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.subject ? "border-red-500" : "border-border"
          } bg-background`}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder={t("contact.message")}
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full p-3 rounded-lg border ${
            errors.message ? "border-red-500" : "border-border"
          } bg-background resize-none`}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {submitStatus.type && (
        <div
          className={`p-3 rounded-lg ${
            submitStatus.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <Button
        type="submit"
        variant="default"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />{" "}
            {t("contact.sending")}
          </>
        ) : (
          t("contact.sendButton")
        )}
      </Button>
    </form>
  );
}

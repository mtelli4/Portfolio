import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validation de base
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Configurer le transporteur d'email
    const transporter = nodemailer.createTransport({
      service: "gmail", // Utilisez le service que vous préférez
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Utilisez un mot de passe d'application pour Gmail
      },
    });

    // Configurer le contenu de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "tellimohamed91@gmail.com", // Email de réception
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    // Répondre avec succès
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}

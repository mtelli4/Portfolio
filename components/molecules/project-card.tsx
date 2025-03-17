import Button from "@/components/atoms/button";
import { ExternalLink, GithubIcon, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  detailsUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  detailsUrl,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-secondary/50 transition-all duration-300 hover:shadow-xl">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={340}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-background/50 text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {demoUrl && (
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="gap-1.5">
                <ExternalLink className="w-4 h-4" />
                Demo
              </Button>
            </Link>
          )}

          {detailsUrl && (
            <Link href={detailsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Info className="w-4 h-4" />
                Détails
              </Button>
            </Link>
          )}

          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="gap-1.5">
                <GithubIcon className="w-4 h-4" />
                Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

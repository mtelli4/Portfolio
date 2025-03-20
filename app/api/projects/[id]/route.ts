import { getProjectById } from "@/data/projects";
import { NextRequest, NextResponse } from "next/server";

// Type explicite pour le contexte de route
type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, context: Context) {
  try {
    // Attendre les paramètres complets avant d'accéder à l'ID
    const params = await context.params;
    const id = params.id;

    const project = getProjectById(id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

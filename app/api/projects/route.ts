import { getAllProjects } from "@/data/projects";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = getAllProjects();
  return NextResponse.json(projects);
}

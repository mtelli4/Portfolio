export interface Screenshot {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  situation: string;
  task: string;
  action: string[];
  result: string;
  screenshots?: Screenshot[];
  challenges: string[];
  learnings: string[];
}

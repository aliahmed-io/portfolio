import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectFrontmatter {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export interface ProjectContent {
  frontmatter: ProjectFrontmatter;
  content: string;
  slug: string;
}

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

// Map of project slugs to display metadata
const projectMetadata: Record<string, { date: string; stars: string; tech: string[]; color: string }> = {
  'Axion-assistant': {
    date: 'Dec 2024',
    stars: '29K',
    tech: ['Next.js', 'React', 'TypeScript', 'Google Gemini API'],
    color: '#0ea5e9'
  },
  'imaginify': {
    date: 'Nov 2024',
    stars: '22K',
    tech: ['Next.js', 'React', 'TypeScript', 'Cloudinary AI', 'Stripe API'],
    color: '#e11d48'
  },
  'lumen': {
    date: 'Oct 2024',
    stars: '10K',
    tech: ['Next.js', 'React', 'TypeScript', 'Convex', 'Stream SDK'],
    color: '#eab308'
  },
  'nexus': {
    date: 'Sep 2024',
    stars: '7.4K',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
    color: '#0ea5e9'
  },
  'revo': {
    date: 'Aug 2024',
    stars: '3K',
    tech: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'GSAP'],
    color: '#e11d48'
  }
};

export function getAllProjects(): ProjectContent[] {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      console.error('Projects directory not found:', projectsDirectory);
      return [];
    }

    const filenames = fs.readdirSync(projectsDirectory);
    const mdxFiles = filenames.filter(filename => filename.endsWith('.mdx'));

    const projects = mdxFiles.map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Normalize slug (handle spaces and special characters)
      const slug = filename.replace('.mdx', '').toLowerCase().replace(/\s+/g, '-');

      return {
        frontmatter: data as ProjectFrontmatter,
        content,
        slug,
      };
    });

    // Sort by date (newest first)
    return projects.sort((a, b) => {
      const aDate = projectMetadata[a.slug]?.date || '';
      const bDate = projectMetadata[b.slug]?.date || '';
      return bDate.localeCompare(aDate);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string): ProjectContent | null {
  try {
    const projects = getAllProjects();
    return projects.find(project => project.slug === slug) || null;
  } catch (error) {
    console.error('Error loading project:', error);
    return null;
  }
}

export function getProjectMetadata(slug: string) {
  return projectMetadata[slug] || null;
}

export function getProjectPreview(slug: string) {
  const metadata = projectMetadata[slug];
  const project = getProjectBySlug(slug);
  
  if (!metadata || !project) return null;

  return {
    title: project.frontmatter.title.split(':')[0].trim(),
    description: project.frontmatter.description,
    ...metadata
  };
}

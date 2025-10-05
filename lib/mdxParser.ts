/**
 * Utility to parse MDX content and extract structured sections
 */

export interface ParsedMDXContent {
  problem: string;
  solution: string;
  features: string[];
  impact: string[];
  techStack: string[];
}

/**
 * Parse MDX content to extract problem, solution, features, and impact sections
 */
export function parseMDXContent(content: string): ParsedMDXContent {
  const result: ParsedMDXContent = {
    problem: '',
    solution: '',
    features: [],
    impact: [],
    techStack: []
  };

  // Extract problem section
  const problemMatch = content.match(/## The Problem:.*?\n\n([\s\S]*?)(?=\n## )/);
  if (problemMatch) {
    result.problem = problemMatch[1].trim();
  }

  // Extract solution section
  const solutionMatch = content.match(/## The Solution:.*?\n\n([\s\S]*?)(?=\n### Key Features|$)/);
  if (solutionMatch) {
    result.solution = solutionMatch[1].trim();
  }

  // Extract features from Key Features section
  const featuresMatch = content.match(/### Key Features.*?\n\n([\s\S]*?)(?=\n## )/);
  if (featuresMatch) {
    const featuresList = featuresMatch[1].match(/^-\s+\*\*(.+?)\*\*:?\s*(.+?)$/gm);
    if (featuresList) {
      result.features = featuresList.map(feature => {
        const match = feature.match(/^-\s+\*\*(.+?)\*\*:?\s*(.+?)$/);
        return match ? `${match[1]}: ${match[2]}` : feature.replace(/^-\s+/, '');
      });
    }
  }

  // Extract impact from Results section
  const impactMatch = content.match(/## The Results.*?\n\n([\s\S]*?)(?=\n<div|$)/);
  if (impactMatch) {
    const impactText = impactMatch[1].trim();
    const impactList = impactText.match(/^-\s+(.+?)$/gm);
    if (impactList) {
      result.impact = impactList.map(item => item.replace(/^-\s+/, ''));
    } else {
      // If no list, split by sentences or use full text
      const sentences = impactText.split(/\.\s+/).filter(s => s.length > 20);
      result.impact = sentences.length > 0 ? sentences : [impactText];
    }
  }

  // Extract tech stack from Chip components
  const chipMatches = content.match(/<Chip>([^<]+)<\/Chip>/g);
  if (chipMatches) {
    result.techStack = chipMatches.map(chip => {
      const match = chip.match(/<Chip>([^<]+)<\/Chip>/);
      return match ? match[1] : '';
    }).filter(Boolean);
  }

  return result;
}

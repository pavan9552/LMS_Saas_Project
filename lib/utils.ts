import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Define the mapping of subjects to their colors
const subjectsColors = {
  Math: "#FFB400",
  Science: "#00B894",
  English: "#0984E3",
  History: "#6C5CE7",
  // Add more subjects and colors as needed
};

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

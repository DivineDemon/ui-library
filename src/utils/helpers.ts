import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValueFound(
  value: string,
  options: Option[]
): boolean {
  return options?.some((option) => option.name === value);
}
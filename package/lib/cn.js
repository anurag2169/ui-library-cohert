import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and resolves Tailwind conflicts using tailwind-merge.
 * 
 * @param  {...any} inputs class names or conditional expressions
 * @returns merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

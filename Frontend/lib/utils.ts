// =============================================
// UTILITAIRES — Seedly Technology & Apps
// =============================================

/**
 * Concatène les classes CSS de manière conditionnelle
 * Alternative légère à clsx/classnames
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formate une URL slug à partir d'un texte
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Tronque un texte à une longueur donnée
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

/**
 * Délai d'attente (utile pour les états de chargement simulés en dev)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Validation d'email basique côté client
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validation de numéro de téléphone (format Guinée et international)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().+]/g, "");
  return /^\d{8,15}$/.test(cleaned);
}

/**
 * Formate un numéro de téléphone pour l'affichage
 */
export function formatPhone(phone: string): string {
  return phone.trim();
}

/**
 * Capitalise la première lettre
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

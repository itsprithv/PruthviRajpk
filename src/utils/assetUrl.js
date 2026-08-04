/** Resolve public folder paths for GitHub Pages (/PruthviRajpk/) and local dev (/) */
export function assetUrl(path) {
  if (!path) return path
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.replace(/^\//, '')
  return `${base}${normalized}`
}

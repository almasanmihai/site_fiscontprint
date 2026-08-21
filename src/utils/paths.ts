/** Prefix paths with Astro `base` (needed for GitHub Pages project sites). */
export function withBase(path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const [pathname, hash] = path.split("#");
  const clean = pathname === "/" ? "" : pathname.replace(/^\//, "");
  const url = `${base}${clean}`;
  return hash ? `${url}#${hash}` : url;
}

/** Pathname without the `base` prefix, for active-nav checks. */
export function pathWithoutBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let path = pathname.replace(/\/$/, "") || "/";
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || "/";
  }
  return path;
}

/** A resource key ignores navigation fragments and marketing parameters, not document paths. */
export function canonicalResource(href: string): string {
  const url = new URL(href);
  url.hash = '';
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_.+|fbclid|gclid|ref)$/i.test(key)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  url.pathname = url.pathname.replace(/\/$/, '') || '/';
  return url.toString();
}

export function uniqueResources(resources: { source: string; sourceLabel: string }[]) {
  const seen = new Set<string>();
  return resources.filter(resource => {
    const key = canonicalResource(resource.source);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

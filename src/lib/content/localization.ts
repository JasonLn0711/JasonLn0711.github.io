export function siteLanguage(pathname: string): "en" | "zh-Hant" {
  return pathname === "/zh-tw" || pathname.startsWith("/zh-tw/") ? "zh-Hant" : "en";
}

export function alternatePage(pathname: string) {
  const chinese = siteLanguage(pathname) === "zh-Hant";
  const path = chinese ? pathname.slice("/zh-tw".length) || "/" : pathname;
  const locale = chinese ? "en" : "zh-Hant";
  const prefix = chinese ? "" : "/zh-tw";
  const isPaired = path === "/" || path === "/contact/" || path.startsWith("/event-notes/");

  return {
    href: isPaired ? `${prefix}${path}` : `${prefix}/`,
    isPaired,
    locale,
    label: chinese ? (isPaired ? "English" : "English home") : (isPaired ? "繁中" : "繁中首頁")
  };
}

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://kolaksi.id/sitemap.xml",
    host: "https://kolaksi.id"
  };
}

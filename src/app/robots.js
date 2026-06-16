export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap:
      "https://readyset-ai.vercel.app/sitemap.xml",

    host:
      "https://readyset-ai.vercel.app",
  };
}
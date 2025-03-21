/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.inovize.com", // ✅ Ensure site URL is defined
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "*", disallow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "SemrushBot", disallow: "/" },
    ],
  },
};
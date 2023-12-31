import { MetadataRoute } from "next"
import { getPostsMeta } from "@/lib/posts"

export default async function sitemap() {
  const siteURL = process.env.SITE_URL || "http://localhost:3000"
  const allPosts = await getPostsMeta()

  const currentDate = new Date().toLocaleDateString("en-CA") // 2023-12-26
  const home = {
    url: siteURL,
    lastModified: currentDate,
    priority: 1,
  }
  const siteLinks = [
    {
      url: `${siteURL}/blog`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${siteURL}/bookmark`,
      lastModified: currentDate,
      priority: 0.7,
    },
  ]

  if (!allPosts) return [home, ...siteLinks]

  const postLinks = allPosts.map((post) => ({
    url: `${siteURL}/blog/${post.slug}`,
    lastModified: post.date, //
    priority: 0.7,
  }))

  // date of most recent post
  home.lastModified = allPosts[0].date

  return [home, ...siteLinks, ...postLinks]
}

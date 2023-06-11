import { compileMDX } from "next-mdx-remote/rsc" //support for react server conponent
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib"
import rehypeHighlight from "rehype-highlight/lib"
import rehypeSlug from "rehype-slug"
import Video from "@/components/Video"
import Button from "@/components/Button"

export async function getPostByName(fileName) {
    const res = await fetch(`https://raw.githubusercontent.com/antlossway/blogposts/main/${fileName}`, {
    headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
    }
    })

    if (!res.ok) return undefined

    const rawMDX = await res.text() // note that it's not json(), it's text()
    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX({
        source: rawMDX,
        components: {
            Video,
            Button,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ]
            }
        }
    })

    const slug = fileName.replace(/\.mdx$/, '')

    const blogPostObj = {
        meta: {
            slug,
            title: frontmatter.title,
            date: frontmatter.date,
            description: frontmatter.description,
            tags: frontmatter.tags
        },
        content
    }

    return blogPostObj

}

export async function getPostsMeta() {
    const res = await fetch('https://api.github.com/repos/antlossway/blogposts/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined

    const repoFiletree = await res.json()
    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    const posts = []

    for (const file of filesArray) {
        const post = await getPostByName(file)
        if(post) {
            const {meta} = post
            posts.push(meta)
        }
    }

    return posts.sort((a,b) => a.date < b.date ? 1 : -1)
}


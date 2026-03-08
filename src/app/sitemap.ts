import { getAllPosts } from "@/lib/mdx";
import type { MetadataRoute } from "next";

const BASE_URL = "https://sebastian.dev"; // Replace with your domain

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const blogPosts = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.meta.date),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...blogPosts,
    ];
}

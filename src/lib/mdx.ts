import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src/content/posts");

export type Post = {
    slug: string;
    meta: {
        title: string;
        date: string;
        description: string;
        [key: string]: any;
    };
    content: string;
};

export const getPostSlugs = (): string[] => {
    if (!fs.existsSync(POSTS_PATH)) return [];
    return fs
        .readdirSync(POSTS_PATH)
        .filter((path) => /\.mdx?$/.test(path));
};

export const getPostBySlug = (slug: string): Post => {
    const realSlug = slug.replace(/\.mdx?$/, "");
    const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: data as Post["meta"],
        content,
    };
};

export const getAllPosts = (): Post[] => {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
    return posts;
};

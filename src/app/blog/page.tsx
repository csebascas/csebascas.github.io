import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
    title: "Blog | Sebastian",
    description: "Writing about software and life.",
};

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <div className="prose">
            <h1 className="fade-in" style={{ marginTop: 0, animationDelay: "0ms" }}>Blog</h1>
            <div className="post-list" style={{ marginTop: "2rem" }}>
                {posts.map((post, i) => (
                    <article key={post.slug} className="post-item fade-in" style={{ animationDelay: `${60 + i * 50}ms` }}>
                        <Link href={`/blog/${post.slug}`}>
                            <h3>{post.meta.title}</h3>
                        </Link>
                        <p>{post.meta.description}</p>
                        <time>{post.meta.date}</time>
                    </article>
                ))}
            </div>
        </div>
    );
}

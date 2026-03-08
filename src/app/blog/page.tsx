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
            <h1 style={{ marginTop: 0 }}>Blog</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2rem" }}>
                {posts.map((post) => (
                    <div key={post.slug} className="post-preview">
                        <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>{post.meta.title}</h3>
                            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
                                {post.meta.description}
                            </p>
                            <div style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", marginTop: "0.5rem" }}>
                                {post.meta.date}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

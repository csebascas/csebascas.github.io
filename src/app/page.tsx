import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="prose">
      <section className="fade-in" style={{ marginBottom: "4rem", animationDelay: "0ms" }}>
        <h1 style={{ marginTop: 0 }}>Hello, I'm Sebastian.</h1>
        <p className="lead">
          I'm a software engineer building tools for the future. I write about code, design, and life.
        </p>
        <p>
          Currently, I'm working on exciting new projects. You can find me on{" "}
          <a href="https://twitter.com" className="accent-link">Twitter</a> or check out my code on{" "}
          <a href="https://github.com" className="accent-link">GitHub</a>.
        </p>
      </section>

      <section id="projects" className="fade-in" style={{ marginBottom: "4rem", animationDelay: "60ms" }}>
        <h2>Projects</h2>
        <div className="project-list">

          <article className="project-item">
            <h3>Pray4Me</h3>
            <p>A community prayer app where people share intentions and lift each other up. Faith and connection, one prayer at a time.</p>
            <a href="https://pray4me.app" target="_blank" rel="noopener noreferrer" className="accent-link">pray4me.app</a>
          </article>

          <article className="project-item project-item-right">
            <h3>Tanoshii</h3>
            <p>A minimal companion app for AniList. Track your anime and manga and discover what to watch next.</p>
            <a href="https://tanoshii.cyou" target="_blank" rel="noopener noreferrer" className="accent-link">tanoshii.cyou</a>
          </article>

        </div>
      </section>

      <section className="fade-in" style={{ animationDelay: "120ms" }}>
        <h2>Recent Posts</h2>
        <div className="post-list">
          {posts.map((post, i) => (
            <article key={post.slug} className="post-item fade-in" style={{ animationDelay: `${180 + i * 50}ms` }}>
              <Link href={`/blog/${post.slug}`}>
                <h3>{post.meta.title}</h3>
              </Link>
              <p>{post.meta.description}</p>
              <time>{post.meta.date}</time>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

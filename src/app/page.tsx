import Link from "next/link";
import { Heart, Tv, ExternalLink } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="prose">
      <section style={{ marginBottom: "4rem" }}>
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

      <section id="projects" style={{ marginBottom: "4rem" }}>
        <h2>Projects</h2>
        <div className="project-list">

          {/* Pray4Me — left aligned */}
          <div className="project-card project-card-left">
            <div className="project-icon">
              <Heart size={28} strokeWidth={1.5} />
            </div>
            <div className="project-body">
              <h3 className="project-title">Pray4Me</h3>
              <p className="project-blurb">
                A community prayer app where people share their intentions and lift each other up. Built to make faith and connection more accessible, one prayer at a time.
              </p>
              <a
                href="https://pray4me.app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit site <ExternalLink size={13} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Tanoshii — right aligned */}
          <div className="project-card project-card-right">
            <div className="project-body">
              <h3 className="project-title">Tanoshii</h3>
              <p className="project-blurb">
                A beautiful companion app for AniList. Track your anime and manga, discover what to watch next, and explore your list with a clean and minimal interface.
              </p>
              <a
                href="https://tanoshii.cyou"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit site <ExternalLink size={13} strokeWidth={2} />
              </a>
            </div>
            <div className="project-icon">
              <Tv size={28} strokeWidth={1.5} />
            </div>
          </div>

        </div>
      </section>

      <section>
        <h2>Recent Posts</h2>
        <div className="post-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-item">
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

import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { CopyCodeButton } from "@/components/copy-code-button";
import { MDXImage } from "@/components/mdx-image";

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx?$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.meta.title} | Sebastian's Blog`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

// Custom components for MDX
const components = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <MDXImage src={src || ""} alt={alt} />
  ),
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { content, meta } = getPostBySlug(slug);

  const options = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [
          rehypePrettyCode,
          {
            theme: "one-dark-pro",
            keepBackground: false,
          },
        ],
      ],
    },
  };

  return (
    <article className="prose">
      <div className="fade-in" style={{ marginBottom: "2rem", animationDelay: "0ms" }}>
        <h1 style={{ marginTop: 0 }}>{meta.title}</h1>
        <time style={{ color: "var(--muted-foreground)", fontSize: "0.85rem" }}>
          {meta.date}
        </time>
      </div>
      <div className="mdx-content fade-in" style={{ animationDelay: "60ms" }}>
        {/* @ts-expect-error Async Server Component */}
        <MDXRemote source={content} options={options} components={components} />
        <CopyCodeButton />
      </div>
    </article>
  );
}

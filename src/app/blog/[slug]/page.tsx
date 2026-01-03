import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  if (!post) {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    tags,
    keywords,
  } = post.metadata;

  const postUrl = `${DATA.url}/blog/${post.slug}`;
  // Use provided image, or fallback to avatar if no OG image route exists
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}${DATA.avatarUrl}`;

  // Combine tags and keywords for better SEO
  const allKeywords = tags
    ? [
        ...(Array.isArray(tags) ? tags : [tags]),
        ...(keywords ? (Array.isArray(keywords) ? keywords : [keywords]) : []),
      ]
    : keywords
      ? Array.isArray(keywords)
        ? keywords
        : [keywords]
      : undefined;

  return {
    title,
    description,
    keywords: allKeywords?.join(", "),
    authors: [{ name: DATA.name }],
    creator: DATA.name,
    publisher: DATA.name,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: postUrl,
      siteName: DATA.name,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      authors: [DATA.name],
      tags: tags ? (Array.isArray(tags) ? tags : [tags]) : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: DATA.name,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${DATA.url}/blog/${post.slug}`;
  const postImage = post.metadata.image
    ? `${DATA.url}${post.metadata.image}`
    : `${DATA.url}${DATA.avatarUrl}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: postImage,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
    publisher: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
    ...(post.metadata.tags && {
      keywords: Array.isArray(post.metadata.tags)
        ? post.metadata.tags.join(", ")
        : post.metadata.tags,
    }),
  };

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}

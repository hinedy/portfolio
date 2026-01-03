import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// Rehype plugin to add not-prose class to pre elements
function rehypeAddNotProse() {
  return (tree: any) => {
    if (!tree.children) return;

    function traverse(node: any) {
      if (node.type === "element" && node.tagName === "pre") {
        node.properties = node.properties || {};
        const className = node.properties.className || [];
        const classArray = Array.isArray(className) ? className : [className];
        if (!classArray.includes("not-prose")) {
          node.properties.className = [...classArray, "not-prose"];
        }
      }
      if (node.children) {
        node.children.forEach(traverse);
      }
    }

    tree.children.forEach(traverse);
  };
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      keepBackground: false,
    })
    .use(rehypeAddNotProse)
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

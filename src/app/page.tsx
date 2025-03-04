import Markdown from "react-markdown";

import Link from "next/link";
import { DATA } from "@/data/resume";
import { getBlogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { Testimonial } from "@/components/testimonial-card";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-pretty md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                bullets={work.bullets}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <p className="text-sm text-muted-foreground">
              I&apos;ve contributed to the success of
            </p>
          </BlurFade>
          <div className="flex flex-col flex-wrap items-center justify-center gap-x-12 gap-y-6 p-4 sm:flex-row">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <div className="cursor-pointer grayscale filter transition-all duration-300 ease-in-out hover:scale-110 hover:grayscale-[35%]">
                  <Link href={project.url} target="_blank">
                    {project.logo({})}
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="stack">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Tech Stack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">Testimonials</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            <div className="py-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {DATA.testimonials.map((testimonial, id) => (
                  <BlurFade
                    className={`col-span-1 ${testimonial.testimonial.length > 300 ? "sm:col-span-2" : "sm:col-span-1"}`}
                    key={testimonial.name}
                    delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                  >
                    <Testimonial key={testimonial.name} {...testimonial} />{" "}
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <h2 className="text-xl font-bold">Articles</h2>
          </BlurFade>
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 16 + id * 0.05}
                key={post.slug}
              >
                <Link
                  className="mb-4 flex flex-col space-y-1"
                  href={`/blog/${post.slug}`}
                >
                  <div className="flex w-full flex-col">
                    <p className="tracking-tight">{post.metadata.title}</p>
                    <p className="h-6 text-xs text-muted-foreground">
                      {post.metadata.publishedAt}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            ))}
        </div>
      </section>

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Send me an email at{" "}
                <Link
                  href={DATA.contact.social.Email.url}
                  className="text-gray-500 hover:underline"
                >
                  ahmedhinedy@gmail.com
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

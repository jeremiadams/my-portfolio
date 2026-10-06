import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="bg-jet text-cream">
      <header className="relative flex min-h-[52svh] flex-col justify-end overflow-hidden px-5 pb-14 pt-28 sm:min-h-[70svh] sm:px-10 sm:pb-16 sm:pt-32">
        {project.cover && (
          <>
            <Image
              src={project.cover.src}
              alt=""
              fill
              priority
              className="object-cover object-top opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/75 to-jet/40" />
          </>
        )}
        <div className="relative">
          <p className="mb-4 text-xl text-khaki">{project.descriptor}</p>
          <h1 className="max-w-5xl text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-[9vw]">
            {project.title}
          </h1>
        </div>
      </header>

      <div className="grid gap-14 border-t border-cream/15 px-5 py-16 sm:px-10 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-8 text-lg">
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-khaki">Role</h2>
            <p className="mt-1">{project.meta.role}</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-khaki">Company</h2>
            <p className="mt-1">{project.meta.company}</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-khaki">Year</h2>
            <p className="mt-1">{project.meta.year}</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-khaki">Stack</h2>
            <ul className="mt-1 space-y-1">
              {project.meta.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="max-w-3xl">
          <p className="text-[clamp(1.4rem,2.4vw,2rem)] leading-snug">
            {project.summary}
          </p>

          {project.sections.map((section) => (
            <section key={section.heading} className="mt-14">
              <h2 className="mb-5 text-sm uppercase tracking-[0.18em] text-khaki">
                {section.heading}
              </h2>
              <div className="space-y-5 text-xl leading-relaxed text-cream/90">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          {project.highlights && (
            <section className="mt-14">
              <h2 className="mb-5 text-sm uppercase tracking-[0.18em] text-khaki">
                Highlights
              </h2>
              <ul className="space-y-3 text-xl">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="text-orange">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.links && (
            <div className="mt-14 flex flex-wrap gap-4">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-cream px-7 py-3 text-lg transition-colors hover:border-orange hover:bg-orange hover:text-ink"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {project.images && project.images.length > 0 && (
        <div className="space-y-14 px-5 pb-24 sm:px-10">
          {project.images.map((img) => (
            <figure key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                width={2400}
                height={1500}
                className="w-full"
              />
              {img.caption && (
                <figcaption className="mt-3 text-lg text-khaki">
                  — {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </main>
  );
}

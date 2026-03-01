"use client";

import React from "react";
import Image from "next/image";

const experience = [
  {
    title: "Brand & Product Design Lead",
    company: "Sticky Marketing Group",
    logo: "logo-sticky.png",
    metaRightTop: "Boca Raton, FL",
    pills: ["REMOTE", "CONTRACT"],
    dates: "Mar 2025 - Present",
    desc: "Leading brand and product design for performance-focused US clients, from discovery to launch.",
  },
  {
    title: "Graphic Design Specialist",
    company: "Monster Notebook",
    logo: "logo-monster.png",
    metaRightTop: "Istanbul, Turkiye",
    pills: ["REMOTE"],
    dates: "Nov 2021 - Feb 2026",
    desc: "Designed campaign-driven digital experiences across multiple channels, improving consistency and creative output at scale.",
  },
  {
    title: "Sr. Graphic Designer (Lead)",
    company: "Nette Interactive",
    logo: "logo-nette-v2.png",
    logoScale: "scale-[0.8]",
    metaRightTop: "Bursa, Turkiye",
    pills: ["HYBRID"],
    dates: "Jul 2020 - Nov 2021",
    desc: "Led brand identity and digital execution for fast-paced client accounts, managing end-to-end creative production.",
  },
  {
    title: "Graphic Designer",
    company: "Arka Plan Agency",
    logo: "logo-arkaplan.png",
    logoScale: "scale-[0.95]",
    metaRightTop: "Bursa, Turkiye",
    pills: ["ON-SITE"],
    dates: "Jan 2019 - Jun 2019",
    desc: "Produced high-volume campaign visuals for multi-client social accounts, optimizing speed without sacrificing quality.",
  },
  {
    title: "Graphic Designer",
    company: "Be Creative & Management",
    logo: "logo-be.png",
    logoScale: "scale-[0.95]",
    metaRightTop: "Bursa, Turkiye",
    pills: ["ON-SITE"],
    dates: "Aug 2017 - Mar 2018",
    desc: "Delivered multi-channel visual systems for client and internal brands, aligning assets with brand standards and goals.",
  },
];

const works = [
  {
    title: "Intel Monsters Reloaded 2022",
    href: "https://www.behance.net/gallery/193230969/Intel-Monsters-Reloaded-2022",
    image: "/assets/work-1.png",
  },
  {
    title: "Selected Work 02",
    href: "https://www.behance.net/yunusnalci",
    image: "/assets/work-2.png",
  },
  {
    title: "Selected Work 03",
    href: "https://www.behance.net/yunusnalci",
    image: "/assets/work-3.png",
  },
  {
    title: "Selected Work 04",
    href: "https://www.behance.net/yunusnalci",
    image: "/assets/work-4.png",
  },
];

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [activeWork, setActiveWork] = React.useState(0);

  const WORKS_UNLOCKED = false;

  const prev = React.useCallback(() => {
    if (!WORKS_UNLOCKED) return;
    setActiveWork((i) => (i - 1 + works.length) % works.length);
  }, [WORKS_UNLOCKED]);

  const next = React.useCallback(() => {
    if (!WORKS_UNLOCKED) return;
    setActiveWork((i) => (i + 1) % works.length);
  }, [WORKS_UNLOCKED]);

  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!WORKS_UNLOCKED) return;
    if (touchStartX.current == null || touchStartY.current == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(dy) > Math.abs(dx)) return;
    if (Math.abs(dx) < 45) return;

    if (dx > 0) prev();
    else next();
  };

  const isNavDisabled = !WORKS_UNLOCKED;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <div className="mx-auto w-full max-w-[1120px] px-6 flex-1 flex items-center lg:items-start py-16">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-24">
            <section className="space-y-10 lg:sticky lg:top-16 lg:self-start">
              <div className="space-y-4">
                <Image
                  src="/assets/avatar.png"
                  alt="Yunus Nalci avatar"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-xl border border-white/10 bg-white/5 object-cover"
                  priority
                />

                <div className="space-y-2">
                  <h1 className="text-4xl font-semibold tracking-tight">
                    Yunus Nalcı
                  </h1>
                  <p className="text-lg text-white/60">
                    Brand &amp; Product Designer
                  </p>
                </div>

                <p className="max-w-md text-white/90">
                  Designing brand and product experiences <br />
                  from strategy to execution.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs tracking-widest text-white/40">
                  CORE EXPERTISE
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Brand Strategy",
                    "Product Thinking",
                    "UI/UX Design",
                    "Design Systems",
                    "Performance Marketing",
                    "Creative Direction",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition-colors duration-200 hover:border-white/20 hover:bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs tracking-widest text-white/40">LANGUAGES</p>
                <div className="flex gap-4 text-white/90">
                  <div>
                    <span className="font-medium">English</span>{" "}
                    <span className="text-white/50">(Professional)</span>
                  </div>
                  <div>
                    <span className="font-medium">Turkish</span>{" "}
                    <span className="text-white/50">(Native)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs tracking-widest text-white/40">CONTACT</p>

                <div className="space-y-2 text-white/90">
                  <a
                    className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white/60"
                    href="https://www.linkedin.com/in/yunusnalci/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <img
                      src="/assets/icon-linkedin.svg"
                      alt=""
                      className="h-7 w-7 shrink-0 opacity-70"
                      draggable={false}
                    />
                  </a>

                  <div>
                    <a
                      className="inline-flex items-center text-white/90 transition-colors hover:text-white/60"
                      href="mailto:hello@yunusnalci.com"
                    >
                      hello@yunusnalci.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs tracking-widest text-white/40">RESOURCES</p>

                <div className="space-y-2 text-white/90">
                  <div>
                    <a
                      className="inline-flex items-center text-white/90 transition-colors hover:text-white/60"
                      href="https://www.behance.net/yunusnalci"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Portfolio
                    </a>
                  </div>

                  <a
                    className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white/60"
                    href="https://www.behance.net/yunusnalci"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                    <img
                      src="/assets/icon-download.svg"
                      alt=""
                      className="h-7 w-7 shrink-0 opacity-70 -mt-[1px]"
                      draggable={false}
                    />
                  </a>
                </div>
              </div>
            </section>

            <section className="space-y-10 lg:max-w-[620px] lg:justify-self-end">
              <div className="space-y-4">
                <p className="text-left text-xs tracking-widest text-white/40">
                  EXPERIENCE
                </p>

                {experience.map((job, index) => (
                  <article
                    key={job.title + job.company}
                    className={[
                       "group relative rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 transition",
                      "hover:border-white/20 hover:bg-white/10",
                      index === 0
                        ? "lg:bg-[radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.10),transparent_55%)] lg:shadow-[0_0_70px_-35px_rgba(255,255,255,0.25)]"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
  <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black transition-colors group-hover:border-white/20 group-hover:bg-white/10">
    <img
      src={`/assets/${job.logo}`}
      alt={`${job.company} logo`}
      className={`h-full w-full object-contain p-1.5 sm:p-2 ${job.logoScale ?? ""}`}
      draggable={false}
    />
  </div>

                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-semibold leading-snug text-white">
                            <span className="block truncate">{job.title}</span>
                          </h3>

                          <p className="truncate text-white/60">{job.company}</p>

                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            {job.pills.map((p) => (
                              <span
                                key={p}
                                className={[
                                  "rounded-md border border-white/10 bg-black/20 px-2 py-[3px]",
                                  "text-[9px] tracking-[0.2em] text-white/45",
                                  "transition-colors",
                                  "group-hover:border-white/15 group-hover:text-white/55 group-hover:bg-black/30",
                                ].join(" ")}
                              >
                                {p}
                              </span>
                            ))}
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60 lg:hidden">
                            <span className="truncate">{job.metaRightTop}</span>
                            <span className="whitespace-nowrap">{job.dates}</span>
                          </div>
                        </div>
                      </div>

                      <div className="hidden shrink-0 text-right text-sm text-white/60 lg:block">
                        <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                          <span className="whitespace-nowrap">
                            {job.metaRightTop}
                          </span>
                        </div>
                        <div className="mt-1 whitespace-nowrap">{job.dates}</div>
                      </div>
                    </div>

                   <p className="mt-4 pl-[52px] sm:pl-16 text-sm leading-relaxed text-white/55 [display:-webkit-box] [-webkit-line-clamp:6] [-webkit-box-orient:vertical] overflow-hidden">
  {job.desc}
</p>
                  </article>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-left text-xs tracking-widest text-white/40">
                  SELECTED WORK
                </p>

                <div
                  className="relative"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <a
                    href={works[activeWork].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <img
                        src={works[activeWork].image}
                        alt={works[activeWork].title}
                        draggable={false}
                        className={[
                          "h-full w-full object-cover",
                          "grayscale opacity-80",
                          "group-hover:grayscale-0 group-hover:opacity-100",
                          "transition duration-500 ease-out group-hover:scale-[1.03]",
                        ].join(" ")}
                      />

                      <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Previous"
                          aria-disabled={isNavDisabled}
                          onClick={(e) => {
                            e.preventDefault();
                            prev();
                          }}
                          className={[
                            "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white/60 backdrop-blur transition",
                            isNavDisabled
                              ? "cursor-not-allowed opacity-40"
                              : "hover:border-white/20 hover:text-white",
                          ].join(" ")}
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          aria-label="Next"
                          aria-disabled={isNavDisabled}
                          onClick={(e) => {
                            e.preventDefault();
                            next();
                          }}
                          className={[
                            "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white/60 backdrop-blur transition",
                            isNavDisabled
                              ? "cursor-not-allowed opacity-40"
                              : "hover:border-white/20 hover:text-white",
                          ].join(" ")}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    </div>

                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                      <div className="min-w-0 text-[13px] font-semibold text-white/45 truncate">
                        {works[activeWork].title}
                      </div>

                      <div className="inline-flex items-center gap-1 font-medium text-xs tracking-widest text-white/35 transition group-hover:text-white/60">
                        <span>EXPLORE</span>
                        <img
                          src="/assets/arrow-up-right.svg"
                          alt=""
                          className="h-[1.2em] w-[1.2em] opacity-80 transition-opacity group-hover:opacity-100"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1">
                  {works.map((_, i) => {
                    const isActive = i === activeWork;
                    const isDisabledDot = !WORKS_UNLOCKED && i !== 0;

                    return (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to item ${i + 1}`}
                        aria-disabled={isDisabledDot}
                        onClick={() => {
                          if (!WORKS_UNLOCKED) return;
                          setActiveWork(i);
                        }}
                        className={[
                          "h-1.5 rounded-full transition-all duration-300",
                          isActive
                            ? "w-7 bg-white/70"
                            : "w-2 bg-white/20 hover:bg-white/35",
                          isDisabledDot
                            ? "cursor-not-allowed opacity-50 hover:bg-white/20"
                            : "",
                        ].join(" ")}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

     <footer className="mt-14">
  <div className="mx-auto max-w-[1120px] px-6">
    <div className="h-px w-full bg-white/10" />

    <div className="py-5 text-xs">
      <div className="flex flex-col items-center gap-2 text-center text-white/50 tracking-wide sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:text-left">
        
        <span>© 2026 YUNUS NALCI</span>

        <span className="hidden sm:inline text-white/25">—</span>

        <a
          href="mailto:hello@yunusnalci.com"
          className="group inline-flex items-center gap-1 transition-colors hover:text-white/70"
        >
          <span>AVAILABLE FOR SELECTED PROJECTS</span>

          <img
            src="/assets/arrow-up-right.svg"
            alt=""
            className="h-[1.50em] w-[1.50em] opacity-60 transition-opacity group-hover:opacity-100"
            draggable={false}
          />
        </a>

      </div>
    </div>
  </div>
</footer>
    </main>
  );
}
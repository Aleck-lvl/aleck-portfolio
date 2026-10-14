
"use client";

import { motion } from "motion/react";
import Link from "next/link";

const BLUE = "#3B82F6";
const LIGHT_BLUE = "#60A5FA";

const projects = [
  {
    number: "01",
    name: "OUTPLAY",
    type: "MOBILE APPLICATION",
    description:
      "Une nouvelle façon de transformer le monde réel en terrain de jeu.",
    stack: "FLUTTER · SYMFONY · MAPBOX",
    status: "IN DEVELOPMENT",
  },
{
  number: "02",
  name: "COLLAB PLATFORM",
  type: "COLLABORATIVE WEB APPLICATION",
  description:
    "Une plateforme centralisant la gestion de projets, les ressources partagées et la communication interne.",
  stack: "WEBDEV · WLANGAGE · MYSQL",
  status: "COMPLETED",
},
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080B12] text-[#F1F5F9]">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a href="#" className="text-sm font-bold tracking-[0.2em]">
          ALECK<span style={{ color: BLUE }}>.</span>
        </a>

        <nav className="flex items-center gap-5 text-[10px] text-white/60 sm:gap-8 sm:text-xs">
          <a className="transition hover:text-blue-400" href="#projects">
            PROJECTS
          </a>
          <a className="transition hover:text-blue-400" href="#about">
            ABOUT
          </a>
          <a className="transition hover:text-blue-400" href="#contact">
            CONTACT
          </a>
        </nav>

        <span className="hidden text-[10px] tracking-widest text-white/40 sm:block">
          PORTFOLIO / 2026
        </span>
      </header>

      <section className="relative isolate mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center overflow-hidden px-6 py-24 md:min-h-[82vh] md:px-12">
        {/* Décor technique */}
        <div className="pointer-events-none absolute inset-0 z-[-1]">
          <div className="absolute -right-40 top-[5%] h-[420px] w-[420px] rounded-full border border-white/[0.06] md:h-[620px] md:w-[620px]" />
          <div className="absolute -right-20 top-[14%] h-[300px] w-[300px] rounded-full border border-blue-400/10 md:h-[460px] md:w-[460px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </div>

        {/* Ferrari en arrière-plan */}
        <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
          <motion.img
            src="/images/hero-car.jpg"
            alt="Ferrari bleue dans une ambiance sombre"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute right-[-34%] top-[8%] h-[65%] w-[125%] object-contain object-right sm:right-[-20%] sm:top-0 sm:h-[85%] sm:w-[105%] md:right-[-8%] md:top-[-4%] md:h-[108%] md:w-[78%]"
          />

          {/* Fondu sombre côté texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B12] from-[10%] via-[#080B12]/90 via-[38%] to-[#080B12]/15 md:via-[#080B12]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent via-[45%] to-[#080B12]/30" />
        </div>

        {/* Contenu du hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />
            <p className="text-[10px] tracking-[0.3em] text-blue-400 md:text-xs">
              DEVELOPER · DIGITAL CREATOR
            </p>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl">
            TURNING IDEAS
            <br />
            INTO <span className="text-white/35">DIGITAL</span>
            <br />
            EXPERIENCES<span style={{ color: LIGHT_BLUE }}>.</span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/65 md:text-base">
              Je conçois des expériences numériques modernes, performantes
              et soignées, avec une attention particulière portée au design
              et aux détails.
            </p>

            <a
              href="#projects"
              className="group inline-flex w-fit items-center gap-4 border border-white/20 px-5 py-4 text-xs tracking-widest transition hover:border-blue-400 hover:text-blue-300"
            >
              EXPLORE PROJECTS
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </motion.div>

        <div className="relative z-10 mt-20 flex items-center justify-between border-t border-white/10 pt-5 text-[9px] tracking-[0.2em] text-white/45 md:mt-24">
          <span>DESIGN-DRIVEN. ENGINEERED WITH PRECISION.</span>
          <span>01 — 04</span>
        </div>

        <div className="pointer-events-none absolute bottom-20 right-12 hidden items-center gap-3 text-[9px] tracking-[0.2em] text-white/45 lg:flex">
          <span className="h-px w-8 bg-blue-400/70" />
          DIGITAL EXPERIENCE / 2026
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-blue-400">
              SELECTED WORK
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Projects<span style={{ color: LIGHT_BLUE }}>.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/50">
            Des idées, des expérimentations et des produits numériques en
            constante évolution.
          </p>
        </div>

        
        
<div className="grid gap-5">
  {projects.map((project, index) => {
    const isOutplay = project.number === "01";

    const card = (
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative isolate overflow-hidden border border-white/10 bg-[#0D111C] transition duration-500 hover:border-blue-400/40 ${
          isOutplay
            ? "grid min-h-[440px] md:min-h-[500px] md:grid-cols-[1fr_0.85fr]"
            : "grid min-h-[300px] md:grid-cols-[1fr_0.7fr]"
        }`}
      >
        {/* Lumière bleue en arrière-plan */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_50%,rgba(59,130,246,0.15),transparent_60%)] opacity-70 transition duration-500 group-hover:opacity-100" />

        {/* Informations du projet */}
        <div className="relative z-10 flex flex-col justify-between p-6 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <span className="text-xs text-white/40">/ {project.number}</span>

            <span className="border border-white/10 px-3 py-2 text-[9px] tracking-widest text-white/50">
              {project.status}
            </span>
          </div>

          <div className="py-8">
            <p className="mb-3 text-[10px] tracking-[0.2em] text-blue-400">
              {project.type}
            </p>

            <h3 className="text-4xl font-semibold tracking-tight md:text-6xl">
              {project.name}
              <span className="text-blue-400">.</span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="border border-white/10 px-3 py-2 text-[9px] tracking-widest text-white/50">
                {project.stack}
              </span>

              <span className="text-xs text-blue-400 transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 text-[9px] tracking-[0.2em] text-white/35">
            SELECTED PROJECT / 2026
          </div>
        </div>

        {/* Aperçu visuel */}
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden md:min-h-full">
          {isOutplay ? (
            <>
              <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-blue-500/15 blur-[80px] transition duration-500 group-hover:bg-blue-500/25" />

              <motion.div
                whileHover={{ y: -8, rotate: -2, scale: 1.025 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="relative my-8 h-[310px] w-[158px] overflow-hidden rounded-[27px] border-[5px] border-[#303747] bg-black shadow-[0_25px_80px_rgba(0,0,0,0.65)] md:h-[370px] md:w-[188px]"
              >
                <img
                  src="/images/outplay-home.png"
                  alt="Aperçu de l'application Outplay"
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>

              <span className="absolute bottom-5 right-5 text-[9px] tracking-[0.2em] text-white/30">
                APP PREVIEW / 01
              </span>
            </>
          ) : (
            <div className="relative flex min-h-[260px] w-full items-center justify-center overflow-hidden p-5 md:min-h-full md:p-8">
              <div className="pointer-events-none absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[80px]" />

              <motion.div
                whileHover={{ y: -5, rotateX: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-[#151923] p-1 shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
              >
                <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-2">
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                  <span className="h-2 w-2 rounded-full bg-white/25" />

                  <span className="ml-2 text-[8px] tracking-widest text-white/35">
                    COLLABORATIVE PLATFORM
                  </span>
                </div>

                <img
                  src="/images/intranet-home.png"
                  alt="Page d'accueil de la plateforme collaborative"
                  className="block aspect-[2/1] w-full object-cover object-top"
                />
              </motion.div>

              <span className="absolute bottom-2 right-5 text-[9px] tracking-[0.2em] text-white/35">
                WEB PLATFORM / 02
              </span>
            </div>
          )}
        </div>
      </motion.article>
    );

    return isOutplay ? (
      <Link
        href="/projects/outplay"
        key={project.number}
        className="block cursor-pointer"
        aria-label="Découvrir le projet Outplay"
      >
        {card}
      </Link>
    ) : (
      <div key={project.number}>{card}</div>
    );
  })}
</div>


      </section>

      
      <section
        id="about"
        className="relative mx-auto max-w-7xl overflow-hidden border-t border-white/10 px-6 py-24 md:px-12 md:py-32"
      >
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[100px]" />

        <div className="relative grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.3em] text-blue-400">
              <span className="h-px w-8 bg-blue-500" />
              ABOUT ME
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Curiosity drives me.
              <span className="mt-2 block text-white/35">
                Code brings ideas to life.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Titulaire d'une licence en développement web, j'ai acquis une
              expérience professionnelle en alternance au sein de l'Agglomération
              de Brive. J'y ai notamment participé à la création d'une plateforme
              collaborative interne et à la refonte d'un outil existant.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              J'aime concevoir des interfaces soignées, comprendre les besoins
              derrière un projet et transformer des idées en expériences
              numériques concrètes. Je continue à explorer de nouvelles approches
              à travers mes projets personnels, dont Outplay.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {[
              {
                number: "01",
                title: "WEB DEVELOPMENT",
                detail: "Interfaces, intégration et applications web",
              },
              {
                number: "02",
                title: "UI & USER EXPERIENCE",
                detail: "Design fonctionnel, lisibilité et attention aux détails",
              },
              {
                number: "03",
                title: "PERSONAL PROJECTS",
                detail: "Expérimentation, autonomie et amélioration continue",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-blue-400/40 hover:bg-blue-400/[0.04] md:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-1 text-xs text-blue-400/70">
                    / {item.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium tracking-widest">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-white/45 md:text-sm">
                      {item.detail}
                    </p>
                  </div>
                  <span className="ml-auto text-white/30 transition group-hover:translate-x-1 group-hover:text-blue-400">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <footer
        id="contact"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-8 md:px-12"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-white/45">
            © 2026 ALECK · BUILT WITH PRECISION
          </p>
          <a
            href="mailto:lavrilleux.pro@gmail.com"
            className="text-xs tracking-widest transition hover:text-blue-400"
          >
            LET&apos;S TALK ↗
          </a>
        </div>
      </footer>
    </main>
  );
}

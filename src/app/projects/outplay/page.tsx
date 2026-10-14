
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const screenshots = [
  {
    title: "Une entrée dans le jeu",
    subtitle: "AUTHENTICATION",
    description: "Une interface épurée pour accéder à son espace joueur.",
    image: "/images/outplay-login.png",
  },
  {
    title: "Jouer ensemble",
    subtitle: "SOCIAL",
    description:
      "Retrouver ses amis, rechercher des joueurs et développer sa communauté.",
    image: "/images/outplay-social.png",
  },
  {
    title: "Ton identité de joueur",
    subtitle: "PLAYER PROFILE",
    description: "Personnaliser son profil et consulter ses statistiques.",
    image: "/images/outplay-profile.png",
  },
  {
    title: "Choisis ta stratégie",
    subtitle: "GAME MODES",
    description:
      "Des modes de jeu différents pour transformer le monde réel en terrain de jeu.",
    image: "/images/outplay-gmode.png",
  },
  {
    title: "Prépare ta partie",
    subtitle: "GAME CONFIGURATION",
    description:
      "Définir les participants, la durée et le rayon de la zone de jeu.",
    image: "/images/outplay-confgame.png",
  },
  {
    title: "Place au jeu",
    subtitle: "GAME LOBBY",
    description:
      "Retrouver les participants et consulter les règles avant le lancement.",
    image: "/images/outplay-lobby.png",
  },
];

const technologies = ["Flutter", "Dart", "Mapbox", "Geolocator"];

export default function OutplayPage() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });

  return (
    <main
      onMouseMove={(event) => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }}
      className="relative min-h-screen overflow-hidden bg-[#080812] text-white"
    >
      {/* Lumière violette qui suit le curseur */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      >
        <div
          className="absolute h-64 w-64 rounded-full bg-violet-500/[0.09] blur-[85px] transition-[left,top] duration-150 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      {/* Navigation */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.2em] transition hover:text-violet-300"
        >
          ALECK<span className="text-blue-400">.</span>
        </Link>

        <Link
          href="/#projects"
          className="text-[10px] tracking-[0.18em] text-white/55 transition hover:text-violet-300"
        >
          ← RETOUR AU PORTFOLIO
        </Link>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-12 md:pb-36 md:pt-24">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <p className="mb-7 text-[10px] tracking-[0.3em] text-violet-300">
            PROJET PERSONNEL / APPLICATION MOBILE
          </p>

          <h1 className="text-6xl font-semibold tracking-[-0.07em] sm:text-8xl md:text-[140px]">
            OUTPLAY<span className="text-violet-400">.</span>
          </h1>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
            <p className="max-w-2xl text-xl leading-8 text-white/65 md:text-2xl md:leading-10">
              Le monde réel devient ton terrain de jeu.
              <span className="text-white">
                {" "}Retrouve tes amis, crée une partie et passe à l&apos;action.
              </span>
            </p>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {["MOBILE", "GEOLOCATION", "MULTIPLAYER"].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[9px] tracking-widest text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Présentation du concept */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden border border-white/10 bg-[#11101d] p-5 md:mt-24 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(139,92,246,0.2),transparent_65%)]" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div className="py-5">
              <p className="text-[10px] tracking-[0.25em] text-violet-300">
                THE CONCEPT
              </p>

              <h2 className="mt-5 text-3xl font-medium leading-tight md:text-5xl">
                Sors de l&apos;écran.
                <br />
                <span className="text-white/45">Entre dans le jeu.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                Outplay est une application mobile imaginée autour du jeu
                en extérieur. Les joueurs peuvent découvrir des parties,
                configurer leur terrain de jeu et se retrouver pour jouer
                ensemble dans le monde réel.
              </p>

              <a
                href="#features"
                className="mt-8 inline-flex items-center gap-3 text-xs tracking-widest text-violet-300 transition hover:text-white"
              >
                EXPLORER LE PROJET <span>↓</span>
              </a>
            </div>

            <div className="relative flex justify-center py-5">
              <div className="pointer-events-none absolute inset-0 m-auto h-56 w-56 rounded-full bg-violet-500/20 blur-[80px]" />

              <motion.div
                whileHover={{ y: -8, rotate: -2 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="relative h-[390px] w-[195px] overflow-hidden rounded-[32px] border-[5px] border-[#343044] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
              >
                <img
                  src="/images/outplay-login.png"
                  alt="Écran de connexion d'Outplay"
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Carte géolocalisée */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-end">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-violet-300">
                GEOLOCATION / 01
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Le terrain de jeu,
                <br />
                <span className="text-white/40">c&apos;est le monde réel.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50">
              Une carte pour visualiser les parties autour de soi et donner
              une dimension géographique aux rencontres entre joueurs.
            </p>
          </div>

          <div className="group relative overflow-hidden border border-white/10 bg-[#11101d] p-2 md:p-4">
            <div className="pointer-events-none absolute -inset-10 bg-violet-500/10 opacity-70 blur-[100px] transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden border border-white/10 bg-black">
              <img
                src="/images/outplay-carte.png"
                alt="Carte géolocalisée d'Outplay avec les marqueurs des parties"
                loading="lazy"
                className="block h-auto max-h-[760px] w-full object-contain object-center transition duration-700 group-hover:scale-[1.01]"
              />
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-3 px-3 py-5 md:px-5">
              <div>
                <p className="text-[9px] tracking-[0.2em] text-violet-300">
                  MAP EXPERIENCE
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Explore. Trouve. Joue.
                </p>
              </div>

              <span className="border border-violet-400/20 bg-violet-400/5 px-3 py-2 text-[9px] tracking-widest text-violet-300">
                MAPBOX
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Géolocalisation",
                text: "Situer les joueurs et les parties sur la carte.",
              },
              {
                number: "02",
                title: "Parties à proximité",
                text: "Repérer les sessions de jeu disponibles.",
              },
              {
                number: "03",
                title: "Zone de jeu",
                text: "Définir un périmètre pour les parties.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-violet-400/30"
              >
                <p className="text-[10px] tracking-widest text-violet-300">
                  / {item.number}
                </p>
                <h3 className="mt-4 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Galerie des écrans */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-36"
      >
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-violet-300">
              APP EXPERIENCE / 02
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Au cœur d&apos;Outplay<span className="text-violet-400">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45">
            De la connexion au lancement d&apos;une partie, découvre les
            différentes interfaces de l&apos;application.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((screen, index) => (
            <motion.article
              key={screen.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.08,
                ease: "easeOut",
              }}
              className="group overflow-hidden border border-white/10 bg-[#11111b] transition duration-300 hover:border-violet-400/40"
            >
              <div className="relative flex justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,rgba(139,92,246,0.13),transparent_70%)] px-4 pt-8">
                <div className="absolute left-5 top-5 text-[9px] tracking-widest text-white/30">
                  0{index + 1}
                </div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="relative h-[360px] w-[180px] overflow-hidden rounded-t-[25px] border-x-[4px] border-t-[4px] border-[#343044] bg-black shadow-[0_15px_50px_rgba(0,0,0,0.45)]"
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </motion.div>
              </div>

              <div className="p-6">
                <p className="text-[9px] tracking-[0.2em] text-violet-300">
                  {screen.subtitle}
                </p>
                <h3 className="mt-3 text-xl font-medium">{screen.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {screen.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-12 md:py-24">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-violet-300">
              UNDER THE HOOD / 03
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              La technologie
              <br />
              derrière le jeu.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              Une application pensée autour du mobile, de la cartographie
              et de la géolocalisation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="border border-white/10 bg-[#11111b] p-5 transition-colors hover:border-violet-400/30 md:p-7"
              >
                <span className="text-[10px] tracking-widest text-violet-300">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-medium md:text-2xl">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden border border-white/10 bg-[#11101d] p-8 md:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/15 blur-[100px]" />

          <div className="relative">
            <p className="text-[10px] tracking-[0.25em] text-violet-300">
              NEXT ADVENTURE
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Le terrain t&apos;attend.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              Outplay est un projet personnel en développement. L&apos;objectif :
              rapprocher le jeu mobile des rencontres dans le monde réel.
            </p>

            <Link
              href="/#projects"
              className="mt-9 inline-flex items-center gap-3 border border-white/15 px-5 py-4 text-[10px] tracking-widest transition duration-300 hover:border-violet-400/50 hover:bg-violet-500/10"
            >
              <span>←</span> RETOUR AU PORTFOLIO
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 text-center text-[9px] tracking-[0.2em] text-white/30">
        OUTPLAY / PERSONAL PROJECT
      </footer>
    </main>
  );
}

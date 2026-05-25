"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Leaf,
  Waves,
  Mountain,
} from "lucide-react";

const moods = [
  {
    id: 0,

    icon: Leaf,

    name: "Forest",

    label: "Botanical Energy",

    title:
      "Nature\nredesigned\nfor slower rituals.",

    description:
      "Botanical skincare experiences inspired by soft textures, organic light and calming nighttime rituals.",

    accent: "#7C8B68",

    glow: "rgba(124,139,104,0.60)",

    particle:
      "radial-gradient(circle, rgba(124,139,104,0.18) 1px, transparent 1px)",

    product: "/images/producton3.webp",
  },

  {
    id: 1,

    icon: Waves,

    name: "Water",

    label: "Hydration Ritual",

    title:
      "Pure hydration\nfor glowing\nquiet mornings.",

    description:
      "Inspired by waterfalls, crystal reflections and immersive hydration rituals designed for modern wellness.",

    accent: "#9ECED7",

    glow: "rgba(158,206,215,0.60)",

    particle:
      "radial-gradient(circle, rgba(158,206,215,0.18) 1px, transparent 1px)",

    product: "/images/producton4.webp",
  },

  {
    id: 2,

    icon: Mountain,

    name: "Earth",

    label: "Earth Minerals",

    title:
      "Grounded skincare\nfor softer\nnight routines.",

    description:
      "Warm mineral textures and calming atmospheric skincare created for slower self-care moments.",

    accent: "#C6A27F",

    glow: "rgba(198,162,127,0.58)",

    particle:
      "radial-gradient(circle, rgba(198,162,127,0.18) 1px, transparent 1px)",

    product: "/images/producton6.webp",
  },
];

export default function Hero() {
  const [active, setActive] = useState(moods[0]);

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-transparent
      "
    >
      {/* COLOR ATMOSPHERE */}
      <motion.div
        animate={{
          background: `
            radial-gradient(
              circle at 75% 30%,
              ${active.glow},
              transparent 45%
            )
          `,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          inset-0
          z-[1]
          mix-blend-overlay
        "
      />

      {/* SECONDARY LIGHT */}
      <motion.div
        animate={{
          background: `
            radial-gradient(
              circle at 20% 80%,
              ${active.glow},
              transparent 55%
            )
          `,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          inset-0
          z-[1]
          opacity-30
          blur-[100px]
        "
      />

      {/* GRAIN */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          opacity-[0.03]
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* BIG EDEN */}
      <motion.div
        animate={{
          color: active.accent,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-[2]
          -translate-x-1/2
          -translate-y-1/2
          text-[15vw]
          font-black
          tracking-[-0.10em]
          opacity-[0.03]
          select-none
        "
      >
        EDEN
      </motion.div>

      {/* MAIN GLOW */}
      <motion.div
        animate={{
          backgroundColor: active.glow,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          right-[-220px]
          top-[-120px]
          z-[1]
          h-[900px]
          w-[900px]
          rounded-full
          blur-[220px]
        "
      />

      {/* NAVBAR */}
      <header
        className="
          relative
          z-50
          flex
          items-center
          justify-between
          px-8
          pt-10
          lg:px-16
        "
      >
        <h1
          className="
            text-[2rem]
            tracking-[-0.08em]
            text-[#4f5c42]
          "
        >
          EDEN
        </h1>

        <nav
          className="
            hidden
            items-center
            gap-12
            text-[11px]
            uppercase
            tracking-[0.28em]
            text-[#555]
            lg:flex
          "
        >
          <a href="#">Products</a>
          <a href="#">Experience</a>
          <a href="#">Collection</a>
          <a href="#">Studio</a>
        </nav>
      </header>

      {/* HERO */}
      <div
        className="
          relative
          z-20
          grid
          min-h-[88vh]
          items-center
          gap-10
          px-8
          pb-10
          pt-10
          lg:grid-cols-2
          lg:px-16
        "
      >
        {/* LEFT */}
        <div className="relative z-30">
          {/* CONTENT BOX */}
          <div
            className="
              relative
              max-w-[560px]
              rounded-[42px]
              border
              border-white/30
              bg-white/[0.16]
              p-8
              backdrop-blur-[20px]
              lg:p-10
            "
          >
            {/* LIGHT */}
            <div
              className="
                absolute
                inset-0
                rounded-[42px]
                bg-gradient-to-b
                from-white/35
                to-transparent
                opacity-60
              "
            />

            <div className="relative z-20">
              {/* LABEL */}
              <motion.div
                animate={{
                  borderColor: active.accent,
                }}
                className="
                  mb-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  bg-white/50
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    backgroundColor: active.accent,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                  }}
                  className="h-2.5 w-2.5 rounded-full"
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.30em]
                    text-[#666]
                  "
                >
                  Botanical Experience
                </span>
              </motion.div>

              {/* TEXT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <h2
                    className="
                      whitespace-pre-line
                      text-[4rem]
                      font-semibold
                      leading-[0.82]
                      tracking-[-0.10em]
                      text-[#111]
                      lg:text-[6.5rem]
                    "
                  >
                    {active.title}
                  </h2>

                  <p
                    className="
                      mt-8
                      max-w-[300px]
                      text-[0.88rem]
                      leading-[1.9]
                      text-[#5f5f5f]
                    "
                  >
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* MOODS */}
          <div className="mt-10 flex flex-wrap gap-5">
            {moods.map((mood) => {
              const Icon = mood.icon;

              return (
                <motion.button
                  key={mood.id}
                  onClick={() => setActive(mood)}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-[#e7e1d8]
                    bg-white/35
                    px-7
                    py-5
                    text-left
                    backdrop-blur-xl
                    transition-all
                    duration-500
                  "
                  style={{
                    boxShadow:
                      active.id === mood.id
                        ? `0 10px 40px ${mood.glow}`
                        : "none",
                  }}
                >
                  {/* ACTIVE LIGHT */}
                  <motion.div
                    animate={{
                      opacity:
                        active.id === mood.id ? 1 : 0,
                    }}
                    className="
                      absolute
                      inset-0
                    "
                    style={{
                      background: `
                        radial-gradient(
                          circle at top left,
                          ${mood.glow},
                          transparent 70%
                        )
                      `,
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        mb-4
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                      "
                      style={{
                        background: `${mood.accent}20`,
                      }}
                    >
                      <Icon
                        size={22}
                        style={{
                          color: mood.accent,
                        }}
                      />
                    </div>

                    <h3
                      className="
                        text-[1rem]
                        font-medium
                        tracking-[-0.03em]
                        text-[#1f1f1f]
                      "
                    >
                      {mood.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[0.82rem]
                        text-[#6d6d6d]
                      "
                    >
                      {mood.label}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          {/* PARTICLES */}
          <motion.div
            animate={{
              opacity: [0.20, 0.45, 0.20],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="
              absolute
              inset-0
              z-10
            "
            style={{
              backgroundImage: active.particle,
              backgroundSize: "30px 30px",
            }}
          />

          {/* MODEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative z-20"
            >
              {/* MODEL GLOW */}
              <motion.div
                animate={{
                  backgroundColor: active.glow,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  blur-[140px]
                  opacity-70
                "
              />

              {/* MODEL */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/images/modelo1.webp"
                  alt="Model"
                  width={780}
                  height={1000}
                  priority
                  quality={90}
                  className="
                    relative
                    z-20
                    h-[88vh]
                    w-auto
                    object-contain
                    object-bottom
                    mix-blend-multiply
                    opacity-[0.97]
                  "
                />

                {/* BOTTOM FADE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    z-30
                    h-[240px]
                    w-full
                    bg-gradient-to-t
                    from-[#f6f3ee]
                    via-[#f6f3ee]/60
                    to-transparent
                  "
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* FLOATING PRODUCT */}
          <motion.div
            key={active.id}
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              absolute
              right-[8%]
              top-[16%]
              z-40
              w-[230px]
              overflow-hidden
              rounded-[38px]
              border
              border-[#e4ddd2]
              bg-white/30
              p-5
              backdrop-blur-2xl
            "
            style={{
              boxShadow: `0 15px 50px ${active.glow}`,
            }}
          >
            {/* LIGHT */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/40
                to-transparent
                opacity-50
              "
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="
                relative
                z-20
                flex
                justify-center
              "
            >
              <Image
                src={active.product}
                alt={active.name}
                width={150}
                height={220}
                quality={90}
                className="
                  object-contain
                "
              />
            </motion.div>

            <div
              className="
                relative
                z-20
                mt-5
                text-center
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#777]
                "
              >
                Featured Product
              </p>

              <h3
                className="
                  mt-3
                  text-[1rem]
                  font-medium
                  leading-[1.2]
                  tracking-[-0.04em]
                  text-[#222]
                "
              >
                {active.name}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
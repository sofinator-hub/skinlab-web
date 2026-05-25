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

    title: "Nature redesigned\nfor modern skin rituals.",

    description:
      "Immersive botanical skincare experiences inspired by living textures, organic light and cinematic botanical aesthetics.",

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

    title: "Pure hydration\nin cinematic motion.",

    description:
      "Inspired by waterfalls, crystal reflections and fluid textures crafted for immersive wellness experiences.",

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

    title: "Grounded beauty\nthrough texture and light.",

    description:
      "Warm mineral tones, earthy elegance and soft atmospheric textures.",

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
          opacity-40
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

      {/* BIG TEXT */}
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
          text-[18vw]
          font-black
          tracking-[-0.08em]
          opacity-[0.05]
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
          py-8
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
            text-[12px]
            uppercase
            tracking-[0.25em]
            text-[#555]
            lg:flex
          "
        >
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Studio</a>
          <a href="#">Contact</a>
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
          pt-6
          lg:grid-cols-2
          lg:px-16
        "
      >
        {/* LEFT */}
        <div className="relative z-30 max-w-[620px]">
          {/* LABEL */}
          <motion.div
            animate={{
              borderColor: active.accent,
            }}
            className="
              mb-7
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              bg-white/60
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
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-[#666]
              "
            >
              Immersive Botanical Experience
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
                  leading-[0.92]
                  tracking-[-0.08em]
                  text-[#1b1b1b]
                  lg:text-[6rem]
                "
              >
                {active.title}
              </h2>

              <p
                className="
                  mt-8
                  max-w-[560px]
                  text-[1.05rem]
                  leading-relaxed
                  text-[#5f5f5f]
                "
              >
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* MOODS */}
          <div className="mt-24 flex flex-wrap gap-6">
            {moods.map((mood) => {
              const Icon = mood.icon;

              return (
                <motion.button
                  key={mood.id}
                  onClick={() => setActive(mood)}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#e7e1d8]
                    bg-white/45
                    px-7
                    py-5
                    text-left
                    backdrop-blur-xl
                  "
                  style={{
                    boxShadow:
                      active.id === mood.id
                        ? `0 10px 40px ${mood.glow}`
                        : "none",
                  }}
                >
                  {/* HOVER LIGHT */}
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
                        background: `${mood.accent}25`,
                      }}
                    >
                      <Icon
                        size={22}
                        style={{
                          color: mood.accent,
                        }}
                      />
                    </div>

                    <h3 className="text-[1rem] font-medium text-[#1f1f1f]">
                      {mood.name}
                    </h3>

                    <p className="mt-2 text-sm text-[#6d6d6d]">
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
              opacity: [0.25, 0.5, 0.25],
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
                  blur-[120px]
                  opacity-70
                "
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/modelo1.webp"
                  alt="Model"
                  width={780}
                  height={1000}
                  priority
                  quality={85}
                  className="
                    relative
                    z-20
                    h-[86vh]
                    w-auto
                    object-contain
                    object-bottom
                    mix-blend-multiply
                    opacity-[0.96]
                  "
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* PRODUCT CARD */}
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
              right-[2%]
              top-[12%]
              z-40
              rounded-[100px]
              border
              border-[#e4ddd2]
              bg-white/45
              p-4
              backdrop-blur-2xl
            "
            style={{
              boxShadow: `0 15px 50px ${active.glow}`,
            }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <Image
                src={active.product}
                alt={active.name}
                width={150}
                height={200}
                quality={80}
                className="
                  rounded-[100px]
                  object-cover
                "
              />
            </motion.div>

            <div className="mt-2">
              <p className="text-sm text-[#777]">
                Active Environment
              </p>

              <h3 className="mt-3 text-lg text-[#222]">
                {active.name}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
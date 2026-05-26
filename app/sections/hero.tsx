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

    product: "/images/serum4.webp",
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

    product: "/images/serum5.webp",
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

    product: "/images/serum1.webp",
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
          opacity-[0.04]
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
          <a href="#">Products</a>
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
          flex
          min-h-[88vh]
          items-center
          justify-center
          px-8
          pb-10
          pt-6
          lg:px-16
        "
      >
        {/* MODEL */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
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

          {/* MODEL WRAPPER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                y: 30,
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
              className="
                relative
                z-20
                flex
                items-center
                translate-x-[80px]
              "
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
                  h-[520px]
                  w-[520px]
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
              >
                <Image
                  src="/images/modelo1.webp"
                  alt="Model"
                  width={820}
                  height={1000}
                  priority
                  quality={90}
                  className="
                    relative
                    z-20
                    h-[90vh]
                    w-auto
                    object-contain
                    mix-blend-multiply
                    opacity-[0.97]
                  "
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-40
            flex
            w-full
            items-center
            justify-between
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              max-w-[580px]
            "
          >
            {/* MAIN GLASS CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-white/30
                bg-white/[0.20]
                p-8
                backdrop-blur-[24px]
                lg:p-10
              "
            >
              {/* INNER LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-white/40
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
                    mb-8
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
                        font-serif
                        text-[3.8rem]
                        leading-[0.95]
                        tracking-[-0.06em]
                        text-[#1b1b1b]
                        lg:text-[5.2rem]
                      "
                    >
                      {active.title}
                    </h2>

                    <p
                      className="
                        mt-7
                        max-w-[470px]
                        text-[1rem]
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

            {/* MOOD BAR */}
            <div
              className="
                mt-8
                flex
                items-center
                gap-4
                rounded-[36px]
                border
                border-white/30
                bg-white/[0.18]
                p-4
                backdrop-blur-[20px]
              "
            >
              {moods.map((mood) => {
                const Icon = mood.icon;

                return (
                  <motion.button
                    key={mood.id}
                    onClick={() => setActive(mood)}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      relative
                      flex-1
                      overflow-hidden
                      rounded-[26px]
                      px-5
                      py-4
                      text-left
                      transition-all
                    "
                    style={{
                      background:
                        active.id === mood.id
                          ? "rgba(255,255,255,0.55)"
                          : "transparent",

                      boxShadow:
                        active.id === mood.id
                          ? `0 10px 35px ${mood.glow}`
                          : "none",
                    }}
                  >
                    {/* ACTIVE GLOW */}
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
                            transparent 75%
                          )
                        `,
                      }}
                    />

                    <div className="relative z-10 flex items-center gap-4">
                      <div
                        className="
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

                      <div>
                        <h3
                          className="
                            text-[1rem]
                            font-medium
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
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

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
              relative
              z-40
              mr-8
              hidden
              w-[240px]
              overflow-hidden
              rounded-[999px]
              border
              border-white/30
              bg-white/[0.22]
              p-5
              backdrop-blur-[24px]
              lg:block
            "
            style={{
              boxShadow: `0 20px 60px ${active.glow}`,
            }}
          >
            {/* LIGHT */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/45
                to-transparent
                opacity-60
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
                width={160}
                height={210}
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
                mt-3
                text-center
              "
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.24em]
                  text-[#777]
                "
              >
                Active Environment
              </p>

              <h3
                className="
                  mt-3
                  text-[1.1rem]
                  font-medium
                  tracking-[-0.03em]
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
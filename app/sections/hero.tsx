"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Leaf,
  Waves,
  Mountain,
  Menu,
} from "lucide-react";

const moods = [
  {
    id: 0,

    icon: Leaf,

    name: "Forest",

    label: "Botanical Energy",

    title: "Ciencia\n para una nueva era del skincare.",

    description:
      "Experiencia de skincare botánico inspirada en naturaleza, calma y bienestar sensorial.",

    accent: "#7C8B68",

    glow: "rgba(124,139,104,0.45)",

    product: "/images/serum4.webp",
  },

  {
    id: 1,

    icon: Waves,

    name: "Water",

    label: "Hydration Ritual",

    title: "Hidratación pura\n para una piel agotada.",

    description:
      "Inspirado en el reflejo del agua y la hidratación profunda.",

    accent: "#9ECED7",

    glow: "rgba(158,206,215,0.45)",

    product: "/images/serum5.webp",
  },

  {
    id: 2,

    icon: Mountain,

    name: "Earth",

    label: "Earth Minerals",

    title: "Belleza mineral\n y calma profunda.",

    description:
      "Texturas cálidas inspiradas en minerales y naturaleza.",

    accent: "#C6A27F",

    glow: "rgba(198,162,127,0.45)",

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
      {/* SOFT ATMOSPHERE */}
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
          opacity-70
          lg:mix-blend-overlay
        "
      />

      {/* SECOND LIGHT */}
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
          blur-[60px]
          lg:blur-[100px]
        "
      />

      {/* HUGE EDEN */}
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
          hidden
          -translate-x-1/2
          -translate-y-1/2
          text-[18vw]
          font-black
          tracking-[-0.08em]
          opacity-[0.04]
          select-none
          lg:block
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
          h-[420px]
          w-[420px]
          rounded-full
          blur-[120px]
          lg:h-[900px]
          lg:w-[900px]
          lg:blur-[220px]
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
          px-6
          py-7
          lg:px-16
        "
      >
        {/* LOGO */}
        <h1
          className="
            text-[1.8rem]
            tracking-[-0.08em]
            text-[#4f5c42]
            lg:text-[2rem]
          "
        >
          EDEN
        </h1>

        {/* DESKTOP NAV */}
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

        {/* MOBILE MENU */}
        <button
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/25
            backdrop-blur-md
            lg:hidden
          "
        >
          <Menu
            size={18}
            className="text-[#444]"
          />
        </button>
      </header>

      {/* HERO */}
      <div
        className="
          relative
          z-20
          flex
          min-h-[100svh]
          items-center
          justify-center
          px-6
          pb-12
          pt-4
          lg:min-h-[88vh]
          lg:px-16
        "
      >
        {/* MODEL AREA */}
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
          {/* MODEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                relative
                z-20
                flex
                items-center
                justify-center
                lg:translate-x-[80px]
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
                  h-[240px]
                  w-[240px]
                  rounded-full
                  blur-[80px]
                  opacity-60
                  lg:h-[520px]
                  lg:w-[520px]
                  lg:blur-[140px]
                "
              />

              {/* IMAGE */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
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
                    h-[58vh]
                    w-auto
                    object-contain
                    mix-blend-multiply
                    opacity-[0.97]
                    sm:h-[68vh]
                    lg:h-[90vh]
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
            flex-col
            justify-end
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              relative
              z-40
              mt-[50vh]
              max-w-[620px]
              sm:mt-[54vh]
              lg:mt-0
            "
          >
            {/* GLASS CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/30
                bg-white/[0.16]
                p-5
                backdrop-blur-md
                lg:rounded-[42px]
                lg:p-10
                lg:backdrop-blur-[24px]
              "
            >
              {/* LIGHT */}
              <div
                className="
                  absolute
                  inset-0
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
                    mb-5
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    bg-white/45
                    px-4
                    py-2
                    backdrop-blur-sm
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
                    className="h-2 w-2 rounded-full"
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-[#666]
                      lg:text-[10px]
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
                      y: 20,
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
                        text-[2.3rem]
                        leading-[0.95]
                        tracking-[-0.07em]
                        text-[#1b1b1b]
                        sm:text-[3.8rem]
                        lg:text-[5.2rem]
                      "
                    >
                      {active.title}
                    </h2>

                    <p
                      className="
                        mt-4
                        max-w-[470px]
                        text-[0.92rem]
                        leading-[1.7]
                        text-[#5f5f5f]
                        lg:mt-7
                        lg:text-[1rem]
                        lg:leading-[1.9]
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
                mt-5
                flex
                gap-3
                overflow-x-auto
                rounded-[28px]
                border
                border-white/30
                bg-white/[0.14]
                p-3
                backdrop-blur-md
                scrollbar-hide
                lg:mt-8
                lg:rounded-[36px]
                lg:p-4
                lg:backdrop-blur-[20px]
              "
            >
              {moods.map((mood) => {
                const Icon = mood.icon;

                return (
                  <motion.button
                    key={mood.id}
                    onClick={() => setActive(mood)}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      relative
                      min-w-[170px]
                      overflow-hidden
                      rounded-[22px]
                      px-4
                      py-4
                      text-left
                      transition-all
                      lg:min-w-[220px]
                    "
                    style={{
                      background:
                        active.id === mood.id
                          ? "rgba(255,255,255,0.50)"
                          : "transparent",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* ICON */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          lg:h-11
                          lg:w-11
                        "
                        style={{
                          background: `${mood.accent}20`,
                        }}
                      >
                        <Icon
                          size={18}
                          style={{
                            color: mood.accent,
                          }}
                        />
                      </div>

                      {/* TEXT */}
                      <div>
                        <h3
                          className="
                            text-[0.92rem]
                            font-medium
                            text-[#1f1f1f]
                          "
                        >
                          {mood.name}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[0.75rem]
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
              mx-auto
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
            {/* PRODUCT */}
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
                className="object-contain"
              />
            </motion.div>

            {/* TEXT */}
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
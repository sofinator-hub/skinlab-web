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
    glow: "rgba(124,139,104,0.35)",

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
    glow: "rgba(158,206,215,0.35)",

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
    glow: "rgba(198,162,127,0.35)",

    product: "/images/serum1.webp",
  },
];

export default function Hero() {
  const [active, setActive] = useState(moods[0]);

  return (
    <section
      className="
        relative 
        overflow-hidden
        bg-transparent
      "
    >
      {/* BACKGROUND LIGHT */}
      <motion.div
        animate={{
          background: `
            radial-gradient(
              circle at 70% 20%,
              ${active.glow},
              transparent 45%
            )
          `,
        }}
        transition={{ duration: 1 }}
        className="
          absolute
          inset-0
          z-[1]
          opacity-70
        " 
      />

      {/* MAIN GLOW */}
      <motion.div
        animate={{
          backgroundColor: active.glow,
        }}
        transition={{ duration: 1 }}
        className="
          absolute
          right-[-120px]
          top-[40px]
          z-[1]
          h-[350px]
          w-[350px]
          rounded-full
          blur-[100px]
          lg:right-[-220px]
          lg:top-[-120px]
          lg:h-[900px]
          lg:w-[900px]
          lg:blur-[220px]
        "
      />

      {/* HUGE EDEN */}
      <motion.div
        animate={{
          color: active.accent,
        }}
        transition={{ duration: 1 }}
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
            bg-white/30
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
          flex-col
          items-center
          justify-center
          px-6
          pb-16
          pt-2
          lg:min-h-[88vh]
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-16
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            order-2
            w-full
            max-w-[650px]
            lg:order-1
          "
        >
          {/* TEXT CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/30
              bg-white/[0.18]
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
                from-white/40
                to-transparent
                opacity-60
              "
            />

            <div className="relative z-20">
              {/* LABEL */}
              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#d9cfbf]
                  bg-white/50
                  px-4
                  py-2
                "
              >
                <motion.div
                  animate={{
                    backgroundColor: active.accent,
                    opacity: [0.5, 1, 0.5],
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
                    tracking-[0.22em]
                    text-[#666]
                    lg:text-[10px]
                  "
                >
                  Immersive Botanical Experience
                </span>
              </div>

              {/* TITLE */}
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
                    duration: 0.5,
                  }}
                >
                  <h2
                    className="
                      whitespace-pre-line
                      font-serif
                      text-[2.3rem]
                      leading-[0.92]
                      tracking-[-0.07em]
                      text-[#171717]
                      sm:text-[3.4rem]
                      lg:text-[5.2rem]
                    "
                  >
                    {active.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-[500px]
                      text-[0.95rem]
                      leading-[1.7]
                      text-[#5f5f5f]
                      lg:mt-6
                      lg:text-[1rem]
                    "
                  >
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* MOODS */}
          <div
            className="
              mt-5
              grid
              grid-cols-3
              gap-3
              lg:mt-8
            "
          >
            {moods.map((mood) => {
              const Icon = mood.icon;

              return (
                <button
                  key={mood.id}
                  onClick={() => setActive(mood)}
                  className="
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/30
                    bg-white/[0.15]
                    px-3
                    py-4
                    text-left
                    backdrop-blur-md
                    transition-all
                    duration-300
                  "
                  style={{
                    background:
                      active.id === mood.id
                        ? "rgba(255,255,255,0.45)"
                        : "rgba(255,255,255,0.15)",
                  }}
                >
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      text-center
                      gap-2
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
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
                          text-[0.9rem]
                          font-medium
                          text-[#1f1f1f]
                        "
                      >
                        {mood.name}
                      </h3>

                      <p
                        className="
                          mt-1
                          hidden
                          text-[0.72rem]
                          text-[#6d6d6d]
                          lg:block
                        "
                      >
                        {mood.label}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MODEL */}
        <div
          className="
            relative
            order-1
            mb-[-40px]
            flex
            items-center
            justify-center
            lg:order-2
            lg:mb-0
            lg:flex-1
          "
        >
          {/* MODEL GLOW */}
          <motion.div
            animate={{
              backgroundColor: active.glow,
            }}
            transition={{ duration: 1 }}
            className="
              absolute
              h-[240px]
              w-[240px]
              rounded-full
              blur-[80px]
              opacity-70
              lg:h-[520px]
              lg:w-[520px]
              lg:blur-[140px]
            "
          />

          {/* MODEL */}
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
                h-[48vh]
                w-auto
                object-contain
                mix-blend-multiply
                opacity-[0.97]
                sm:h-[58vh]
                lg:h-[90vh]
              "
            />
          </motion.div>
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
            absolute
            bottom-[80px]
            right-[60px]
            z-40
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
    </section>
  );
}
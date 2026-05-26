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
    glow: "rgba(124,139,104,0.18)",

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
    glow: "rgba(158,206,215,0.18)",

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
    glow: "rgba(198,162,127,0.18)",

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
        bg-[#f7f4ef]
      "
    >
      {/* SOFT AMBIENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[-80px]
          z-[1]
          h-[320px]
          w-[320px]
          rounded-full
          blur-[90px]
          opacity-60

          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[120px]
        "
        style={{
          background: active.glow,
        }}
      />

      {/* HUGE BACKGROUND TEXT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[1]
          hidden
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-[18vw]
          font-black
          tracking-[-0.08em]
          opacity-[0.03]

          lg:block
        "
        style={{
          color: active.accent,
        }}
      >
        EDEN
      </div>

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
            border-black/10
            bg-white/70

            lg:hidden
          "
        >
          <Menu
            size={18}
            className="text-[#444]"
          />
        </button>
      </header>

      {/* HERO CONTENT */}
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

          lg:min-h-[88vh]
          lg:flex-row 
          lg:justify-between
          lg:px-16
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            order-2
            w-full
            max-w-[650px]

            lg:order-1
          "
        >
          {/* GLASS CARD */}
          <div
            className="
              rounded-[30px] 
              border
              border-black/5
              bg-white/60
              p-5
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]

              lg:rounded-[42px]
              lg:p-10 
            "
          >
            {/* LABEL */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/5
                bg-white/70
                px-4
                py-2
              "
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  background: active.accent,
                }}
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
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
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

                    lg:text-[5rem]
                  "
                >
                  {active.title}
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[500px]
                    text-[0.96rem]
                    leading-[1.7]
                    text-[#5f5f5f]
                  "
                >
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
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
                    rounded-[22px]
                    border
                    border-black/5
                    bg-white/60
                    px-3
                    py-4 
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      gap-2
                      text-center
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
        </motion.div>

        {/* MODEL */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative
            order-1
            mb-[-40px]
            flex
            items-center
            justify-center

            lg:order-2 
            lg:flex-1
            lg:translate-x-[-70px]
          "
        >
          {/* MODEL GLOW */}
          <div
            className="
              absolute
              h-[220px]
              w-[220px]
              rounded-full
              blur-[70px]
              opacity-50

              lg:h-[420px]
              lg:w-[420px]
              lg:blur-[100px]
            "
            style={{
              background: active.glow,
            }}
          />

          {/* MODEL IMAGE */}
          <Image
            src="/images/modelo1.webp"
            alt="Model"
            width={820}
            height={1000}
            priority
            quality={78}
            sizes="(max-width: 768px) 90vw, 45vw"
            className="
              relative
              z-20
              h-[48vh]
              w-auto
              object-contain
              mix-blend-multiply

              sm:h-[58vh]

              lg:h-[88vh]
            "
          />
        </motion.div>

        {/* FLOATING PRODUCT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            absolute
            right-[40px]
            top-[54%]
            z-40
            hidden
            h-[320px]
            w-[190px]
            -translate-y-1/2
            rounded-[999px]
            border
            border-black/5
            bg-white/70
            px-4
            py-6
            shadow-[0_10px_40px_rgba(0,0,0,0.06)]

            lg:flex
            flex-col
            items-center
            justify-between
          "
        >
          {/* PRODUCT */}
          <Image
            src={active.product}
            alt={active.name}
            width={105}
            height={170}
            quality={75}
            sizes="190px"
            className="
              object-contain
            "
          />

          {/* TEXT */}
          <div className="text-center">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-[#777]
              "
            >
              Active Environment
            </p>

            <h3
              className="
                mt-2
                text-[0.95rem]
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
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Droplets,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    id: 1,

    title: "Limpia",

    description:
      "Prepara tu piel con una limpieza suave y ligera.",

    icon: Droplets,

    image: "/images/serum7.webp",

    glow: "rgba(158,206,215,0.28)",
  },

  {
    id: 2,

    title: "Hidrata",

    description:
      "Nutre profundamente con texturas calmantes.",

    icon: Sparkles,

    image: "/images/serum3.webp",

    glow: "rgba(124,139,104,0.28)",
  },

  {
    id: 3,

    title: "Protege",

    description:
      "Sella la luminosidad natural de tu piel.",

    icon: ShieldCheck,

    image: "/images/serum8.webp",

    glow: "rgba(198,162,127,0.28)",
  },
];

export default function Routine() {
  return (
    <section
      className="
        relative
        z-20
        overflow-hidden
        px-8
        py-28
        lg:px-16
      "
    >
      {/* AMBIENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[620px]
          w-[620px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#dfe7df]/20
          blur-[140px]
        "
      />

      {/* TOP */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-20
          mx-auto
          mb-20
          max-w-[760px]
          text-center
        "
      >
        {/* LABEL */}
        <div
          className="
            mb-6
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#ddd4c8]
            bg-white/35
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          <div className="h-2 w-2 rounded-full bg-[#7C8B68]" />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-[#777]
            "
          >
            Daily Experience
          </span>
        </div>

        {/* TITLE */}
        <h2
          className="
            text-[3rem]
            font-semibold
            leading-[0.92]
            tracking-[-0.08em]
            text-[#151515]
            lg:text-[4.6rem]
          "
        >
          Tu rutina diaria
          <br />
          en 3 pasos.
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-7
            max-w-[560px]
            text-[1rem]
            leading-[1.9]
            text-[#666]
          "
        >
          Diseñado para transformar tu rutina
          en una experiencia más ligera,
          inmersiva y sensorial.
        </p>
      </motion.div>

      {/* STEPS */}
      <div
        className="
          relative
          z-20
          grid
          gap-8
          lg:grid-cols-3
        "
      >
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[38%]
                  z-0
                  h-[220px]
                  w-[220px]
                  -translate-x-1/2
                  rounded-full
                  blur-[90px]
                "
                style={{
                  background: step.glow,
                }}
              />

              {/* CARD */}
              <div
                className="
                  relative
                  z-20
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[38px]
                  border
                  border-white/30
                  bg-white/[0.14]
                  p-7
                  backdrop-blur-[18px]
                "
              >
                {/* LIGHT */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[38px]
                    bg-gradient-to-b
                    from-white/35
                    to-transparent
                    opacity-50
                  "
                />

                {/* STEP NUMBER */}
                <div
                  className="
                    relative
                    z-20
                    mb-6
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-white/45
                      backdrop-blur-xl
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#444]"
                    />
                  </div>

                  <span
                    className="
                      text-[0.9rem]
                      tracking-[-0.04em]
                      text-[#777]
                    "
                  >
                    0{step.id}
                  </span>
                </div>

                {/* PRODUCT */}
                <div
                  className="
                    relative
                    z-20
                    flex
                    flex-1
                    items-center
                    justify-center
                    py-4
                  "
                >
                  {/* SHADOW */}
                  <div
                    className="
                      absolute
                      bottom-[18%]
                      h-[30px]
                      w-[170px]
                      rounded-full
                      bg-black/10
                      blur-[20px]
                    "
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      rotate: -2,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={420}
                      height={500}
                      className="
                        relative
                        z-20
                        w-[210px]
                        object-contain
                        drop-shadow-[0_40px_60px_rgba(0,0,0,0.16)]
                      "
                    />
                  </motion.div>
                </div>

                {/* INFO */}
                <div
                  className="
                    relative
                    z-20
                    mt-4
                    text-center
                  "
                >
                  <h3
                    className="
                      text-[1.7rem]
                      font-medium
                      tracking-[-0.06em]
                      text-[#171717]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-4
                      max-w-[260px]
                      text-[0.96rem]
                      leading-[1.8]
                      text-[#666]
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* HOVER SHINE */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[38px]
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at top,
                        rgba(255,255,255,0.22),
                        transparent 60%
                      )
                    `,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
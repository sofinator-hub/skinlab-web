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

    glow: "rgba(158,206,215,0.18)",
  },

  {
    id: 2,

    title: "Hidrata",

    description:
      "Nutre profundamente con texturas calmantes.",

    icon: Sparkles,

    image: "/images/serum3.webp",

    glow: "rgba(124,139,104,0.18)",
  },

  {
    id: 3,

    title: "Protege",

    description:
      "Sella la luminosidad natural de tu piel.",

    icon: ShieldCheck,

    image: "/images/serum8.webp",

    glow: "rgba(198,162,127,0.18)",
  },
];

export default function Routine() {
  return (
    <section
      className="
        relative
        z-20
        overflow-hidden
        px-6
        py-24

        lg:px-16
      "
    >
      {/* SOFT AMBIENT LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#dfe7df]/18
          blur-[90px]
          opacity-70

          lg:h-[460px]
          lg:w-[460px]
          lg:blur-[120px]
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
          duration: 0.7,
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
            border-black/5
            bg-white/70
            px-5
            py-3
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
            text-[2.8rem]
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
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
              "
            >
              {/* SOFT GLOW */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[38%]
                  z-0
                  h-[180px]
                  w-[180px]
                  -translate-x-1/2
                  rounded-full
                  blur-[60px]
                  opacity-70
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
                  rounded-[34px]
                  border
                  border-black/5
                  bg-white/65
                  p-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                "
              >
                {/* LIGHT */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[34px]
                    bg-gradient-to-b
                    from-white/25
                    to-transparent
                    opacity-40
                  "
                />

                {/* TOP */}
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
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-white/70
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#444]"
                    />
                  </div>

                  {/* NUMBER */}
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
                      h-[24px]
                      w-[160px]
                      rounded-full
                      bg-black/10
                      blur-[18px]
                    "
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      rotate: -1,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={420}
                      height={500}
                      quality={78}
                      sizes="
                        (max-width: 768px) 70vw,
                        (max-width: 1280px) 35vw,
                        24vw
                      "
                      className="
                        relative
                        z-20
                        w-[200px]
                        object-contain
                        drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]
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
                      text-[1.55rem]
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
                    rounded-[34px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at top,
                        rgba(255,255,255,0.16),
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
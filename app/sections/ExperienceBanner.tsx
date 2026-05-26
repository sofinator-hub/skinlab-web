"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Droplets,
  ShieldCheck,
  Sparkles,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    text: "Hidratación profunda",
  },

  {
    icon: ShieldCheck,
    text: "Refuerza la barrera",
  },

  {
    icon: Sparkles,
    text: "Tecnología LED",
  },

  {
    icon: Leaf,
    text: "Ritual nocturno",
  },
];

export default function ExperienceBanner() {
  return (
    <section
      className="
        relative
        z-20
        px-6

        lg:px-16
      "
    >
      <motion.div
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
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-black/5
          bg-white/65
          p-6
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]

          lg:rounded-[42px]
          lg:p-12
        "
      >
        {/* SOFT GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-60px]
            top-1/2
            h-[220px]
            w-[220px]
            -translate-y-1/2
            rounded-full
            bg-[#9ECED7]/20
            blur-[70px]
            opacity-70

            lg:h-[320px]
            lg:w-[320px]
            lg:blur-[100px]
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-20
            grid
            gap-10

            lg:grid-cols-[0.9fr_1fr_0.8fr]
            lg:items-center
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-black/5
              bg-[#ece7de]
              p-4
            "
          >
            {/* LIGHT */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#a8b59b]/10
                to-transparent
              "
            />

            <Image
              src="/images/ledmask.webp"
              alt="LED Mask"
              width={700}
              height={700}
              quality={78}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="
                relative
                z-20
                w-full
                object-contain
              "
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="max-w-[520px]">
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
              <div className="h-2 w-2 rounded-full bg-[#9ECED7]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-[#666]
                "
              >
                Experiencia EDEN
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                text-[2.8rem]
                font-semibold
                leading-[0.92]
                tracking-[-0.07em]
                text-[#151515]

                lg:text-[4.2rem]
              "
            >
              Kit Regeneración Facial
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-[460px]
                text-[1rem]
                leading-[1.9]
                text-[#5f5f5f]
              "
            >
              Tecnología LED, hidratación profunda
              y rituales diseñados para restaurar
              tu piel durante la noche.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-8
                rounded-full
                bg-[#7C8B68]
                px-7
                py-4
                text-[0.9rem]
                text-white
                shadow-[0_10px_30px_rgba(124,139,104,0.22)]
                transition-all
                duration-300

                hover:scale-[1.02]
                hover:bg-[#6d7b5c]
              "
            >
              Descubrir experiencia
            </button>
          </div>

          {/* RIGHT BENEFITS */}
          <div
            className="
              flex
              flex-col
              gap-5
            "
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[22px]
                    border
                    border-black/5
                    bg-white/65
                    p-4
                    shadow-[0_6px_20px_rgba(0,0,0,0.03)]
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
                      bg-[#9ECED7]/15
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#5f6f72]"
                    />
                  </div>

                  {/* TEXT */}
                  <span
                    className="
                      text-[0.95rem]
                      text-[#333]
                    "
                  >
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
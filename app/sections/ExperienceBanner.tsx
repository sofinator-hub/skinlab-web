"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Droplets,
  ShieldCheck,
  Sparkles,
  Leaf,
} from "lucide-react";

export default function ExperienceBanner() {
  return (
    <section
      className="
        relative
        z-20
        px-8
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
          duration: 0.9,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          overflow-hidden
          rounded-[42px]
          border
          border-white/30
          bg-white/[0.16]
          p-8
          backdrop-blur-[24px]
          lg:p-12
        "
      >
        {/* LIGHT */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#dbe7ea]/30
            via-white/10
            to-[#a8b59b]/20
          "
        />

        {/* GLOW */}
        <div
          className="
            absolute
            right-[-120px]
            top-1/2
            h-[320px]
            w-[320px]
            -translate-y-1/2
            rounded-full
            bg-[#9ECED7]/30
            blur-[120px]
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
              rounded-[32px]
              bg-[#e9e4da]/70
              p-4
            "
          >
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
              className="
                relative
                z-20
                w-full
                object-contain
              "
            />
          </div>

          {/* CENTER */}
          <div className="max-w-[520px]">
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#d7d0c6]
                bg-white/40
                px-5
                py-3
                backdrop-blur-xl
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
                Featured Experience
              </span>
            </div>

            <h2
              className="
                text-[3rem]
                font-semibold
                leading-[0.92]
                tracking-[-0.07em]
                text-[#151515]
                lg:text-[4.4rem]
              "
            >
              Glow Recovery Kit
            </h2>

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
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-8
                rounded-full
                bg-[#7C8B68]
                px-7
                py-4
                text-[0.9rem]
                text-white
                shadow-[0_10px_40px_rgba(124,139,104,0.35)]
                transition-all
                duration-500
                hover:bg-[#6d7b5c]
              "
            >
              Descubrir experiencia
            </motion.button>
          </div>

          {/* RIGHT BENEFITS */}
          <div
            className="
              flex
              flex-col
              gap-6
            "
          >
            {[
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
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[24px]
                    border
                    border-white/30
                    bg-white/30
                    p-4
                    backdrop-blur-xl
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
                      bg-[#9ECED7]/20
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#5f6f72]"
                    />
                  </div>

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
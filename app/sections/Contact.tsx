"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      className="
        relative
        z-20
        overflow-hidden
        px-8
        pb-24
        pt-36
        lg:px-16
      "
    >
      {/* AMBIENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#d9e3d0]/20
          blur-[140px]
        "
      />

      {/* TOP LINE */}
      <div
        className="
          mb-20
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#d8d0c5]
          to-transparent
        "
      />

      <div
        className="
          relative
          z-20
          grid
          gap-14
          lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* LEFT */}
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
              bg-white/30
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
              Contact • EDEN
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              max-w-[760px]
              text-[3.5rem]
              font-semibold
              leading-[0.9]
              tracking-[-0.08em]
              text-[#151515]
              lg:text-[6rem]
            "
          >
            Tu piel merece
            <br />
            una experiencia
            <br />
            más consciente.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-[620px]
              text-[1rem]
              leading-[2]
              text-[#666]
              lg:text-[1.05rem]
            "
          >
            EDEN combina naturaleza,
            tecnología y bienestar sensorial
            para crear una nueva experiencia
            de skincare futurista y premium.
          </p>
        </motion.div>

        {/* RIGHT CARD */}
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
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
          "
        >
          {/* CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-white/30
              bg-white/[0.16]
              p-8
              backdrop-blur-[20px]
            "
          >
            {/* LIGHT */}
            <div
              className="
                absolute
                inset-0
                rounded-[42px]
                bg-gradient-to-b
                from-white/30
                to-transparent
                opacity-60
              "
            />

            {/* CONTENT */}
            <div className="relative z-20">
              {/* MINI TITLE */}
              <span
                className="
                  text-[0.78rem]
                  uppercase
                  tracking-[0.26em]
                  text-[#777]
                "
              >
                Connect with EDEN
              </span>

              {/* BIG TEXT */}
              <h3
                className="
                  mt-5
                  text-[2rem]
                  font-medium
                  leading-[1]
                  tracking-[-0.06em]
                  text-[#171717]
                "
              >
                Book your
                <br />
                next ritual.
              </h3>

              {/* LINKS */}
              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-5
                "
              >
                {/* INSTAGRAM */}
                <a
                  href="#"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-[24px]
                    border
                    border-white/30
                    bg-white/25
                    px-5
                    py-5
                    transition-all
                    duration-500
                    hover:bg-white/40
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#efe7dc]
                      "
                    >
                      <Camera
                        size={18}
                        className="text-[#222]"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-[0.82rem]
                          uppercase
                          tracking-[0.2em]
                          text-[#888]
                        "
                      >
                        Instagram
                      </p>

                      <span
                        className="
                          text-[1rem]
                          text-[#171717]
                        "
                      >
                        @eden.skinlab
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-[#555]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:contact@edenstudio.com"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-[24px]
                    border
                    border-white/30
                    bg-white/25
                    px-5
                    py-5
                    transition-all
                    duration-500
                    hover:bg-white/40
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#dce7ea]
                      "
                    >
                      <Mail
                        size={18}
                        className="text-[#222]"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-[0.82rem]
                          uppercase
                          tracking-[0.2em]
                          text-[#888]
                        "
                      >
                        Email
                      </p>

                      <span
                        className="
                          text-[1rem]
                          text-[#171717]
                        "
                      >
                        contact@edenstudio.com
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-[#555]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </div>

              {/* BUTTON */}
              <button
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#171717]
                  px-7
                  py-4
                  text-[0.95rem]
                  text-white
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  hover:bg-[#2a2a2a]
                "
              >
                Reservar experiencia

                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div
        className="
          relative
          z-20
          mt-32
          flex
          flex-col
          items-center
          justify-between
          gap-10
          border-t
          border-[#ddd4c8]
          pt-10
          lg:flex-row
        "
      >
        {/* BRAND */}
        <div>
          <h3
            className="
              text-[2rem]
              tracking-[-0.08em]
              text-[#171717]
            "
          >
            EDEN
          </h3>

          <p
            className="
              mt-2
              text-[0.9rem]
              tracking-[0.22em]
              text-[#777]
            "
          >
            Nature • Science • You
          </p>
        </div>

        {/* NAV */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-8
            text-[0.82rem]
            uppercase
            tracking-[0.22em]
            text-[#777]
          "
        >
          <a
            href="#"
            className="transition hover:text-[#171717]"
          >
            Products
          </a>

          <a
            href="#"
            className="transition hover:text-[#171717]"
          >
            Experiences
          </a>

          <a
            href="#"
            className="transition hover:text-[#171717]"
          >
            Studio
          </a>

          <a
            href="#"
            className="transition hover:text-[#171717]"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
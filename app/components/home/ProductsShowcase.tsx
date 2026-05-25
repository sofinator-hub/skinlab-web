"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Botanical Recovery Serum",
    category: "Hydration",
    price: "$48",
    image: "/images/serum1.webp",
    glow: "rgba(168,181,155,0.30)",
  },

  {
    id: 2,
    name: "Centella Skin Essence",
    category: "Barrier Care",
    price: "$52",
    image: "/images/serum2.webp",
    glow: "rgba(175,207,211,0.30)",
  },

  {
    id: 3,
    name: "Night Repair Ampoule",
    category: "Recovery",
    price: "$64",
    image: "/images/serum3.webp",
    glow: "rgba(198,162,127,0.30)",
  },

  {
    id: 4,
    name: "Botanical Glow Oil",
    category: "Radiance",
    price: "$58",
    image: "/images/serum4.webp",
    glow: "rgba(168,181,155,0.30)",
  },

  {
    id: 5,
    name: "Crystal Water Toner",
    category: "Freshness",
    price: "$42",
    image: "/images/serum5.webp",
    glow: "rgba(175,207,211,0.30)",
  },

  {
    id: 6,
    name: "Earth Balance Cream",
    category: "Moisturizer",
    price: "$55",
    image: "/images/serum6.webp",
    glow: "rgba(198,162,127,0.30)",
  },
];

export default function ProductsShowcase() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-8
        py-24
        lg:px-16
      "
    >
      {/* BACKGROUND LIGHT */}
      <div
        className="
          absolute
          left-[-200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#dfe8d7]/25
          blur-[120px]
        "
      />

      {/* TOP */}
      <div
        className="
          mb-20
          grid
          gap-10
          lg:grid-cols-[1.2fr_0.8fr]
          lg:items-end
        "
      >
        {/* LEFT */}
        <div className="max-w-[780px]">
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#ddd5ca]
              bg-white/40
              px-5
              py-3
              backdrop-blur-xl
            "
          >
            <div className="h-2 w-2 rounded-full bg-[#93a086]" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-[#777]
              "
            >
              Botanical Collection
            </span>
          </div>

          <h2
            className="
              max-w-[900px]
              text-[3.4rem]
              font-semibold
              leading-[0.9]
              tracking-[-0.08em]
              text-[#111]
              lg:text-[5rem]
            "
          >
            Skincare designed
            <span className="text-[#9aa88e]">
              {" "}
              as ritual.
            </span>
          </h2>
        </div>

        {/* RIGHT */}
        <div className="lg:pl-20">
          <p
            className="
              max-w-[420px]
              text-[1.05rem]
              leading-relaxed
              text-[#666]
            "
          >
            Thoughtfully crafted botanical formulas
            designed to transform skincare into a
            calm sensory experience inspired by
            nature, water and modern wellness rituals.
          </p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div
        className="
          grid
          gap-x-14
          gap-y-16
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {products.map((product, index) => {
          const large =
            index === 1 || index === 4;

          return (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
              "
            >
              {/* AMBIENT GLOW */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="
                  absolute
                  left-1/2
                  top-[28%]
                  z-0
                  h-[240px]
                  w-[240px]
                  -translate-x-1/2
                  rounded-full
                  blur-[90px]
                "
                style={{
                  background: product.glow,
                }}
              />

              {/* PRODUCT AREA */}
              <div
                className={`
                  relative
                  flex
                  items-center
                  justify-center
                  rounded-[42px]
                  border
                  border-white/30
                  bg-white/[0.18]
                  backdrop-blur-[14px]
                  transition-all
                  duration-700

                  ${
                    large
                      ? "h-[520px]"
                      : "h-[440px]"
                  }
                `}
              >
                {/* INNER LIGHT */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[42px]
                    bg-gradient-to-b
                    from-white/40
                    to-transparent
                    opacity-40
                  "
                />

                {/* PRODUCT */}
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    rotate: -1.5,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="relative z-10"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={600}
                    quality={100}
                    className={`
                      object-contain
                      drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)]
                      transition-all
                      duration-700

                      ${
                        large
                          ? "w-[300px]"
                          : "w-[260px]"
                      }
                    `}
                  />
                </motion.div>

                {/* HOVER SHINE */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[42px]
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at top,
                        rgba(255,255,255,0.35),
                        transparent 60%
                      )
                    `,
                  }}
                />
              </div>

              {/* INFO */}
              <div className="mt-7 px-2">
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.28em]
                      text-[#8b8b8b]
                    "
                  >
                    {product.category}
                  </p>

                  <span
                    className="
                      text-[0.95rem]
                      text-[#666]
                    "
                  >
                    {product.price}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-5
                  "
                >
                  <h3
                    className="
                      max-w-[240px]
                      text-[1.8rem]
                      font-medium
                      leading-[1]
                      tracking-[-0.05em]
                      text-[#111]
                    "
                  >
                    {product.name}
                  </h3>

                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      rounded-full
                      border
                      border-[#ddd5ca]
                      bg-white/40
                      px-5
                      py-3
                      text-sm
                      text-[#222]
                      opacity-0
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    View Ritual
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
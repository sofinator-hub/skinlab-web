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
      {/* AMBIENT LIGHT */}
      <div
        className="
          absolute
          left-[-200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#dfe8d7]/20
          blur-[140px]
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
        <div className="max-w-[760px]">
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#ddd5ca]
              bg-white/35
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
              max-w-[820px]
              text-[3.2rem]
              font-semibold
              leading-[0.9]
              tracking-[-0.08em]
              text-[#111]
              lg:text-[4.8rem]
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
        <div className="lg:pl-16">
          <p
            className="
              max-w-[420px]
              text-[1.02rem]
              leading-relaxed
              text-[#666]
            "
          >
            Thoughtfully crafted botanical formulas
            designed to transform skincare into a
            calm sensory experience inspired by
            modern wellness rituals.
          </p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div
        className="
          grid
          gap-10
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {products.map((product, index) => (
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
              y: -8,
            }}
            className="group relative"
          >
            {/* GLOW */}
            <motion.div
              animate={{
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
                absolute
                left-1/2
                top-[35%]
                z-0
                h-[260px]
                w-[260px]
                -translate-x-1/2
                rounded-full
                blur-[90px]
              "
              style={{
                background: product.glow,
              }}
            />

            {/* CARD */}
            <div
              className="
                relative
                z-10
                flex
                h-[620px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[40px]
                border
                border-white/35
                bg-white/[0.18]
                p-8
                backdrop-blur-[18px]
                transition-all
                duration-700
              "
            >
              {/* LIGHT OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[40px]
                  bg-gradient-to-b
                  from-white/35
                  to-transparent
                  opacity-50
                "
              />

              {/* CATEGORY */}
              <div
                className="
                  relative
                  z-20
                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.28em]
                    text-[#888]
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

              {/* PRODUCT IMAGE */}
              <div
                className="
                  relative
                  z-20
                  flex
                  flex-1
                  items-center
                  justify-center
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    rotate: -1.5,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={600}
                    quality={100}
                    className="
                      w-[280px]
                      object-contain
                      drop-shadow-[0_30px_45px_rgba(0,0,0,0.12)]
                    "
                  />
                </motion.div>
              </div>

              {/* INFO */}
              <div className="relative z-20">
                <h3
                  className="
                    max-w-[280px]
                    text-[1.9rem]
                    font-medium
                    leading-[1]
                    tracking-[-0.05em]
                    text-[#111]
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[320px]
                    text-[0.98rem]
                    leading-relaxed
                    text-[#666]
                  "
                >
                  Botanical skincare crafted to
                  transform your daily routine into
                  a calming self-care ritual.
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-7
                    rounded-full
                    border
                    border-[#ddd5ca]
                    bg-white/35
                    px-5
                    py-3
                    text-sm
                    text-[#222]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:bg-white/55
                  "
                >
                  View Ritual
                </motion.button>
              </div>

              {/* HOVER SHINE */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[40px]
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:opacity-100
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at top,
                      rgba(255,255,255,0.28),
                      transparent 60%
                    )
                  `,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
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
    description:
      "Lightweight hydration designed for tired and stressed skin.",
  },

  {
    id: 2,
    name: "Centella Skin Essence",
    category: "Barrier Care",
    price: "$52",
    image: "/images/serum2.webp",
    glow: "rgba(175,207,211,0.30)",
    description:
      "A calming formula inspired by botanical barrier recovery.",
  },

  {
    id: 3,
    name: "Night Repair Ampoule",
    category: "Recovery",
    price: "$64",
    image: "/images/serum3.webp",
    glow: "rgba(198,162,127,0.30)",
    description:
      "Deep overnight nourishment with soft mineral textures.",
  },

  {
    id: 4,
    name: "Botanical Glow Oil",
    category: "Radiance",
    price: "$58",
    image: "/images/serum4.webp",
    glow: "rgba(168,181,155,0.30)",
    description:
      "Natural radiance with lightweight botanical oils.",
  },

  {
    id: 5,
    name: "Crystal Water Toner",
    category: "Freshness",
    price: "$42",
    image: "/images/serum5.webp",
    glow: "rgba(175,207,211,0.30)",
    description:
      "Refreshing hydration inspired by crystal water reflections.",
  },

  {
    id: 6,
    name: "Earth Balance Cream",
    category: "Moisturizer",
    price: "$55",
    image: "/images/serum6.webp",
    glow: "rgba(198,162,127,0.30)",
    description:
      "Soft moisture recovery with warm earthy ingredients.",
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
          lg:grid-cols-[1.1fr_0.9fr]
          lg:items-end
        "
      >
        {/* LEFT */}
        <div className="max-w-[650px]">
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
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[#777]
              "
            >
              Botanical Collection
            </span>
          </div>

          <h2
            className="
              max-w-[620px]
              text-[3rem]
              font-semibold
              leading-[0.88]
              tracking-[-0.08em]
              text-[#111]
              lg:text-[3.8rem]
            "
          >
            Skincare designed
            for slower moments.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="lg:pl-10">
          <p
            className="
              max-w-[340px]
              text-[0.92rem]
              leading-[1.9]
              text-[#666]
            "
          >
            Thoughtfully crafted botanical formulas
            inspired by calm textures, hydration and
            modern self-care experiences.
          </p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div
        className="
          grid
          gap-x-10
          gap-y-14
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              y: 50,
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
            className={`
              group
              relative

              ${index % 2 === 0 ? "mt-0" : "mt-8"}
            `}
          >
            {/* GLOW */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
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

            {/* CARD */}
            <div
              className="
                relative
                z-10
                flex
                h-[540px]
                flex-col
                overflow-hidden
                rounded-[38px]
                border
                border-white/30
                bg-white/[0.16]
                p-7
                backdrop-blur-[18px]
                transition-all
                duration-700
              "
            >
              {/* LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[38px]
                  bg-gradient-to-b
                  from-white/30
                  to-transparent
                  opacity-50
                "
              />

              {/* CATEGORY */}
              <div className="relative z-20">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.30em]
                    text-[#888]
                  "
                >
                  {product.category}
                </p>
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
                  mb-8
                "
              >
                {/* SHADOW BASE */}
                <div
                  className="
                    absolute
                    bottom-[16%]
                    h-[30px]
                    w-[180px]
                    rounded-full
                    bg-black/10
                    blur-[22px]
                  "
                />

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
                      w-[250px]
                      object-contain
                      drop-shadow-[0_40px_60px_rgba(0,0,0,0.18)]
                    "
                  />
                </motion.div>
              </div>

              {/* INFO */}
              <div className="relative z-20">
                <h3
                  className="
                    max-w-[240px]
                    text-[1.45rem]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.05em]
                    text-[#111]
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[290px]
                    text-[0.88rem]
                    leading-[1.8]
                    text-[#666]
                  "
                >
                  {product.description}
                </p>

                {/* BOTTOM */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[1rem]
                      tracking-[-0.03em]
                      text-[#222]
                    "
                  >
                    {product.price}
                  </span>

                  <motion.button
                    whileHover={{
                      x: 3,
                    }}
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.24em]
                      text-[#555]
                    "
                  >
                    Explore →
                  </motion.button>
                </div>
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
                      rgba(255,255,255,0.24),
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
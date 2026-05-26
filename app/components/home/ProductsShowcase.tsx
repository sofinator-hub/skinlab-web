"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Botanical Recovery Serum",
    price: "$48",
    image: "/images/serum1.webp",
    glow: "rgba(168,181,155,0.18)",
  },

  {
    id: 2,
    name: "Centella Skin Essence",
    price: "$52",
    image: "/images/serum2.webp",
    glow: "rgba(175,207,211,0.18)",
  },

  {
    id: 3,
    name: "Night Repair Ampoule",
    price: "$64",
    image: "/images/serum3.webp",
    glow: "rgba(198,162,127,0.18)",
  },

  {
    id: 4,
    name: "Botanical Glow Oil",
    price: "$58",
    image: "/images/serum4.webp",
    glow: "rgba(168,181,155,0.18)",
  },

  {
    id: 5,
    name: "Crystal Water Toner",
    price: "$42",
    image: "/images/serum5.webp",
    glow: "rgba(175,207,211,0.18)",
  },

  {
    id: 6,
    name: "Earth Balance Cream",
    price: "$55",
    image: "/images/serum6.webp",
    glow: "rgba(198,162,127,0.18)",
  },
];

export default function ProductsShowcase() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-24

        lg:px-16
      "
    >
      {/* SOFT LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[20%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#dfe8d7]/20
          blur-[90px]
          opacity-70

          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[120px]
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
        <div className="max-w-[620px]">
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

          {/* TITLE */}
          <h2
            className="
              max-w-[560px]
              text-[2.8rem]
              font-semibold
              leading-[0.88]
              tracking-[-0.08em]
              text-[#111]

              lg:text-[3.8rem]
            "
          >
            Skincare.
          </h2>
        </div>

        {/* EMPTY */}
        <div className="lg:pl-10" />
      </div>

      {/* PRODUCTS */}
      <div
        className="
          grid
          gap-x-8
          gap-y-12

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
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
              delay: index * 0.06,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -6,
            }}
            className={`
              group
              relative

              ${index % 2 === 0 ? "mt-0" : "mt-8"}
            `}
          >
            {/* SOFT GLOW */}
            <div
              className="
                absolute
                left-1/2
                top-[35%]
                z-0
                h-[180px]
                w-[180px]
                -translate-x-1/2
                rounded-full
                blur-[60px]
                opacity-70
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
                h-[440px]
                flex-col
                overflow-hidden
                rounded-[34px]
                border
                border-black/5
                bg-white/65
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
              "
            >
              {/* LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[34px]
                  bg-gradient-to-b
                  from-white/30
                  to-transparent
                  opacity-40
                "
              />

              {/* PLUS BUTTON */}
              <button
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#7C8B68]/20
                  bg-[#7C8B68]/10
                  transition-all
                  duration-300

                  hover:scale-[1.05]
                  hover:bg-[#7C8B68]/20
                "
              >
                <Plus
                  size={18}
                  color="#749d3b"
                  strokeWidth={2}
                />
              </button>

              {/* PRODUCT */}
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
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={600}
                    quality={78}
                    sizes="
                      (max-width: 768px) 70vw,
                      (max-width: 1280px) 40vw,
                      26vw
                    "
                    className="
                      w-[210px]
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
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                <h3
                  className="
                    max-w-[240px]
                    text-[1.25rem]
                    font-medium
                    leading-[1.1]
                    tracking-[-0.05em]
                    text-[#111]
                  "
                >
                  {product.name}
                </h3>

                <span
                  className="
                    mt-4
                    text-[1.08rem]
                    tracking-[-0.04em]
                    text-[#222]
                  "
                >
                  {product.price}
                </span>
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
        ))}
      </div>
    </section>
  );
}
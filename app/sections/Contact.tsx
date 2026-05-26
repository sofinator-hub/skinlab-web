"use client";
 
import {
  Camera,
  Music2,
  PinIcon,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <footer
      className="
        relative
        z-20
        mt-24
        overflow-hidden
        border-t
        border-[#ddd6cc]
        bg-[#f8f4ee]/70
        px-8
        py-14
        backdrop-blur-xl
        lg:px-16
      "
    >
      {/* TOP CONTENT */}
      <div
        className=" 
          grid
          gap-14
          lg:grid-cols-[1.2fr_2fr_1.1fr]
        "
      >
        {/* LEFT */}
        <div>
          {/* LOGO */}
          <h2
            className="
              text-[2.5rem]
              font-medium
              tracking-[-0.08em]
              text-[#1a1a1a]
            "
          >
            EDEN
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              max-w-[260px]
              text-[0.95rem]
              leading-[1.8]
              text-[#666]
            " 
          >
            Skincare botánico inspirado en
            la naturaleza. Hecho para ti.
          </p>

          {/* SOCIALS */}
          <div
            className="
              mt-7
              flex
              items-center
              gap-4
            "
          >
            {[
              Camera,
              Music2,
              PinIcon,
              Mail,
            ].map((Icon, index) => (
              <button
                key={index}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ddd6cc]
                  bg-white/70
                  text-[#444]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ede6da]
                "
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* CENTER LINKS */}
        <div
          className="
            grid
            gap-10
            sm:grid-cols-3
          "
        >
          {/* COLUMN 1 */}
          <div>
            <h3
              className="
                mb-5
                text-[0.95rem]
                font-medium
                text-[#171717]
              "
            >
              Tienda
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              {[
                "Todos los productos",
                "Kits y rutinas",
                "Novedades",
                "Bestsellers",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    text-[0.9rem]
                    text-[#666]
                    transition
                    hover:text-[#111]
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3
              className="
                mb-5
                text-[0.95rem]
                font-medium
                text-[#171717]
              "
            >
              Marca
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              {[
                "Sobre nosotros",
                "Ingredientes",
                "Sostenibilidad",
                "Blog",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    text-[0.9rem]
                    text-[#666]
                    transition
                    hover:text-[#111]
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3
              className="
                mb-5
                text-[0.95rem]
                font-medium
                text-[#171717]
              "
            >
              Ayuda
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              {[
                "Preguntas frecuentes",
                "Envíos y devoluciones",
                "Contacto",
                "Términos y condiciones",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    text-[0.9rem]
                    text-[#666]
                    transition
                    hover:text-[#111]
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT NEWSLETTER */}
        <div>
          <h3
            className="
              max-w-[240px]
              text-[1rem]
              leading-[1.7]
              text-[#444]
            "
          >
            Recibe 10% de descuento
            en tu primera compra.
          </h3>

          {/* INPUT */}
          <div
            className="
              mt-7
              flex
              items-center
              overflow-hidden
              rounded-full
              border
              border-[#ddd6cc]
              bg-white/80
              backdrop-blur-xl
            "
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="
                w-full
                bg-transparent
                px-5
                py-4
                text-[0.9rem]
                text-[#222]
                outline-none
                placeholder:text-[#999]
              "
            />

            <button
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#7C8B68]
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#6f7d5d]
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          mt-14
          flex
          flex-col
          items-center
          justify-between
          gap-4
          border-t
          border-[#e4ddd2]
          pt-6
          text-[0.82rem]
          text-[#888]
          lg:flex-row
        "
      >
        <p>© 2026 EDEN. Todos los derechos reservados.</p>

        <p>Nature • Science • You</p>
      </div>
    </footer>
  );
}
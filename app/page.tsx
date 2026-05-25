import Hero from "./sections/hero";
import ProductsShowcase from "./components/home/ProductsShowcase";

export default function Home() {
  return (
    <main
      className="
        relative
        overflow-hidden
        bg-transparent
      "
    >
      {/* HERO */}
      <Hero />

      {/* SOFT TRANSITION SPACE */}
      <div className="h-[12vh]" />

      {/* PRODUCTS */}
      <ProductsShowcase />

      {/* AMBIENT BOTTOM GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-1/2
          z-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#a8b59b]/20
          blur-[140px]
        "
      />

      {/* FLOATING LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[40%]
          z-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#dbe7ea]/30
          blur-[120px]
        "
      />

      {/* EXTRA SPACE */}
      <div className="h-[18vh]" />
    </main>
  );
}
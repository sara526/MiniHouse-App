import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const slides = [
    {
      img: "/hero/home5.webp",
      title: "SHOP THE LOOK",
      desc: "STEP INTO OUR LATEST LOOKBOOK AND EXPLORE A BEAUTIFULLY STYLED LIVING ROOM FEATURING A COZY ARMCHAIR AND SLEEK TV CABINET",
      btn: "SHOP NOW",
    },
    {
      img: "/hero/home4.webp",
      title: "ELEGANT INTERIORS",
      desc: "DISCOVER MODERN FURNITURE PIECES THAT BRING WARMTH AND STYLE TO YOUR HOME.",
      btn: "DISCOVER MORE",
    },
    {
      img: "/images/slide3.webp",
      title: "DESIGN YOUR SPACE",
      desc: "MIX COMFORT WITH STYLE – CREATE YOUR PERFECT LIVING ROOM WITH OUR COLLECTION.",
      btn: "START SHOPPING",
    },
  ];

  const [current, setCurrent] = useState(0);

  // change image 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <AnimatePresence>
        {/* الصورة المتغيرة */}
        <motion.img
          key={slides[current].img}
          src={slides[current].img}
          alt={slides[current].title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* النصوص فوق الصورة */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-wide"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].desc}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 max-w-3xl text-lg md:text-xl font-light leading-relaxed"
        >
          {slides[current].desc}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wide shadow-md hover:bg-yellow-400 transition"
        >
          {slides[current].btn}
        </motion.button>
      </div>

      {/* النقاط (indicators) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

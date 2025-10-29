// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function CuratedPicks() {

  const topImages = ["/cur/c1.webp", "/cur/c2.webp", "/cur/c4.webp"];
  const bottomImage = "/cur/c3.webp";

  return (
    <section className="py-16 text-center bg-white gap-1.5">
      {/* Subtitle */}
      <motion.p
        className="text-xs text-gray-400 tracking-wider mb-2 uppercase"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Top Featured Furniture Edit
      </motion.p>

      {/* Main title */}
      <motion.h2
        className="text-xl font-semibold tracking-widest text-gray-700 mb-10"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}>
        CURATED PICKS TO ELEVATE
      </motion.h2>

      {/* Top row: three small images */}
      <div className="flex justify-center gap-6 flex-wrap mb-10 px-4">
        {topImages.map((src, index) => (
          <motion.div
            key={index} className="overflow-hidden rounded-xl shadow-md max-w-xs w-full sm:w-60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: index * 0.18, ease: "easeOut" }}
            viewport={{ once: true }} >
            <picture>
               <source srcSet={src} type="image/webp" />
               <source srcSet={src.replace(".webp", ".avif")} type="image/avif" />
               <img src={src}  alt={`pick-${index + 1}`}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500" loading="lazy"/>
            </picture>
          </motion.div>
        ))}
      </div>
      {/* Bottom large image */}
      <motion.div
        className="max-w-5xl mx-auto overflow-hidden rounded-xl shadow-md mb-8"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}>
        <img
  src={bottomImage}
  alt="Curated Large"
  style={{ width: "100%", height: "auto" }}
/>


      </motion.div>
      {/* Shop Now button */}
      <motion.button
        className="px-6 py-3 bg-black text-white rounded-full text-sm tracking-wider hover:bg-gray-800 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        aria-label="Shop Now">
        SHOP NOW
      </motion.button>
    </section>
  );
}

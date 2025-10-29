// Feature: framer-motion مكتبة حديثة للحركات السلسة في React
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    { name: "Brand 1", img: "/brands/brand1.webp" },
    { name: "Brand 2", img: "/brands/brand2.webp" },
    { name: "Brand 4", img: "/brands/brand4.webp" },
    { name: "Brand 6", img: "/brands/brand6.webp" },
    { name: "Brand 9", img: "/brands/brand9.webp" },
    { name: "Brand 10", img: "/brands/brand10.webp" },
    { name: "Brand 11", img: "/brands/brand11.webp" },
    { name: "Brand 12", img: "/brands/brand12.webp" }
  ];

  return (
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-100%"] }}  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <div key={index} className="shrink-0 w-40">
            <img
              loading="lazy"
              src={brand.img}
              alt={brand.name}
              className="w-22 h-20 my-1.5"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

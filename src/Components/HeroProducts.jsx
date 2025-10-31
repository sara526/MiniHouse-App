// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const HeroProducts = () => {
  const products = [
    { id: 1, name: "Chair", img: "/cate/cate5.jpg" },
    { id: 2, name: "Lamp", img: "/cate/cate1.webp" },
    { id: 3, name: "Sofa", img: "/cate/cate2.webp" },
    { id: 4, name: "Table", img: "/cate/cate3.webp" },
    { id: 5, name: "Plant", img: "/cate/cate4.webp" },
  ];

  return (
    <section className="bg-gray-100 py-16 overflow-hidden relative flex flex-col items-center space-y-8 min-h-[60vh]">
      {/* العنوان في المنتصف */}
      <h2 className="text-4xl font-bold text-gray-800 text-center">Our Featured Products</h2>

      {/* شريط المنتجات المتحرك */}
      <div className="relative w-[90%] mx-auto overflow-hidden rounded-2xl bg-white/0">
        <motion.div
          className="flex gap-6 items-center" animate={{ x: ["0%", "-50%"] }}
          transition={{  repeat: Infinity, duration: 22, ease: "linear"}}>

          {[...products, ...products].map((product, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white shadow-md rounded-xl overflow-hidden shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <p className="text-center py-3 font-medium text-gray-700">
                {product.name}
              </p>
            </div>
          ))}
        </motion.div>


        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-20" aria-hidden="true">
          <div className="h-full w-full bg-linear-to-r from-gray-100 via-white/90 to-transparent" />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-20"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-linear-to-l from-gray-100 via-white/90 to-transparent" />
        </div>
      </div>

      <div>
        <h3 className="text-center text-gray-400">Our Story</h3>
        <h2 className="text-center text-3xl font-extrabold ">EXPLORE MINICOM STORE</h2>
        <p className=" text-center text-gray-700 leading-relaxed text-lg">
        Discover our exclusive furniture collection designed to bring comfort and
        style into your home. Every piece is crafted with precision and quality materials that last for years. 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, enim. Maiores nihil quo, eaque quia minus laudantium reprehenderit nam, veniam voluptates molestiae delectus praesentium alias! Ipsum in qui aliquam nesciunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut sunt illum rerum dolores esse obcaecati doloremque officia a molestiae incidunt inventore, cum saepe debitis quo sapiente exercitationem veritatis enim.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor alias dolore cum culpa dolores corporis sapiente a ut velit pariatur minima expedita, ullam est odio. Unde amet excepturi ea incidunt?
      </p>
      </div>
      
    </section>
  );
};

export default HeroProducts;

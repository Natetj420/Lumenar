import { motion } from "framer-motion";
import { ShoppingCart, Truck, ShieldCheck } from "lucide-react";
import products from "../data/products"; // ✅ Adjust path if your file structure is different
import { Link } from "react-router-dom";



export default function Home() {
  return (   
    <div className="bg-white text-gray-900 ">
   
    {/* Hero Section */}
<section
  className="relative flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6
             text-center overflow-hidden min-h-[80vh] md:min-h-screen"
>
  {/* background image */}
  <img
    src="/img/hero-1600.webp"
    alt="Modern lighting hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* light gradient overlay (only top-half area on phones, taller on md+) */}
  <div className="absolute inset-0
                  bg-gradient-to-b from-white/80 via-white/50 to-transparent
                  backdrop-blur-[2px] md:backdrop-blur-sm" />

  {/* headline, sub, button */}
  <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 max-w-2xl">
    <motion.h1
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="font-bold tracking-tight drop-shadow-sm
                 text-4xl sm:text-5xl lg:text-6xl text-gray-900"
    >
      Illuminate&nbsp;Your&nbsp;Space
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="max-w-md sm:max-w-lg text-base sm:text-lg md:text-xl
                 text-gray-800 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
    >
      Discover premium lighting&nbsp;&amp; décor that transforms your home with modern design.
    </motion.p>

  <Link to="/shop">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="mt-2 sm:mt-4 px-6 sm:px-8 py-3
               rounded-full bg-purple-600 text-white shadow-md
               hover:bg-purple-700 transition focus:outline-none"
  >
    Shop&nbsp;Now
  </motion.button>
</Link>
  </div>
</section>

      {/* Value Props */}
      <section className="py-16 px-6 bg-white  grid md:grid-cols-3 gap-10 text-center">
        <div>
          <Truck className="mx-auto mb-4 h-10 w-10" />
          <h3 className="text-xl font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-600 ">On all orders over $50</p>
        </div>
        <div>
          <ShieldCheck className="mx-auto mb-4 h-10 w-10" />
          <h3 className="text-xl font-semibold">Secure Checkout</h3>
          <p className="text-sm text-gray-600 ">256-bit encryption</p>
        </div>
        <div>
          <ShoppingCart className="mx-auto mb-4 h-10 w-10" />
          <h3 className="text-xl font-semibold">Easy Returns</h3>
          <p className="text-sm text-gray-600 ">30-day return policy</p>
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="py-20 px-6 bg-gray-100 ">
  <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {products.slice(0, 3).map((product) => (
      <motion.div
        key={product.id}
        whileHover={{ scale: 1.03 }}
        className="bg-white p-6 rounded-lg shadow-md transition"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover rounded mb-4"
        />
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 ">{product.price}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Testimonials Section */}
<section className="py-20 px-6 bg-white ">
  <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
  <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="min-w-[300px] max-w-sm flex-shrink-0 bg-gray-100  rounded-xl p-6 shadow-md"
      >
        <p className="text-sm italic mb-4">
          "This is hands-down the best purchase I've made for my home. The quality is unbeatable!"
        </p>
        <div className="font-semibold">Alex R.</div>
        <div className="text-xs text-gray-500">Vancouver, BC</div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Newsletter */}
      <section className="py-16 px-6 bg-white  text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-sm text-gray-600  mb-6">
          Be the first to know about new products and special offers.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border "
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm bg-gray-100  ">
        &copy; {new Date().getFullYear()} Lumina. All rights reserved.
      </footer>
    </div>
  );
}

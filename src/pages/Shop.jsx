// src/pages/Shop.jsx
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import products from "../data/products";

const categories = ["All", "Table", "Wall", "Floor", "Smart", "Vintage"];

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [animateCart, setAnimateCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toastMessage, setToastMessage] = useState("");

  const filteredProducts = products
    .filter(product => {
      const matchName = product.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "All" || product.name.toLowerCase().includes(activeCategory.toLowerCase());
      return matchName && matchCategory;
    })
    .sort((a, b) => {
      if (sortOption === "priceLow") {
        return parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""));
      }
      if (sortOption === "priceHigh") {
        return parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, ""));
      }
      if (sortOption === "nameAZ") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAnimateCart(true);
    setToastMessage(`${product.name} added to cart!`);
    setTimeout(() => {
      setAnimateCart(false);
      setToastMessage("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100  text-gray-900  px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Shop All Products</h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-3 rounded border "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-4 py-3 rounded border "
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="nameAZ">Name: A-Z</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition text-sm ${
                activeCategory === cat
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white  text-gray-700 dark:text-white border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white  rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">{product.price}</p>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex gap-2">
                  <motion.button
                    onClick={() => handleAddToCart(product)}
                    animate={animateCart ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                  >
                    Add to Cart
                  </motion.button>
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition text-center"
                  >
                    View
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded shadow-lg z-50"
        >
          {toastMessage}
        </motion.div>
      )}
    </div>
  );
}
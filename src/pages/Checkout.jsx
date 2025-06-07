// src/pages/Checkout.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Checkout() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, "")),
    0
  );

  const handleStripeCheckout = () => {
    // Placeholder: In real usage, integrate Stripe here
    alert("Redirecting to Stripe checkout with total: $" + total.toFixed(2));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-10 text-center flex items-center justify-center gap-2"
        >
          <Sparkles className="text-purple-500 w-8 h-8" /> Checkout
        </motion.h1>

        {cart.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-lg text-gray-600 dark:text-gray-400"
          >
            Your cart is empty.
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.price}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6 border border-purple-100 dark:border-purple-900"
            >
              <div className="text-right text-3xl font-bold">
                Total: ${total.toFixed(2)}
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStripeCheckout}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition"
              >
                Pay with Stripe
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

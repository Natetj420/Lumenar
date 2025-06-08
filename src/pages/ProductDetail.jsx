// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="min-h-screen bg-white  text-gray-900  px-6 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <img src={product.image} alt={product.name} className="rounded-lg w-full h-auto" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-purple-600  text-xl mb-4">{product.price}</p>
          <p className="mb-6 text-gray-700 dark:text-gray-300">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
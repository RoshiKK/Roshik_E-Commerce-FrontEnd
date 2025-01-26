export default function ProductCard({ product }) {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.name} className="rounded-lg mb-4" />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-700">{product.price}</p>
        <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">Add to Cart</button>
      </div>
    );
  }
  
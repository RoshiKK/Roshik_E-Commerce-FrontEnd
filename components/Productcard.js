import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-lg mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">Add to Cart</button>
    </div>
  );
}

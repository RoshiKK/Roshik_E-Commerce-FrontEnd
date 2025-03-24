// pages/product/[id].js
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { client } from "../../lib/sanityClient";

export default function ProductPage({ product }) {
  const dispatch = useDispatch();

  if (!product) {
    return <div className="text-center mt-16">Product not found.</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src={product.img}
                alt={product.name}
                layout="responsive"
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Rp {product.price.toLocaleString()}
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              {product.description}
            </p>
            {/* Options for size and color (static or dynamic) */}
            <div className="flex flex-wrap items-center space-x-4 mb-8">
              <input
                type="number"
                className="w-16 px-2 py-1 border rounded-md"
                min="1"
                defaultValue="1"
              />
              <button
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
            <div className="text-sm text-gray-500">
              <p>SKU: #{product._id}</p>
              <p>Category: {product.category}</p>
            </div>
          </div>
        </div>
        {/* Related Products Section (if desired) */}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "product"]{ _id }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    description,
    "img": image.asset->url,
    category
  }`;

  const product = await client.fetch(query, { id: params.id });

  return {
    props: { product },
    revalidate: 60,
  };
}

import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useCart } from '../../components/cartContext';

const products = [
  { id: '1', name: 'Syltherine', price: 'Rp 2.500.000', description: 'A premium product with amazing features.', img: '/images/p1.jpeg' },
  { id: '2', name: 'Leviosa', price: 'Rp 2.500.000', description: 'Luxury item with cutting-edge design.', img: '/images/p2.png' },
  { id: '3', name: 'Lolito', price: 'Rp 7.000.000', description: 'Top-tier product with unmatched performance.', img: '/images/p3.png' },
  { id: '4', name: 'Respira', price: 'Rp 500.000', description: 'Affordable, yet high quality.', img: '/images/p4.png' },
  { id: '5', name: 'Aerith', price: 'Rp 3.200.000', img: '/images/p5.png' },
  { id: '6', name: 'Xenon', price: 'Rp 6.000.000', img: '/images/p1.jpeg' },
  { id: '7', name: 'Optimus', price: 'Rp 4.500.000', img: '/images/p3.png' },
  { id: '8', name: 'Vortex', price: 'Rp 1.200.000', img: '/images/p2.png' },
  { id: '9', name: 'Xenon', price: 'Rp 6.000.000', img: '/images/p4.png' },
  { id: '10', name: 'Optimus', price: 'Rp 4.500.000', img: '/images/p2.png' },
  { id: '11', name: 'Vortex', price: 'Rp 1.200.000', img: '/images/p5.png' },
  { id: '12', name: 'Aerith', price: 'Rp 3.200.000', img: '/images/p5.png' },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const { cartItems, addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center mt-16">Product not found.</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
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
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">{product.price}</p>
            <p className="text-base md:text-lg text-gray-700 mb-6">{product.description}</p>

            <div className="flex flex-wrap items-center space-x-4 mb-6">
              <span className="font-medium text-gray-700">Size:</span>
              <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-200">S</button>
              <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-200">M</button>
              <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-200">L</button>
            </div>

            <div className="flex flex-wrap items-center space-x-4 mb-6">
              <span className="font-medium text-gray-700">Color:</span>
              <button className="w-6 h-6 rounded-full border-2 border-gray-400 bg-yellow-500"></button>
              <button className="w-6 h-6 rounded-full border-2 border-gray-400 bg-blue-500"></button>
              <button className="w-6 h-6 rounded-full border-2 border-gray-400 bg-gray-800"></button>
            </div>

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
              <p>SKU: #5200</p>
              <p>Category: Sofa</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />
        
        <div className="mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-xl ml-[26rem] md:text-2xl font-semibold text-gray-800 mb-4 md:mb-0 ">Description</h2>
            <h2 className="text-xl mr-[26rem] md:text-2xl text-gray-400">Additional Information</h2>
          </div>
          <p className="text-sm md:text-base text-[#9F9F9F] mb-4">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p className="text-sm md:text-base text-[#9F9F9F] mb-4">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>

        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-md object-cover w-full h-[200px]"
                />
                <h3 className="font-medium text-base md:text-lg mt-2">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-[#FFFFFF] text-[#B88E2F] rounded-lg border border-[#B88E2F]">
            Show More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

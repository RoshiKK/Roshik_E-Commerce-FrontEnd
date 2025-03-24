import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ShopSection({ products = [] }) {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-8 bg-[#FFF3E3] h-80 w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Shop</h1>
          <p className="text-gray-500 mt-2">
            <span className="font-bold">Home</span>/ Shop
          </p>
          <div className="flex flex-wrap justify-between items-center mt-28 w-full gap-4">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md">
                <span className="material-icons">filter_alt</span> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md">
                <span className="material-icons">view_comfy</span> Grid
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span>Show</span>
                <select className="border px-3 py-2 rounded-md">
                  <option value="16">16</option>
                  <option value="32">32</option>
                  <option value="48">48</option>
                </select>
              </div>
              <div className="flex items-center gap-2 mx-11">
                <span>Sort by</span>
                <select className="border px-3 py-2 rounded-md">
                  <option value="default">Default</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
            {products.map((product) => (
              <Link key={product._id} href={`/product/${product._id}`}>
                <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={product.img}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="mt-4 font-bold">{product.name}</h3>
                  <p className="text-gray-500">Rp {product.price?.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-4">No products available.</p>
        )}

        {/* Pagination & Banner */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-[#B88E2F] text-white rounded">
            1
          </button>
          <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">
            2
          </button>
          <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">
            3
          </button>
          <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded">
            Next
          </button>
        </div>

        <div className="mt-8 bg-black py-12 px-0 w-screen h-56">
          <div className="flex justify-around space-x-6">
            <div className="flex flex-col items-center text-center text-white">
              <Image src="/images/trophy 1.png" alt="High Quality" width={40} height={40} />
              <h3 className="font-semibold text-xl mt-2 text-[#B88E2F]">High Quality</h3>
              <p className="mt-2">Crafted with top materials for long-lasting use.</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <Image src="/images/Group.png" alt="Warranty" width={40} height={40} />
              <h3 className="font-semibold text-xl mt-2 text-[#B88E2F]">Warranty Protection</h3>
              <p className="mt-2">Over 2 years warranty for peace of mind.</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <Image src="/images/Vector.png" alt="Free Shipping" width={40} height={40} />
              <h3 className="font-semibold text-xl text-[#B88E2F] mt-2">Free Shipping</h3>
              <p className="mt-2">Free shipping on orders over $150.</p>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <Image src="/images/customer-support.png" alt="Support" width={40} height={40} />
              <h3 className="font-semibold text-xl mt-2 text-[#B88E2F]">24/7 Support</h3>
              <p className="mt-2">Round-the-clock support whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

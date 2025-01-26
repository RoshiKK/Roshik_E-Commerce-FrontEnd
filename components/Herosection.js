import React from "react";

export default function HeroSection() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center h-screen bg-gray-100 bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/images/bg.jpeg')" }}
      >
        <div className="text-center">
          <div className="inline-block p-6 ml-[27rem] bg-[#FFF3E3] rounded-lg w-full max-w-lg md:w-[35rem] h-auto">
            <p className="font-bold text-lg md:text-xl">New Arrival</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#B88E2F]">
              Discover Our New Collection
            </h1>
            <p className="mb-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="px-6 py-3 bg-[#B88E2F] text-white rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-center px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Browse The Range</h2>
        <p className="mb-10 text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { name: "Dining", img: "/images/b1.png" },
            { name: "Bedroom", img: "/images/b2.png" },
          ].map((category, idx) => (
            <div key={idx} className="hover:scale-105 transition-transform">
              <div
                className="h-48 bg-contain bg-center rounded-lg"
                style={{ backgroundImage: `url('${category.img}')` }}
              ></div>
              <p className="mt-4 font-semibold">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white text-center px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Syltherine", price: "Rp 2.500.000", img: "/images/p1.jpeg" },
            { name: "Leviosa", price: "Rp 2.500.000", img: "/images/p2.png" },
            { name: "Lolito", price: "Rp 7.000.000", img: "/images/p3.png" },
            { name: "Respira", price: "Rp 500.000", img: "/images/p4.png" },
          ].map((product, idx) => (
            <div
              key={idx}
              className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              <div
                className="h-40 md:h-48 bg-contain bg-center rounded-lg"
                style={{ backgroundImage: `url('${product.img}')` }}
              ></div>
              <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50 text-center px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          50+ Beautiful Rooms Inspiration
        </h2>
        <p className="mb-10 text-gray-600 text-sm md:text-base">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { img: "/images/i1.png", title: "Inner Peace" },
            { img: "/images/i2.png", title: "Minimalist Living" },
            { img: "/images/i3.png", title: "Modern Elegance" },
          ].map((room, idx) => (
            <div key={idx} className="hover:scale-105 transition-transform">
              <div
                className="h-48 md:h-60 bg-contain bg-center rounded-lg"
                style={{ backgroundImage: `url('${room.img}')` }}
              ></div>
              <p className="mt-4 font-semibold">{room.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

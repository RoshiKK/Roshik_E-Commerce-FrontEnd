import { useState } from "react";
import Link from "next/link";
import { useCart } from "../components/cartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-4 px-6 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-10 h-10 mr-2 sm:w-12 sm:h-12"
        />
        <span className="text-lg font-bold sm:text-xl">Furniro</span>
      </div>
      <button
        className="block md:hidden text-gray-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src="/images/menu.png" alt="Menu" className="w-6 h-6" />
      </button>
      <ul
        className={`absolute md:static top-16 left-0 w-full bg-white md:flex md:gap-10 md:items-center md:bg-transparent md:py-0 py-4 px-6 shadow-md md:shadow-none ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li className="py-2 md:py-0 ml-96">
          <Link href="/" className="block font-bold hover:text-gray-500">
            Home
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="/shop" className="block font-bold hover:text-gray-500">
            Shop
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="/about" className="block font-bold hover:text-gray-500">
            About
          </Link>
        </li>
      </ul>
      <ul className="hidden md:flex items-center gap-6">
        <li>
          <img
            src="/images/contact.png"
            alt="Contact"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </li>
        <li>
          <img
            src="/images/search.png"
            alt="Search"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </li>
        <li>
          <img
            src="/images/heart.png"
            alt="Wishlist"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </li>
        <li>
          <Link href="/cart">
            <div className="flex items-center gap-2">
              <img
                src="/images/cart.png"
                alt="Cart"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-sm font-medium">{cartItems.length}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

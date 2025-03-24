import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="relative flex items-center justify-between py-4 px-6 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} className="mr-2" />
        <span className="text-lg font-bold sm:text-xl">Furniro</span>
      </div>

      <button className="block md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image src="/images/menu.png" alt="Menu" width={24} height={24} />
      </button>

      <ul
        className={`absolute md:static top-16 left-0 w-full bg-white md:flex md:gap-10 md:items-center md:bg-transparent md:py-0 py-4 px-6 shadow-md md:shadow-none ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li className="py-2 md:py-0 md:ml-96">
          <Link href="/" className="block font-bold hover:text-gray-500">Home</Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="/shop" className="block font-bold hover:text-gray-500">Shop</Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="/about" className="block font-bold hover:text-gray-500">About</Link>
        </li>
      </ul>

      <ul className="hidden md:flex items-center gap-6">
        <li>
          <Image src="/images/contact.png" alt="Contact" width={24} height={24} />
        </li>
        <li>
          <Image src="/images/search.png" alt="Search" width={24} height={24} />
        </li>
        <li>
          <Image src="/images/heart.png" alt="Wishlist" width={24} height={24} />
        </li>
        <li>
          <Link href="/cart">
            <div className="flex items-center gap-2">
              <Image src="/images/cart.png" alt="Cart" width={24} height={24} />
              <span className="text-sm font-medium">{cartItems.length}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

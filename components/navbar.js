import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="relative flex items-center justify-between py-4 px-6 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/images/logo.png" 
          alt="Logo" 
          width={48} 
          height={48} 
          className="mr-2" 
        />
        <span className="text-lg font-bold sm:text-xl">Furniro</span>
      </div>

      {/* Mobile menu button */}
      <button 
        className="block md:hidden text-gray-600" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image 
          src="/images/menu.png" 
          alt="Menu" 
          width={24} 
          height={24} 
        />
      </button>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white z-50 shadow-md transition-all duration-300 ${
        isMenuOpen ? 'block' : 'hidden'
      }`}>
        <ul className="py-4 px-6 space-y-4">
          <li>
            <Link href="/" className="block font-bold hover:text-gray-500">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="block font-bold hover:text-gray-500">Shop</Link>
          </li>
          <li>
            <Link href="/about" className="block font-bold hover:text-gray-500">About</Link>
          </li>
          {isSignedIn ? (
            <>
              <li className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-bold">
                    {user.firstName || user.emailAddresses[0].emailAddress}
                  </span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </li>
              <li>
                <Link href="/orders" className="block font-bold hover:text-gray-500">
                  My Orders
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="pt-4 border-t">
                <Link href="/sign-in" className="block font-bold hover:text-gray-500">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="block font-bold hover:text-gray-500">
                  Sign Up
                </Link>
              </li>
            </>
          )}
          <li className="pt-4 border-t">
            <Link href="/cart" className="flex items-center gap-2 font-bold hover:text-gray-500">
              <Image 
                src="/images/cart.png" 
                alt="Cart" 
                width={20} 
                height={20} 
              />
              <span>Cart ({cartItems.length})</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center gap-6">
        <li>
          <Link href="/" className="font-bold hover:text-gray-500">Home</Link>
        </li>
        <li>
          <Link href="/shop" className="font-bold hover:text-gray-500">Shop</Link>
        </li>
        <li>
          <Link href="/about" className="font-bold hover:text-gray-500">About</Link>
        </li>
        {isSignedIn ? (
          <>
            <li className="text-sm font-medium">
              {user.firstName || user.emailAddresses[0].emailAddress}
            </li>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/sign-in" className="text-sm font-medium hover:text-gray-500">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="text-sm font-medium hover:text-gray-500">
                Sign Up
              </Link>
            </li>
          </>
        )}
        <li>
          <Image 
            src="/images/search.png" 
            alt="Search" 
            width={24} 
            height={24} 
          />
        </li>
        <li>
          <Link href="/cart">
            <div className="flex items-center gap-2">
              <Image 
                src="/images/cart.png" 
                alt="Cart" 
                width={24} 
                height={24} 
              />
              <span className="text-sm font-medium">{cartItems.length}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
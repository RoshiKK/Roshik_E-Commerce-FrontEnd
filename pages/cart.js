import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { useUser } from '@clerk/nextjs';
import { loadStripe } from '@stripe/stripe-js';

export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { isSignedIn } = useUser();

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    if (!isSignedIn) {
      router.push('/sign-in?redirect_url=/cart');
      return;
    }
  
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create checkout session');
      }
  
      const { id: sessionId } = await response.json();
      
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }
  
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId
      });
  
      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert(`Checkout failed: ${err.message}`);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="p-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-gray-500">Home &gt; Cart</p>
        </div>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
              <table className="w-full border-collapse border-spacing-0">
                <thead>
                  <tr className="bg-[#F9F1E7] text-left">
                    <th className="p-4 border-b font-semibold">Product</th>
                    <th className="p-4 border-b font-semibold hidden md:table-cell">
                      Price
                    </th>
                    <th className="p-4 border-b font-semibold">Quantity</th>
                    <th className="p-4 border-b font-semibold hidden md:table-cell">
                      Subtotal
                    </th>
                    <th className="p-4 border-b font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td className="p-4 flex items-center gap-4">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="object-cover rounded"
                        />
                        <span>{item.name}</span>
                      </td>
                      <td className="p-4 hidden md:table-cell">Rs. {item.price.toLocaleString()}</td>
                      <td className="p-4">
                        <input
                          type="number"
                          value={item.quantity}
                          className="w-12 text-center border rounded"
                          readOnly
                        />
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </td>
                      <td
                        className="p-4 text-red-500 cursor-pointer"
                        onClick={() => dispatch(removeFromCart(item._id))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-[#F9F1E7] rounded-lg">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-bold">Rs. {getTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-700">Total</span>
                <span className="font-bold text-xl text-yellow-600">
                  Rs. {getTotal().toLocaleString()}
                </span>
              </div>
              <button
              className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
              onClick={handleCheckout}
              >
              Check Out
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
        )}
      </section>

      <Footer />
    </div>
  );
}

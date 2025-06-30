import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { client } from '../lib/sanityClient';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function OrderSuccess() {
  const router = useRouter();
  const { session_id } = router.query;
  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (!session_id || !isLoaded || !user) return;
  
    const verifyAndSaveOrder = async () => {
      try {
        // First verify with Stripe
        const stripeResponse = await fetch('/api/verify-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId: session_id }),
        });
  
        if (!stripeResponse.ok) {
          throw new Error('Payment verification failed');
        }
  
        // Then save to Sanity
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        
        const deliveryDate = new Date();
        let daysToAdd = 7;
        while (daysToAdd > 0) {
          deliveryDate.setDate(deliveryDate.getDate() + 1);
          if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) {
            daysToAdd--;
          }
        }
  
        await client.create({
          _type: 'order',
          userId: user.id,
          stripeSessionId: session_id,
          products: cartItems.map(item => ({
            _key: uuidv4(),
            productId: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          total: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
          deliveryDate: deliveryDate.toISOString().split('T')[0],
          status: 'processing',
        });
  
        localStorage.removeItem('cart');
      } catch (err) {
        console.error('Order processing error:', err);
        // Consider showing an error to the user
      }
    };
  
    verifyAndSaveOrder();
  }, [session_id, isLoaded, user]);

  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-lg mb-6">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Order ID: {session_id}
          </div>
          <p className="mb-6">
            We've sent a confirmation email with your order details.
          </p>
          <button
            onClick={() => router.push('/orders')}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View Your Orders
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
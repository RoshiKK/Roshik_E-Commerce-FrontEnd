import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { client } from '../lib/sanityClient';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

export default function OrdersPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      router.push('/sign-in?redirect_url=/orders');
      return;
    }

    const fetchOrders = async () => {
      try {
        const query = `*[_type == "order" && userId == $userId] | order(_createdAt desc) {
          _id,
          products,
          totalPrice,
          deliveryDate,
          status
        }`;
        
        const orders = await client.fetch(query, { userId: user.id });
        setOrders(orders);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };

    fetchOrders();
  }, [isLoaded, isSignedIn, user, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
        
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg mb-4">You haven't placed any orders yet.</p>
            <button
              onClick={() => router.push('/shop')}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold">Order #{order._id.slice(0, 8)}</h2>
                    <p className="text-gray-500">
                      Placed on {new Date(order._createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${order.totalPrice.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">
                      Delivery: {new Date(order.deliveryDate).toLocaleDateString()}
                    </p>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-bold mb-3">Products</h3>
                  <div className="space-y-4">
                    {order.products.map((product, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md"></div>
                        <div className="flex-1">
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">
                            ${product.price.toLocaleString()} × {product.quantity}
                          </p>
                        </div>
                        <p className="font-medium">
                          ${(product.price * product.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
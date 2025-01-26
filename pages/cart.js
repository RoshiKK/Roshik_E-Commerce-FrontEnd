import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Cart() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <section className="p-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-gray-500">Home &gt; Cart</p>
        </div>
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
                <tr className="border-b">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src="/images/p1.jpeg"
                      alt="Asgaard sofa"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>Asgaard sofa</span>
                  </td>
                  <td className="p-4 hidden md:table-cell">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-12 text-center border rounded"
                    />
                  </td>
                  <td className="p-4 hidden md:table-cell">Rs. 250,000.00</td>
                  <td className="p-4 text-red-500 cursor-pointer">
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
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-[#F9F1E7] rounded-lg">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-bold">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Total</span>
              <span className="font-bold text-xl text-yellow-600">
                Rs. 250,000.00
              </span>
            </div>
            <button
              className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
              onClick={() => router.push("/checkout")}
            >
              Check Out
            </button>
          </div>
        </div>
      </section>
      <div className="mt-8 bg-black py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center text-white">
            <Image
              src="/images/trophy 1.png"
              alt="High Quality"
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-xl mt-2 text-[#B88E2F]">
              High Quality
            </h3>
            <p className="mt-2">Crafted with top materials for long-lasting use.</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <Image
              src="/images/Group.png"
              alt="Warranty"
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-xl mt-2 text-[#B88E2F]">
              Warranty Protection
            </h3>
            <p className="mt-2">Over 2 years warranty for peace of mind.</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <Image
              src="/images/Vector.png"
              alt="Free Shipping"
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-xl mt-2 text-[#B88E2F]">
              Free Shipping
            </h3>
            <p className="mt-2">Free shipping on orders over $150.</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <Image
              src="/images/customer-support.png"
              alt="Support"
              width={40}
              height={40}
            />
            <h3 className="font-semibold text-xl mt-2 text-[#B88E2F]">
              24/7 Support
            </h3>
            <p className="mt-2">Round-the-clock support whenever you need it.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <section className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-500">Home &gt; Checkout</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-4">Billing details</h2>
            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-lg p-2"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="border rounded-lg p-2"
              />
              <select className="border rounded-lg p-2">
                <option>Country / Region</option>
                <option>Sri Lanka</option>
                <option>India</option>
              </select>
              <input
                type="text"
                placeholder="Street Address"
                className="border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border rounded-lg p-2"
              />
              <select className="border rounded-lg p-2">
                <option>Province</option>
                <option>Western Province</option>
              </select>
              <input
                type="text"
                placeholder="ZIP Code"
                className="border rounded-lg p-2"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border rounded-lg p-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg p-2"
              />
              <textarea
                placeholder="Additional Information"
                className="border rounded-lg p-2"
              ></textarea>
            </form>
          </div>
          <div className="p-6 bg-beige rounded-lg">
            <h2 className="text-xl font-bold mb-4">Product</h2>
            <ul className="mb-4">
              <li className="flex justify-between mb-2">
                <span>Asgaard sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </li>
            </ul>
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
            <hr className="my-6 border-gray-400" />
            <div>
              <div className="relative mb-4">
                <div className="absolute top-2 left-[-1.5rem] w-3 h-3 bg-black rounded-full"></div>
                <h1 className="font-bold">Direct Bank Transfer</h1>
              </div>
              <p className="text-[#9F9F9F] mb-5">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <div className="relative mb-4">
                <div className="absolute top-2 left-[-1.5rem] w-3 h-3 border-[1px] border-[#9F9F9F] rounded-full"></div>
                <p className="text-[#9F9F9F]">Direct Bank Transfer</p>
              </div>
              <div className="relative mb-5">
                <div className="absolute top-2 left-[-1.5rem] w-3 h-3 bg-white border-[1px] border-[#9F9F9F] rounded-full"></div>
                <p className="text-[#9F9F9F]">Cash On Delivery</p>
              </div>
              <p className="text-[#9F9F9F] text-sm mb-8">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                <span className="font-bold text-black">privacy policy.</span>
              </p>
              <button className="w-52 ml-14 bg-white text-black border-2 border-black py-2 rounded-lg font-semibold">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8 bg-black py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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

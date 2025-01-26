export default function Footer() {
  return (
    <footer className="bg-white text-black px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start py-8">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-6">Funiro.</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-8 md:space-y-0">
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 font-semibold mb-4">Help</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Payment Options</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Privacy Policies</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-gray-500 font-semibold mb-4">Newsletter</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border rounded-md px-3 py-2 w-full md:max-w-xs"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md mt-4 md:mt-0 md:ml-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-400" />
      <p className="text-center text-gray-500 font-semibold text-sm">
        2023 Funiro. All rights reserved
      </p>
    </footer>
  );
}

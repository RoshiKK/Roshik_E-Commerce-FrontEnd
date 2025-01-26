import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>We are a leading furniture brand offering modern and elegant furniture collections.</p>
      </section>
      <Footer />
    </div>
  );
}

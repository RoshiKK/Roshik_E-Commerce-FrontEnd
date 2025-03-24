import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ShopSection from "../components/Shop";
import { client } from "../lib/sanityClient";

export default function ShopPage({ products }) {
  return (
    <div>
      <Navbar />
      <ShopSection products={products} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // GROQ query for your "product" documents
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    description,
    "img": image.asset->url,
    category
  }`;

  // Fetch data from Sanity
  const products = await client.fetch(query);
  console.log("Fetched products:", products); // optional debug log

  return {
    props: { products },
    revalidate: 60, // re-generate page at most once every 60 seconds
  };
}

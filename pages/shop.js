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
  try {
    const query = `*[_type == "product"]{
      _id,
      name,
      price,
      description,
      "img": image.asset->url,
      category
    }`;

    const products = await client.fetch(query);
    
    return {
      props: { products },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: { products: [] }, 
      revalidate: 60,
    };
  }
}

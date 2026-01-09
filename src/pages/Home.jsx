import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import TopProducts from "../components/TopProducts/TopProducts";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <TopProducts />
      <Services />
    </>
  );
}

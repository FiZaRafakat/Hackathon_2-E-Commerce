import Categories from "@/components/Categories";
import Companies from "@/components/Companies";
import ExplorePage from "@/components/ExplorePage";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import OurProduct from "@/components/OurProduct";


export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <FeaturedProduct />
      <Categories />
      <ExplorePage/>
      <OurProduct />
    </main>
  );
}

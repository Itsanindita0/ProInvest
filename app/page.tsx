import Hero from "@/components/Hero";
import Galary from '@/components/Galary'
import Investment from '@/components/Investment'
import About from "@/components/About";
import Opportunity from "@/components/Opportunity";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero/>
      <Galary/>
      <Investment/>
      <About/>
      <Opportunity/>
      <Testimonials/>
      <FAQ/>
      <Footer/>



    </main>
  );
}

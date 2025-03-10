import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/modules/home/components/Navbar";
import Footer from "@/modules/home/components/Footer";
import Hero from "@/modules/home/components/Hero";
import Benefits from "@/modules/home/components/Benefits";
import Testimonials from "@/modules/home/components/Testimonials";
import ContactWsp from "@/modules/home/components/ContactWsp";
import Discounts from "@/modules/home/components/Discounts";
import Header from "@/modules/home/components/Header";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Testimonials />
        <Discounts />
      </main>
      <ContactWsp />
      <Footer />
    </div>
  );
};

export default HomePage;

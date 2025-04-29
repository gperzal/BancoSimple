import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "@/modules/home/components/Hero";
import Benefits from "@/modules/home/components/Benefits";
import Testimonials from "@/modules/home/components/Testimonials";
import Discounts from "@/modules/home/components/Discounts";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Testimonials />
        <Discounts />
      </main>
    </div>
  );
};

export default HomePage;

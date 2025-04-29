import { useEffect } from "react";
import BenefitsHero from "../components/BenefitsHero";
import BenefitsCategories from "../components/BenefitsCategories";
import BenefitsHighlights from "../components/BenefitsHighlights";
import BenefitsPartners from "../components/BenefitsPartners";
import BenefitsTestimonials from "../components/BenefitsTestimonials";
// import BenefitsFAQ from "../components/BenefitsFAQ";
import BenefitsCTA from "../components/BenefitsCTA";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BenefitsPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="animate-fade-in"
    >
      <BenefitsHero />
      <BenefitsCategories />
      <BenefitsHighlights />
      <BenefitsPartners />
      <BenefitsTestimonials />
      {/*  <BenefitsFAQ /> */}
      <BenefitsCTA />
    </motion.div>
  );
}

"use client";

import { useEffect } from "react";
import InvestmentHero from "../components/InvestmentHero";
import InvestmentOptions from "../components/InvestmentOptions";
import InvestmentPerformance from "../components/InvestmentPerformance";
import InvestmentProcess from "../components/InvestmentProcess";
import InvestmentTestimonials from "../components/InvestmentTestimonials";
import InvestmentFAQ from "../components/InvestmentFAQ";
import InvestmentCTA from "../components/InvestmentCTA";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InvestmentsPage() {
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
        <InvestmentHero />
        <InvestmentOptions />
        <InvestmentPerformance />
        <InvestmentProcess />
        <InvestmentTestimonials />
        <InvestmentFAQ />
        <InvestmentCTA />
      </motion.div>
  
  );
}

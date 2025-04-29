"use client"

import { useEffect } from "react"
import InsuranceHero from "../components/InsuranceHero"
import InsuranceOptions from "../components/InsuranceOptions"
import InsuranceBenefits from "../components/InsuranceBenefits"
import InsuranceProcess from "../components/InsuranceProcess"
import InsuranceTestimonials from "../components/InsuranceTestimonials"
import InsuranceFAQ from "../components/InsuranceFAQ"
import InsuranceCTA from "../components/InsuranceCTA"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function InsurancePage() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
        <InsuranceHero />
        <InsuranceOptions />
        <InsuranceBenefits />
        <InsuranceProcess />
        <InsuranceTestimonials />
        <InsuranceFAQ />
        <InsuranceCTA />
      </motion.div>
  )
}

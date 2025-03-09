import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@shadcn/button";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const images = [
    "/img/hero1.jpg",
    "/img/hero2.jpg",
    "/img/hero3.jpg",
    "/img/hero4.jpg",
    "/img/hero5.jpg",
  ];

  const [heroImage, setHeroImage] = useState(images[0]);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#ef7b83] to-[#d8344e] py-20 text-white overflow-hidden">
      <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
        {/* 📝 Texto y CTA */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tu banco digital <br />
            <span className="text-yellow-300">rápido y seguro</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Envía dinero, consulta tu saldo y gestiona tus finanzas con total
            seguridad.
          </motion.p>

          <motion.h3
            className="text-4xl font-extrabold text-yellow-300 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Abre tu cuenta en menos de 2 minutos
          </motion.h3>

          <motion.p
            className="text-lg text-white/90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Únete a miles de personas que confían en{" "}
            <span className="font-semibold text-yellow-300">BancoSimple</span>.
          </motion.p>

          {/* 🎯 BOTÓN CTA MÁS GRANDE Y MEJORADO */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              className={`border-2 font-bold text-lg py-5 px-12 flex items-center gap-2 rounded-lg shadow-md transition-all hover:scale-105 ${
                theme === "dark"
                  ? "border-white text-white bg-primary hover:bg-primary/90"
                  : "border-black text-white bg-primary hover:bg-primary/90"
              }`}
              asChild
            >
              <Link to="/register">
                Hazte Cliente <ChevronRight size={22} />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* 🖼 Imagen Dinámica con Fade In */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.img
            key={heroImage}
            src={heroImage}
            alt="Persona usando BancoSimple"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-2xl border-4 border-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* 🌟 Efectos visuales flotantes */}
          <motion.div
            className="absolute top-10 right-0 w-16 h-16 bg-yellow-300 rounded-full opacity-50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 left-0 w-24 h-24 bg-white/20 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

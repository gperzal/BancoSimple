"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, User } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function InvestmentTestimonials() {
  const { theme } = useTheme();

  const testimonials = [
    {
      name: "Roberto Méndez",
      role: "Inversionista desde 2020",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Comencé con el Fondo Conservador y gradualmente he diversificado mi portafolio. La plataforma es intuitiva y el equipo de asesoría siempre está disponible para resolver mis dudas.",
      rating: 5,
    },
    {
      name: "Carolina Vega",
      role: "Empresaria",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      text: "Los depósitos a plazo me han permitido optimizar el rendimiento de la tesorería de mi empresa. Las tasas son competitivas y el proceso es completamente digital.",
      rating: 5,
    },
    {
      name: "Javier Soto",
      role: "Profesional independiente",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "La diversificación que me ofrece el Fondo Balanceado es exactamente lo que buscaba. He logrado un buen equilibrio entre rendimiento y riesgo para mis ahorros a mediano plazo.",
      rating: 4,
    },
    {
      name: "Daniela Fuentes",
      role: "Inversionista experimentada",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "La plataforma de acciones es completa y con comisiones muy competitivas. He podido construir un portafolio internacional sin complicaciones y con excelente soporte.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Experiencias de nuestros inversionistas
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubre cómo nuestras soluciones de inversión han ayudado a miles
            de personas a alcanzar sus metas financieras.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-8 rounded-2xl h-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow-lg border border-gray-200 dark:border-gray-700`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-lg mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-green-500/10">
                        <User className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

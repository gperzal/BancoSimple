"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, User } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function InsuranceTestimonials() {
  const { theme } = useTheme();

  const testimonials = [
    {
      name: "Marcela Rojas",
      role: "Cliente Seguro de Vida",
      image: "https://randomuser.me/api/portraits/woman/44.jpg",
      text: "Contratar el seguro de vida fue una de las mejores decisiones que he tomado. El proceso fue rápido y la tranquilidad que me da saber que mi familia está protegida no tiene precio.",
      rating: 5,
    },
    {
      name: "Felipe Gutiérrez",
      role: "Cliente Seguro de Auto",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Tuve un accidente hace unos meses y la respuesta fue impecable. La asistencia llegó en minutos y todo el proceso de reparación fue sin complicaciones. Recomiendo 100% este seguro.",
      rating: 5,
    },
    {
      name: "Camila Vega",
      role: "Cliente Seguro de Hogar",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      text: "Después de un robo en mi casa, el equipo de seguros me ayudó con todo el proceso de reclamación. Fueron muy profesionales y la indemnización fue justa y rápida.",
      rating: 4,
    },
    {
      name: "Roberto Álvarez",
      role: "Cliente Seguro Empresarial",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Como dueño de una pequeña empresa, necesitaba una solución integral. Este seguro me ofrece exactamente lo que necesito a un precio competitivo. El servicio al cliente es excepcional.",
      rating: 5,
    },
  ];

  return (
    <section
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground">
            Miles de personas ya disfrutan de la tranquilidad que ofrecen
            nuestros seguros. Conoce sus experiencias.
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
                      <div className="w-full h-full flex items-center justify-center bg-blue-500/10">
                        <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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

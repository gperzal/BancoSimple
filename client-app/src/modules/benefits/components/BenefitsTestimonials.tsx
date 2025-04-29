"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Star, User } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

export default function BenefitsTestimonials() {
  const { theme } = useTheme()

  const testimonials = [
    {
      name: "Valentina Soto",
      role: "Cliente desde 2022",
      image: "/placeholder.svg?height=100&width=100",
      text: "Los descuentos en restaurantes son increíbles. He ahorrado mucho dinero y descubierto lugares nuevos gracias al programa de beneficios.",
      rating: 5,
    },
    {
      name: "Matías Fernández",
      role: "Cliente desde 2021",
      image: "/placeholder.svg?height=100&width=100",
      text: "El 2x1 en cines todos los días ha sido mi beneficio favorito. Voy al cine cada semana y el ahorro es significativo a lo largo del año.",
      rating: 5,
    },
    {
      name: "Catalina Muñoz",
      role: "Cliente desde 2023",
      image: "/placeholder.svg?height=100&width=100",
      text: "Los descuentos en viajes me permitieron planificar unas vacaciones que de otro modo no habría podido costear. La experiencia fue excelente.",
      rating: 4,
    },
    {
      name: "Diego Ramírez",
      role: "Cliente desde 2020",
      image: "/placeholder.svg?height=100&width=100",
      text: "El cashback en compras de supermercado es genial. Recibo devoluciones todos los meses y se acumulan en mi cuenta automáticamente.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-muted-foreground">
            Descubre cómo nuestros clientes aprovechan al máximo el programa de beneficios.
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
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
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
                      <div className="w-full h-full flex items-center justify-center bg-purple-500/10">
                        <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

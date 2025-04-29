"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Star, CheckCircle, MapPin } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"

const testimonials = [
  {
    name: "Carlos Mendoza",
    location: "Santiago, Chile",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Cambiarme a BancoSimple fue la mejor decisión financiera que he tomado. Sin comisiones y con una app increíblemente fácil de usar.",
    verified: true,
    rating: 5,
  },
  {
    name: "María Fernández",
    location: "Viña del Mar, Chile",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Después de años pagando comisiones absurdas, encontré BancoSimple. Las transferencias son instantáneas y el servicio al cliente es excelente.",
    verified: true,
    rating: 5,
  },
  {
    name: "Javier Rojas",
    location: "Concepción, Chile",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "La cuenta es realmente sin comisiones, no hay letras pequeñas ni sorpresas. Además, la tarjeta internacional funciona perfectamente en el extranjero.",
    verified: true,
    rating: 4,
  },
  {
    name: "Valentina Torres",
    location: "Antofagasta, Chile",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    text: "Abrí mi cuenta en menos de 5 minutos y desde entonces todo ha sido perfecto. La recomiendo a todos mis amigos.",
    verified: false,
    rating: 5,
  },
]

const AccountTestimonials = () => {
  const { theme } = useTheme()

  return (
    <section className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Lo que dicen nuestros clientes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Miles de personas ya disfrutan de los beneficios de BancoSimple
          </motion.p>
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
          className="pb-14"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-xl h-full ${
                  theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100 shadow-md"
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-500"
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      {testimonial.verified && <CheckCircle size={16} className="text-green-500 ml-2" />}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground">"{testimonial.text}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default AccountTestimonials

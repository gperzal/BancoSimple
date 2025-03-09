import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, CheckCircle, MapPin } from "lucide-react";

// Define la forma de cada testimonio
interface Testimonial {
  name: string;
  location: string;
  image: string;
  text: string;
  verified: boolean;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&nat=us,gb,ca,au")
      .then((response) => response.json())
      .then((data) => {
        const formattedTestimonials = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          location: `${user.location.city}, ${user.location.country}`,
          image: user.picture.large,
          text: getRandomTestimonial(), // Generamos texto aleatorio
          verified: Math.random() > 0.5, // 50% de probabilidad de ser "cliente verificado"
        }));
        setTestimonials(formattedTestimonials);
      })
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="bg-muted py-20 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Lo que dicen nuestros usuarios
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-[95%] max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mb-8">
              <div className="card p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all w-[100%] max-w-lg mx-auto">
                {/* Imagen del Usuario */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-primary"
                />
                {/* Contenido del Testimonio */}
                <div className="flex flex-col items-center text-center mt-4">
                  <div className="mb-2 flex items-center">
                    {[...Array(5)].map((_, star) => (
                      <Star
                        key={star}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {/* Sello de Cliente Verificado */}
                    {testimonial.verified && (
                      <CheckCircle size={18} className="text-blue-500 ml-2" />
                    )}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                  <h4 className="font-medium text-primary mt-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin size={16} className="text-primary" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Función para generar testimonios aleatorios
const getRandomTestimonial = () => {
  const testimonials = [
    "Un banco moderno y eficiente, justo lo que necesitaba.",
    "Las transferencias son rápidas y seguras. Muy recomendado.",
    "Me encanta la app, es intuitiva y fácil de usar.",
    "Nunca tuve problemas con el servicio, siempre confiable.",
    "Un sistema bancario digital que realmente cumple lo que promete.",
    "La mejor experiencia con un banco en línea que he tenido.",
    "Increíble servicio de atención al cliente y seguridad impecable.",
    "¡Amo la facilidad para gestionar mis finanzas con BancoSimple!",
    "Sin comisiones ocultas, sin problemas, solo un gran servicio.",
    "Nunca fue tan fácil administrar mi dinero en un solo lugar.",
  ];
  return testimonials[Math.floor(Math.random() * testimonials.length)];
};

export default Testimonials;

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@shadcn/button";

// Importamos tu Contexto de Tema
import { useTheme } from "@/context/ThemeContext";

const discounts = [
  {
    name: "McDonald's",
    description: "Descuento en McCombo Cuarto de Libra",
    details: "En mesón y automac",
    day: "Lunes",
    discount: "40%",
    img: "https://www.bancofalabella.cl/_next/image?url=https%3A%2F%2F%2F%2Fimages.ctfassets.net%2Fp6eyia4djstu%2F3VYhkWB140BYzdqDHXrimB%2F955b66af0453d089fb7ee950c2eec208%2Fmccombo.jpg&w=1920&q=75",
    icon: "/img/McDonalds.svg",
    isNew: true,
    isOnline: false,
    isPresential: true,
  },
  {
    name: "Dunkin' Donuts",
    description: "Descuentos en el total de la compra",
    details: "Presencial y online",
    day: "Martes",
    discount: "40%",
    img: "https://www.bancofalabella.cl/_next/image?url=https%3A%2F%2F%2F%2Fimages.ctfassets.net%2Fp6eyia4djstu%2F7vZZJKZQbdVLC0DD7uEIry%2F83379555acadc6c6e7f8da71917b57d5%2Fdunkin-card.jpg&w=1920&q=75",
    icon: "/img/Dunkin.svg",
    isNew: false,
    isOnline: true,
    isPresential: true,
  },
  {
    name: "EcoMarket",
    description: "Paga menos en EcoMarket con tu tarjeta BancoSimple.",
    details: "Exclusivo online",
    day: "Lunes",
    discount: "40%",
    img: "https://media.istockphoto.com/id/1073935306/es/foto/chicas-llevando-bolsas-de-compras.jpg?s=612x612&w=0&k=20&c=4EKJSnXcPGZUXQn139jZaR3DLztBEYx6ZOmctqYoCnk=",
    icon: "/img/EcoMarket.svg",
    isNew: true,
    isOnline: false,
    isPresential: true,
  },
  {
    name: "Cinemark",
    description: "Combo Banco Simple",
    details: "Presencial y online",
    day: "Lun a Mié",
    discount: "30%",
    img: "https://www.bancofalabella.cl/_next/image?url=https%3A%2F%2F%2F%2Fimages.ctfassets.net%2Fp6eyia4djstu%2F4ynbAgdKD3t9P1PgWwwJEI%2F5f4ab0ad60868a1666a1641f557c865c%2Fcinemark-card.jpg&w=1920&q=75",
    icon: "/img/Cinemark.svg",
    isNew: false,
    isOnline: true,
    isPresential: true,
  },
  {
    name: "Copec",
    description: "Descuento en estaciones de servicio",
    details: "En todas las estaciones",
    day: "Viernes",
    discount: "40%",
    img: "https://copec.cdn.modyo.com/uploads/1e4d687e-c5be-4f9a-915a-a9014c14a967/original/cover-noticias-compress_newlogo.jpg",
    icon: "/img/Copec.svg",
    isNew: true,
    isOnline: false,
    isPresential: true,
  },
];

const Discounts = () => {
  const { theme } = useTheme(); // Obtenemos el tema actual

  return (
    // Aplicamos clases condicionales para Dark/Light
    <section
      className={`
        text-center py-20 border-t
        ${
          theme === "dark"
            ? "bg-background-dark border-border-dark text-foreground-dark"
            : "bg-slate-100 border-gray-200 text-gray-900"
        }
      `}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          ¡Aprovecha descuentos exclusivos!
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-muted-foreground" : "text-gray-600"
          } mb-10`}
        >
          Con tu tarjeta BancoSimple, obtén beneficios únicos en tus marcas
          favoritas.
        </p>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            className="w-full px-1 pb-12"
          >
            {discounts.map((discount, index) => (
              <SwiperSlide key={index} className="flex justify-center mb-10">
                <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-[420px] w-full max-w-[320px]">
                  {/* Imagen de fondo */}
                  <img
                    src={discount.img}
                    alt={discount.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Logo circular con fondo blanco */}
                  <div className="absolute left-4 top-4 bg-white p-2 rounded-full shadow-md z-20">
                    <img
                      src={discount.icon}
                      alt={`${discount.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Capa inferior con detalles */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-[180px]
                    bg-gradient-to-t from-black/90 via-black/70 to-transparent
                    text-white p-5 flex flex-col justify-end
                  "
                  >
                    <h3 className="text-xl font-bold mb-1">
                      {discount.description}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">
                      {discount.details}
                    </p>

                    <div className="flex justify-between items-center mt-auto">
                      {/* Tag de día */}
                      <div className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full">
                        {discount.day}
                      </div>

                      {/* Tag de descuento */}
                      <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center">
                        Hasta {discount.discount}
                        <span className="text-xs ml-1">dcto.</span>
                      </div>
                    </div>

                    {/* Etiqueta \"Nuevo\" si aplica */}
                    {discount.isNew && (
                      <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 mb-10 rounded-full">
                        Nuevo
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Button
          className={`mt-8 font-medium px-6 py-2 rounded-full transition-colors
            ${
              theme === "dark"
                ? "bg-green-700 hover:bg-green-600 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }
          `}
        >
          Ver todos los descuentos
        </Button>
      </div>
    </section>
  );
};

export default Discounts;

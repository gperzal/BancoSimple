import { FaWhatsapp } from "react-icons/fa";

const ContactWsp = () => {
  return (
    <a
      href="https://wa.me/1234567890?text=Hola%2C%20necesito%20ayuda%20con%20BancoSimple"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 flex items-center gap-2 py-3 px-6
        rounded-full shadow-lg text-lg font-bold transition-all border-2
        hover:scale-110 hover:rotate-2
        bg-[#ef7b83] text-white border-white
        z-50   /* <--- Asegura que esté encima de otros elementos */
      `}
    >
      <FaWhatsapp size={24} />
      Contáctanos
    </a>
  );
};

export default ContactWsp;

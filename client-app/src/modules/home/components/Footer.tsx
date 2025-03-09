import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="py-6 text-white"
      style={{
        backgroundColor: "#ef7b83", // Color corporativo
      }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 📌 Columna 1: Logo y Descripción */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <img
            src="/src/assets/img/logow.svg"
            alt="BancoSimple Logo Blanco"
            className="h-10"
          />
          <p className="text-sm opacity-90 text-center md:text-left">
            Tu banco digital simple y seguro para gestionar tus finanzas desde
            cualquier lugar.
          </p>
        </div>

        {/* 🏦 Columna 2: Nuestro Banco */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Nuestro Banco</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/quienes-somos" className="hover:underline text-white">
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link
                to="/trabaja-con-nosotros"
                className="hover:underline text-white"
              >
                Trabaja con nosotros
              </Link>
            </li>
            <li>
              <Link to="/#faq" className="hover:underline text-white">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link
                to="/politica-privacidad"
                className="hover:underline text-white"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                to="/terminos-condiciones"
                className="hover:underline text-white"
              >
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* ⚖️ Columna 3: Información Legal */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Información Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/seguridad" className="hover:underline text-white">
                Seguridad Bancaria
              </Link>
            </li>
            <li>
              <Link
                to="/proteccion-datos"
                className="hover:underline text-white"
              >
                Protección de Datos
              </Link>
            </li>
            <li>
              <Link to="/regulaciones" className="hover:underline text-white">
                Regulaciones Financieras
              </Link>
            </li>
            <li>
              <Link
                to="/derechos-usuario"
                className="hover:underline text-white"
              >
                Derechos del Usuario
              </Link>
            </li>
          </ul>
        </div>

        {/* 📞 Columna 4: Contacto */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Contacto</h3>

          {/* 📧 Email */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <FaEnvelope size={20} />
            <a href="mailto:soporte@bancosimple.cl" className="hover:underline">
              soporte@bancosimple.cl
            </a>
          </div>

          {/* ☎ Teléfono (Grande) */}
          <div className="flex items-center justify-center md:justify-start gap-3 border border-white/50 rounded-full px-4 py-2">
            <FaPhone size={28} className="text-white" />
            <div>
              <p className="text-md font-medium">Llámanos</p>
              <p className="text-lg font-bold">600 320 3000</p>
            </div>
          </div>

          {/* 🔗 Redes Sociales (Grandes) */}
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <a
              href="#"
              className="hover:text-gray-200 p-3 rounded-full bg-white/10 transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 p-3 rounded-full bg-white/10 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 p-3 rounded-full bg-white/10 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 p-3 rounded-full bg-white/10 transition-transform transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 p-3 rounded-full bg-white/10 transition-transform transform hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* ⚖ Copyright y Regulación */}
      <div className="mt-6 border-t border-white/50 pt-6 text-center text-sm opacity-90">
        <p>
          © {new Date().getFullYear()} BancoSimple. Todos los derechos
          reservados.
        </p>
        <p className="mt-2 opacity-80">
          Infórmese sobre las entidades autorizadas para emitir Tarjetas de Pago
          en el país, quienes se encuentran inscritas en los{" "}
          <span className="font-semibold">
            Registros de Emisores de Tarjetas
          </span>{" "}
          que lleva la CMF, en{" "}
          <a
            href="https://www.cmfchile.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            www.cmfchile.cl
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

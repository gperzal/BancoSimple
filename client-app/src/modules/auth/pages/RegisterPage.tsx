import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RegisterForm from "@/modules/auth/components/RegisterForm";
import { useTheme } from "@/context/ThemeContext";
import Logo from "/logow.svg";

const RegisterPage = () => {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#ef7b83] to-[#d8344e] px-4 py-12">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="BancoSimple" className="w-60" />
        </div>
        <RegisterForm theme={theme} />
        <div className="mb-8 mt-4">
          <Link
            to="/"
            className="flex items-center text-white text-lg hover:underline transition-all"
          >
            <FaArrowLeft className="mr-2" /> Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

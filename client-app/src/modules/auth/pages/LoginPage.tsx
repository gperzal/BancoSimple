import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import LoginForm from "@/modules/auth/components/LoginForm";
import Logo from "/logow.svg";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-primary)] to-[var(--color-primary-dark)] px-4 py-12">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="BancoSimple" className="w-60" />
        </div>
        <LoginForm />
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

export default LoginPage;

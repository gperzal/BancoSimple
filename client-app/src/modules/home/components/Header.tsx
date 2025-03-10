import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const links = [
    { to: "/seguro-simple", text: "SeguroSimple" },
    { to: "/play-simple", text: "PlaySimple" },
    { to: "/eco-express", text: "EcoExpress" },
    { to: "/eco-market", text: "EcoMarket" },
  ];

  return (
    <div
      className={`
        /* 👇 Oculto en móvil, visible en >= md */
        hidden md:flex 
        items-center justify-center gap-4 text-sm font-medium py-2 px-4
        ${
          theme === "dark"
            ? "bg-white text-[#232323] border-border-light"
            : "bg-[#232323] text-white border-border-dark"
        }
      `}
    >
      <div className="flex items-center text-base font-medium">
        {links.map((link, index) => (
          <div key={index} className="flex items-center">
            <Link
              to={link.to}
              className="transition-colors duration-200 hover:text-[var(--color-primary)]"
            >
              {link.text}
            </Link>
            {index < links.length - 1 && (
              <span className="mx-3 text-gray-400">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

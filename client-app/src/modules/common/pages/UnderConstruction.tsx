// src/pages/UnderConstruction.tsx
import { useTheme } from "@/context/ThemeContext";

const UnderConstruction = ({ title }: { title: string }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        flex flex-col items-center justify-center min-h-[60vh]
        ${
          theme === "dark"
            ? "bg-background-dark text-foreground-dark"
            : "bg-background text-foreground"
        }
      `}
    >
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img
        src="/img/construccion.jpg"
        alt="En construcción"
        className="w-auto h-auto mb-4"
      />
      <p className="text-center max-w-md px-4">
        Esta sección todavía se encuentra en desarrollo. ¡Pronto podrás
        disfrutar de todas las funcionalidades de {title}!
      </p>
    </div>
  );
};

export default UnderConstruction;

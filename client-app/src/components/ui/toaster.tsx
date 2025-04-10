import { Toaster as SonnerToaster, ToasterProps } from "sonner";
import { useTheme } from "@/context/ThemeContext";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast:
            "bg-[var(--popover-bg-light)] text-[var(--color-foreground-light)] " +
            "dark:bg-[var(--popover-bg-dark)] dark:text-[var(--color-foreground-dark)] " +
            "border border-[var(--popover-border-light)] dark:border-[var(--popover-border-dark)] " +
            "rounded-lg shadow-xl px-4 py-3",
          title: "font-semibold text-sm",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground font-medium",
          cancelButton: "bg-muted text-muted-foreground font-medium",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

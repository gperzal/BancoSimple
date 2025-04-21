// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/modules/auth/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="banco-simple-theme">
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

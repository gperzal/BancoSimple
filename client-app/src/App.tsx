import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

// Public routes
import HomePage from "@/modules/home/pages/HomePage";
import LoginPage from "@/modules/auth/pages/LoginPage";
import RegisterPage from "@/modules/auth/pages/RegisterPage";
import PasswordRecoveryPage from "@/modules/auth/pages/PasswordRecoveryPage";

// Protected routes (dashboard)
import DashboardPage from "@/modules/dashboard/common/page/DashboardPage";
import CardsPage from "@/modules/dashboard/cards/page/CardsPage";
import TransactionsPage from "@/modules/dashboard/transactions/page/TransactionsPage";
import HistoryPage from "@/modules/dashboard/history/page/HistoryPage";
// En construcción
import PlaySimple from "@/modules/common/pages/PlaySimple";
import SeguroSimple from "@/modules/common/pages/SeguroSimple";
import EcoExpress from "@/modules/common/pages/EcoExpress";

function App() {
  return (
    // theme default: system
    <ThemeProvider defaultTheme="system" storageKey="banco-simple-theme">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/recover-password"
              element={<PasswordRecoveryPage />}
            />

            {/* Páginas en construcción */}
            <Route path="/seguro-simple" element={<SeguroSimple />} />
            <Route path="/play-simple" element={<PlaySimple />} />
            <Route path="/eco-express" element={<EcoExpress />} />

            {/* Dashboard con layout */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/cards" element={<CardsPage />} />
            <Route
              path="/dashboard/transactions"
              element={<TransactionsPage />}
            />
            <Route path="/dashboard/history" element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

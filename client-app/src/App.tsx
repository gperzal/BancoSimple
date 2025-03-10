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
import DashboardPage from "@/modules/dashboard/pages/DashboarPage";
import DashboardProfile from "@/modules/dashboard/pages/DashboardProfile";
import DashboardSettings from "@/modules/dashboard/pages/DashboardSettings";
import DashboardTransactions from "@/modules/dashboard/pages/DashboardTransactions";
import DashboardAnalytics from "@/modules/dashboard/pages/DashboardAnalytics";
import DashboardLayout from "@/modules/dashboard/components/DashboardLayout";

// En construcción
import PlaySimple from "@/modules/common/pages/PlaySimple";
import SeguroSimple from "@/modules/common/pages/SeguroSimple";
import EcoExpress from "@/modules/common/pages/EcoExpress";

import ErrorBoundary from "@/components/ErrorBoundaryState";

function App() {
  return (
    // theme default: system
    <ThemeProvider defaultTheme="system" storageKey="banco-simple-theme">
      <AuthProvider>
        <ErrorBoundary>
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
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route
                  path="/dashboard/profile"
                  element={<DashboardProfile />}
                />
                <Route
                  path="/dashboard/security"
                  element={<DashboardSettings />}
                />
                <Route
                  path="/dashboard/transactions"
                  element={<DashboardTransactions />}
                />
                <Route
                  path="/dashboard/analytics"
                  element={<DashboardAnalytics />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster />
        </ErrorBoundary>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

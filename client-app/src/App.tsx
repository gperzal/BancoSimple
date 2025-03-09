import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

// Public routes
import HomePage from "@/modules/home/pages/HomePage";
import LoginPage from "@/modules/auth/pages/LoginPage";
import RegisterPage from "@/modules/auth/pages/RegisterPage";
import PasswordRecoveryPage from "@/modules/auth/pages/PasswordRecoveryPage";

// Protected routes (dentro del layout del dashboard)
import DashboardPage from "@/modules/dashboard/pages/DashboarPage";
// import TransactionsPage from "@/modules/dashboard/transactions/pages/TransactionsPage";
import DashboardProfile from "@/modules/dashboard/pages/DashboardProfile";
import DashboardSettings from "@/modules/dashboard/pages/DashboardSettings";
import DashboardTransactions from "@/modules/dashboard/pages/DashboardTransactions";
import DashboardAnalytics from "@/modules/dashboard/pages/DashboardAnalytics";

// Layout del dashboard (envuelve todas las rutas protegidas)
import DashboardLayout from "@/modules/dashboard/components/DashboardLayout";

import ErrorBoundary from "@/components/ErrorBoundaryState";

function App() {
  return (
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
              {/* Rutas protegidas agrupadas en DashboardLayout */}
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

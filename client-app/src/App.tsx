import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@shadcn/sonner";
// import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
// Public routes
import HomePage from "@/modules/home/pages/HomePage";

import LoginPage from "@/modules/auth/pages/LoginPage";
// import RegisterPage from "@/modules/auth/pages/RegisterPage";
// import PasswordRecoveryPage from "@/modules/auth/pages/PasswordRecoveryPage";

// Protected routes
// import DashboardHome from "@/modules/dashboard/pages/Home";
// import TransactionsPage from "@/modules/transactions/pages/TransactionsPage";
// import ProfileSettings from "@/modules/settings/pages/ProfileSettings";
// import SecuritySettings from "@/modules/settings/pages/SecuritySettings";

// Layout components
import ProtectedRoute from "@/routes/ProtectedRoute";
// import DashboardLayout from "@/modules/dashboard/components/DashboardLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="banco-simple-theme">
      {/* ✅ Agregar AuthProvider */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

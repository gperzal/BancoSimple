// src/routes/AppRoutes.tsx
import { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import Layout from "@/modules/dashboard/common/components/Layout";
import PublicLayout from "@/modules/common/layouts/PublicLayout"

// Public
import HomePage from "@/modules/home/pages/HomePage";
import AccountsPage from "@/modules/accounts/page/AccountsPage"
import InvestmentsPage from "@/modules/investments/page/InvestmentsPage"
import InsurancePage from "@/modules/insurance/page/InsurancePage"
import BenefitsPage from "@/modules/benefits/page/BenefitsPage"



import LoginPage from "@/modules/auth/pages/LoginPage";
import RegisterPage from "@/modules/auth/pages/RegisterPage";
import PasswordRecoveryPage from "@/modules/auth/pages/PasswordRecoveryPage";
import PlaySimple from "@/modules/common/pages/PlaySimple";
import SeguroSimple from "@/modules/common/pages/SeguroSimple";
import EcoExpress from "@/modules/common/pages/EcoExpress";

// Dashboard pages
import DashboardPage from "@/modules/dashboard/common/page/DashboardPage";
import ProfilePage from "@/modules/dashboard/profile/page/ProfilePage";
import ContactsPage from "@/modules/dashboard/contacts/page/ContactsPage";
import TransactionsPage from "@/modules/dashboard/transactions/page/TransactionsPage";
import HistoryPage from "@/modules/dashboard/history/page/HistoryPage";
import CardsPage from "@/modules/dashboard/cards/page/CardsPage";
import AnalyticsPage from "@/modules/dashboard/analytics/page/AnalyticsPage";
import SettingsPage from "@/modules/dashboard/settings/page/SettingsPage";
import ClientPremiumDashboardPage from "@/modules/dashboard/client/page/ClientPremiumDashboardPage";
import AdminDashboardPage from "@/modules/dashboard/admin/page/AdminDashboardPage";
import AdminRolePage from "@/modules/dashboard/admin/page/AdminRolePage";
import ExecutiveDashboardPage from "@/modules/dashboard/executive/page/ExecutiveDashboardPage";
import ProductsPage from "@/modules/dashboard/products/page/ProductsPage";

function RequireAuth({
  children,
  roles,
}: {
  children: ReactNode;
  roles?: string[];
}) {
  const { auth, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (roles && !auth?.roles.some((r) => roles.includes(r)))
    return <Navigate to="/dashboard" replace />;
  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
        {/* Públicas con PublicLayout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recover-password" element={<PasswordRecoveryPage />} />
      <Route path="/play-simple" element={<PlaySimple />} />
      <Route path="/seguro-simple" element={<SeguroSimple />} />
      <Route path="/eco-express" element={<EcoExpress />} />

      {/* Dashboard con Layout */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="products" element={<ProductsPage />} />

        <Route
          path="premium"
          element={
            <RequireAuth roles={["PREMIUM"]}>
              {/* PremiumPage */}
              <ClientPremiumDashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="executive"
          element={
            <RequireAuth roles={["ADMIN", "EXECUTIVE"]}>
              {/* ExecutivePage */}
              <ExecutiveDashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="admin"
          element={
            <RequireAuth roles={["ADMIN"]}>
              <AdminDashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="admin/role"
          element={
            <RequireAuth roles={["ADMIN"]}>
              <AdminRolePage />
            </RequireAuth>
          }
        />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

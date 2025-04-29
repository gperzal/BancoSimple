// src/modules/common/layouts/PublicLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/modules/home/components/Navbar";
import Footer from "@/modules/home/components/Footer";
import Header from "@/modules/home/components/Header";
import ContactWsp from "@/modules/home/components/ContactWsp";



const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <ContactWsp />
      <Footer />
    </div>
  );
};
export default PublicLayout;

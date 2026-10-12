import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

// =============================================
// MAIN LAYOUT — Wrapper Header + Footer
// =============================================

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main-content" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

import { Suspense, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import Contact from "./components/pages/Contact";
import routes from "tempo-routes";

function App() {
  // Add smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.hash && anchor.hash.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#050510]">
          <div className="w-16 h-16 relative">
            <div className="w-16 h-16 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-blue-600 border-l-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;

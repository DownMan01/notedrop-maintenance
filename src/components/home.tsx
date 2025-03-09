import React, { useEffect, useRef } from "react";
import Header from "./landing/Header";
import CountdownTimer from "./landing/CountdownTimer";
import EmailSignupForm from "./landing/EmailSignupForm";
import LearnMoreSection from "./landing/LearnMoreSection";
import Footer from "./landing/Footer";
import HeroSection from "./landing/HeroSection";

const Home = () => {
  // Define the launch date (30 days from now)
  const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // Handle email signup
  const handleEmailSignup = (email: string) => {
    console.log(`Email submitted: ${email}`);
    // In a real app, this would send the email to a backend service
  };

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Animate background elements
      document.querySelectorAll(".crypto-node").forEach((node, index) => {
        const element = node as HTMLElement;
        const speed = index % 3 === 0 ? 0.05 : index % 3 === 1 ? 0.03 : 0.07;
        element.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
      });

      // Animate connecting lines
      document.querySelectorAll(".crypto-line").forEach((line, index) => {
        const element = line as HTMLElement;
        const speed = index % 2 === 0 ? 0.02 : 0.04;
        element.style.transform = `scaleX(${1 + scrollY * 0.0005}) rotate(${element.dataset.rotation}deg)`;
        element.style.opacity = `${Math.max(0.1, Math.min(0.4, 0.2 + scrollY * 0.0002))}`;
      });

      // Fade in sections as they come into view
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        if (isInView) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#050510] overflow-hidden">
      {/* Header */}
      <Header logo="NoteDrop" twitterLink="https://x.com/jiecrypto0" />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="py-16 px-4 md:px-8 max-w-7xl mx-auto transition-all duration-1000 opacity-0 transform translate-y-10"
        >
          <HeroSection />

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Track Airdrops
              </h3>
              <p className="text-slate-300">
                Keep track of all your airdrops in one place with our
                comprehensive database and tracking tools.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Discover Projects
              </h3>
              <p className="text-slate-300">
                Find new and exciting Web3 projects before they go mainstream
                with our curated discovery features.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/30 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Stay Updated
              </h3>
              <p className="text-slate-300">
                Receive timely notifications about new airdrops, upcoming
                projects, and important deadlines.
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div
            ref={(el) => (sectionsRef.current[1] = el)}
            className="mb-16 transition-all duration-1000 opacity-0 transform translate-y-10"
          >
            <CountdownTimer targetDate={launchDate} />
          </div>

          {/* Email Signup Form */}
          <div
            ref={(el) => (sectionsRef.current[2] = el)}
            className="max-w-md mx-auto mb-16 transition-all duration-1000 opacity-0 transform translate-y-10"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
              Get Notified at Launch
            </h2>
            <EmailSignupForm
              onSubmit={handleEmailSignup}
              buttonText="Notify Me"
              placeholderText="Enter your email address"
              successMessage="Thanks! We'll notify you when NoteDrop launches."
            />
          </div>

          {/* Learn More Section */}
          <div
            ref={(el) => (sectionsRef.current[3] = el)}
            className="transition-all duration-1000 opacity-0 transform translate-y-10"
          >
            <LearnMoreSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Background Elements - Crypto-themed nodes and connections */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a2e] to-[#1a0b2e] opacity-80"></div>

        {/* Animated mesh grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Crypto nodes */}
        <div className="crypto-node absolute top-1/4 left-1/5 w-3 h-3 bg-blue-500 rounded-full opacity-70 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.7)]"></div>
        <div className="crypto-node absolute top-3/4 left-1/3 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>
        <div className="crypto-node absolute top-1/3 right-1/4 w-3 h-3 bg-indigo-500 rounded-full opacity-70 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.7)]"></div>
        <div className="crypto-node absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.7)]"></div>
        <div className="crypto-node absolute top-1/2 left-1/2 w-5 h-5 bg-purple-400 rounded-full opacity-50 animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.7)]"></div>
        <div className="crypto-node absolute top-1/6 right-1/6 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]"></div>
        <div className="crypto-node absolute bottom-1/6 left-1/6 w-2 h-2 bg-fuchsia-400 rounded-full opacity-60 animate-pulse shadow-[0_0_10px_rgba(232,121,249,0.7)]"></div>

        {/* Connecting lines */}
        <div
          className="crypto-line absolute top-[25%] left-[20%] w-[30%] h-[1px] bg-gradient-to-r from-blue-500 to-transparent opacity-30"
          data-rotation="25"
        ></div>
        <div
          className="crypto-line absolute top-[75%] left-[33%] w-[20%] h-[1px] bg-gradient-to-r from-purple-500 to-transparent opacity-30"
          data-rotation="-15"
        ></div>
        <div
          className="crypto-line absolute top-[33%] right-[24%] w-[25%] h-[1px] bg-gradient-to-l from-indigo-500 to-transparent opacity-30"
          data-rotation="40"
        ></div>
        <div
          className="crypto-line absolute top-[50%] left-[50%] w-[15%] h-[1px] bg-gradient-to-r from-purple-400 to-transparent opacity-30"
          data-rotation="-30"
        ></div>
        <div
          className="crypto-line absolute bottom-[20%] right-[30%] w-[25%] h-[1px] bg-gradient-to-l from-blue-400 to-transparent opacity-30"
          data-rotation="15"
        ></div>
        <div
          className="crypto-line absolute top-[16%] right-[16%] w-[10%] h-[1px] bg-gradient-to-l from-cyan-400 to-transparent opacity-30"
          data-rotation="-20"
        ></div>
        <div
          className="crypto-line absolute bottom-[16%] left-[16%] w-[10%] h-[1px] bg-gradient-to-r from-fuchsia-400 to-transparent opacity-30"
          data-rotation="10"
        ></div>

        {/* Floating crypto symbols */}
        <div className="crypto-node absolute top-[15%] right-[40%] opacity-20 animate-float-slow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L19.5 16H4.5L12 2Z"
              fill="#627EEA"
              fillOpacity="0.8"
            />
            <path
              d="M12 22L4.5 8H19.5L12 22Z"
              fill="#627EEA"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <div className="crypto-node absolute bottom-[25%] left-[35%] opacity-20 animate-float-medium">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#F7931A" fillOpacity="0.8" />
            <path
              d="M16 10.5C16 8.567 14.433 7 12.5 7H9V14H12.5C14.433 14 16 12.433 16 10.5Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M15 13.5C15 15.433 13.433 17 11.5 17H9V10H11.5C13.433 10 15 11.567 15 13.5Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <div className="crypto-node absolute top-[60%] right-[15%] opacity-20 animate-float-fast">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7"
              y="7"
              width="10"
              height="10"
              fill="#345D9D"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;

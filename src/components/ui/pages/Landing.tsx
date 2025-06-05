import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const navigate = useNavigate();

  const heroWords = ["freelancers", "clients", "teams", "creators"];

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % heroWords.length);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(wordInterval);
    };
  }, []);

  const handleNavClick = (path: string) => {
    navigate("signup");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.5s ease-out",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            transform: "translate(50%, 50%)",
            transition: "all 0.8s ease-out",
            animationDelay: "1s",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`flex justify-between items-center px-8 py-6 relative z-10 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold text-white hover:scale-110 transition-transform duration-300 cursor-pointer">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AlignSpace
          </span>
        </h1>
        <ul className="flex space-x-8 text-white font-medium">
          {["About", "Features", "Contact"].map((item, index) => (
            <li
              key={item}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              <button
                onClick={() => handleNavClick(item.toLowerCase())}
                className="hover:text-purple-400 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4 relative z-10">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 hover:scale-105 transition-transform duration-300">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              AlignSpace
            </span>
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            A portal where{" "}
            <span className="relative inline-block">
              <span
                key={currentWord}
                className="text-purple-400 font-semibold animate-pulse"
              >
                {heroWords[currentWord]}
              </span>
            </span>{" "}
            can securely share updates, files, chat with clients, and track
            project progress — all in one place.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            onClick={() => handleNavClick("signup")}
            className="group relative cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>

        {/* Floating Action Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`text-center text-gray-400 py-4 relative z-10 transition-all duration-1000 delay-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="hover:text-gray-300 transition-colors duration-300">
          &copy; {new Date().getFullYear()} AlignSpace. All rights reserved.
        </div>
      </footer>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  );
}

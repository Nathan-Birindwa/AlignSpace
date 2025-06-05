import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Ambient background effects */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-pink-500/5 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl bg-gray-950/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
        style={{
          boxShadow:
            "0 0 50px rgba(147, 51, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side - Branding */}
          <motion.div
            variants={leftVariants}
            className="flex-1 bg-gradient-to-br from-gray-900/50 to-black/50 p-6 sm:p-8 lg:p-12 flex flex-col justify-center relative"
          >
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl p-2 lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  AlignSpace
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 sm:mb-6" />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-3 sm:space-y-4"
              >
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  A portal where freelancers can securely share updates, files,
                  chat with clients, and track project progress — all in one
                  place.
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Join thousands of professionals already transforming their
                  workflow with our intelligent platform.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-400 text-sm">Live now</span>
                </div>
                <div className="text-gray-500 text-sm">12.5K+ active users</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vertical divider - hidden on mobile */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-700/50 to-transparent" />

          {/* Horizontal divider - visible on mobile */}
          <div className="lg:hidden h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />

          {/* Right Side - Form */}
          <motion.div
            variants={rightVariants}
            className="flex-1 p-6 sm:p-8 lg:p-12 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                Create Account
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Start your journey with us today
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {/* Google Sign In */}
              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(147, 51, 234, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 cursor-pointer sm:py-4 px-4 sm:px-6 bg-white/5 border border-gray-700/50 rounded-xl sm:rounded-2xl text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-gray-600/50 flex items-center justify-center space-x-3 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </motion.button>

              {/* Divider */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700/50" />
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-4 bg-gray-950/40 text-gray-400">
                    or continue with email
                  </span>
                </div>
              </motion.div>

              {/* Form Fields */}
              <motion.div variants={itemVariants} className="relative">
                <motion.input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/30 border border-gray-700/50 rounded-xl sm:rounded-2xl focus:outline-none focus:border-purple-500/50 focus:bg-gray-900/50 transition-all duration-300 placeholder-gray-500 text-gray-100 backdrop-blur-sm text-sm sm:text-base"
                />
                {focusedField === "fullName" && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full origin-left"
                  />
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <motion.input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/30 border border-gray-700/50 rounded-xl sm:rounded-2xl focus:outline-none focus:border-purple-500/50 focus:bg-gray-900/50 transition-all duration-300 placeholder-gray-500 text-gray-100 backdrop-blur-sm text-sm sm:text-base"
                />
                {focusedField === "email" && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full origin-left"
                  />
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <motion.input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 pr-10 sm:pr-12 bg-gray-900/30 border border-gray-700/50 rounded-xl sm:rounded-2xl focus:outline-none focus:border-purple-500/50 focus:bg-gray-900/50 transition-all duration-300 placeholder-gray-500 text-gray-100 backdrop-blur-sm text-sm sm:text-base"
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-3 sm:right-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff size={18} className="sm:w-5 sm:h-5" />
                  ) : (
                    <Eye size={18} className="sm:w-5 sm:h-5" />
                  )}
                </motion.button>
                {focusedField === "password" && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full origin-left"
                  />
                )}
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 40px rgba(147, 51, 234, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r cursor-pointer from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 font-semibold shadow-lg text-sm sm:text-base"
              >
                Create Account
              </motion.button>

              <motion.p
                variants={itemVariants}
                className="text-center text-gray-400 text-xs sm:text-sm"
              >
                Already have an account?{" "}
                <motion.a
                  whileHover={{ color: "#c084fc" }}
                  onClick={() => navigate("/signin")}
                  className="text-purple-400 cursor-pointer hover:underline transition-colors duration-200 font-medium"
                >
                  Sign in
                </motion.a>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

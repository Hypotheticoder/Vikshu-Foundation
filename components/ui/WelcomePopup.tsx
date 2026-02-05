import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const WelcomePopup: React.FC = () => {
  const { t } = useTranslation("home");
  const [showWelcome, setShowWelcome] = React.useState(false);

  React.useEffect(() => {
    const hasVisited = sessionStorage.getItem("vikshu_visited");
    if (!hasVisited) {
      setShowWelcome(true);
    }
  }, []);

  const handleCloseWelcome = () => {
    sessionStorage.setItem("vikshu_visited", "true");
    setShowWelcome(false);
  };

  if (!showWelcome) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Animated Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={handleCloseWelcome}
      >
        {/* Animated particles/orbs in background */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </motion.div>

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        className="relative glass rounded-2xl sm:rounded-[4rem] border border-amber-500/40 shadow-2xl max-w-4xl w-full overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Multiple decorative gradients */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-600/30 rounded-full blur-[150px] animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/20 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCloseWelcome}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass border border-amber-500/30 flex items-center justify-center text-amber-500 hover:text-white hover:bg-amber-600/50 transition-all shadow-lg"
          aria-label="Close welcome popup"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </motion.button>

        <div className="relative p-4 sm:p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* LEFT SIDE - Enhanced Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center relative"
            >
              {/* Glowing ring behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-r from-amber-500/40 to-amber-600/40 rounded-full blur-3xl"
                ></motion.div>
              </div>

              {/* Main Image with interactive hover */}
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 group cursor-pointer"
              >
                {/* Animated border ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 opacity-50 blur-md group-hover:opacity-80 transition-opacity"
                ></motion.div>

                {/* Image container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 sm:border-8 border-amber-500/50 shadow-2xl shadow-amber-900/50 bg-gradient-to-br from-amber-900/20 to-amber-600/20">
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    src="/assets/leader2.jpeg"
                    alt="Aheli"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23d4af37"/%3E%3Cstop offset="100%25" style="stop-color:%23704214"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g)" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="70" fill="%230c0c0c" font-weight="bold"%3EAP%3C/text%3E%3C/svg%3E';
                    }}
                  />

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating particles around image */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-500 rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: i % 2 === 0 ? "-10%" : "110%",
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  ></motion.div>
                ))}
              </motion.div>

              {/* Animated name and title below image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <motion.h3
                  className="text-2xl sm:text-4xl md:text-5xl font-serif-vintage italic text-amber-500 mb-2 drop-shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  Aheli
                </motion.h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-3"
                ></motion.div>
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.4em] font-heading text-gray-400">
                  Global Head
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - Welcome Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-8"
            >
              {/* Greeting with staggered animation */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-amber-600/30"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </motion.div>
                  <span className="text-amber-500 text-xs uppercase tracking-widest font-heading">
                    Welcome Message
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-xl sm:text-3xl md:text-4xl font-serif-vintage italic text-white leading-tight"
                >
                  {t("welcome.greeting")}
                </motion.h2>
              </div>

              {/* Message text with fade-in */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
              >
                {t("welcome.message")}
              </motion.p>

              {/* Bio text about Aheli */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-sm sm:text-base text-gray-400 leading-relaxed italic border-l-2 border-amber-500/30 pl-4"
              >
                Advancing from a dedicated UK mental health advisor to Global
                Head of Vikshu, she bridges the gap between clinical empathy and
                international leadership. Her mission is to revolutionize mental
                health support on a truly global scale.
              </motion.p>

              {/* Interactive CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="pt-4"
              >
                <motion.button
                  onClick={handleCloseWelcome}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white rounded-2xl font-heading tracking-widest text-xs uppercase shadow-2xl shadow-amber-900/50 flex items-center justify-center gap-3 group overflow-hidden w-full sm:w-auto"
                >
                  {/* Animated background shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  ></motion.div>

                  <span className="relative z-10">{t("welcome.continue")}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Corner decorative elements */}
        <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-amber-500/30 rounded-tr-3xl"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-amber-500/30 rounded-bl-3xl"></div>
      </motion.div>
    </div>
  );
};

export default WelcomePopup;

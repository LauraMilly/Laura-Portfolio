import { motion } from "framer-motion";
import RobotBackground from "../components/RobotBackground";
import { useLanguage } from "../context/LanguageContext";
import { useRotatingTypewriter } from "../hooks/useRotatingTypewriter";

export default function Home() {
  const { t } = useLanguage();

  const animatedHighlight = useRotatingTypewriter(
    t("home.hero.highlights"),
    {
      typingSpeed: 90,
      deletingSpeed: 45,
      pauseBeforeDelete: 1600,
    }
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <RobotBackground />

      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-4xl text-center flex flex-col items-center justify-center gap-4 text-gray-100 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-gray-300"
        >
          {t("home.hero.title")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight"
        >
          {t("home.hero.subtitle1")}{" "}
          <span
            className="text-transparent bg-clip-text
                       bg-linear-to-r from-[#A855F7] to-[#EC4899]
                       drop-shadow-[0_0_30px_#EC4899]"
          >
            {animatedHighlight}
            <span className="ml-1 animate-pulse text-[#A855F7]">|</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="flex flex-wrap gap-6 mt-6 justify-center"
        >
          <a
            href="#portfolio"
            className="px-10 py-3 rounded-full border border-[#A855F7]/60
                       text-[#A855F7] font-medium
                       hover:bg-[#A855F7]/10
                       hover:shadow-[0_0_25px_#A855F7]
                       transition-all"
          >
            {t("home.hero.secondaryCta")}
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-64
                      bg-gradient-to-b from-transparent via-black/70 to-black z-30" />
    </section>
  );
}

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const NEON = "#A855F7";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="
        relative flex items-center justify-center
        px-6 sm:px-8 md:px-16 lg:px-24
        text-gray-100 z-20 min-h-screen
      "
    >
      <div
        className="
          flex flex-col-reverse md:flex-row
          items-center justify-between
          gap-12 md:gap-20 lg:gap-24
          w-full max-w-7xl
        "
      >
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex-1
            text-center md:text-left
            max-w-xl
          "
        >
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-light mb-6 md:mb-8
              leading-snug tracking-tight
            "
          >
            <span
              className="text-transparent bg-clip-text font-semibold"
              style={{
                backgroundImage: `linear-gradient(90deg, ${NEON}, ${NEON})`,
              }}
            >
              {t("home.about.titleHighlight")}
            </span>
            <br />
            <span className="text-white/90 font-light">
              {t("home.about.title")}
            </span>
          </h2>

          <div
            className="
              space-y-5
              text-gray-400
              text-sm sm:text-base
              leading-relaxed
              whitespace-pre-line
            "
          >
            <p>{t("home.about.paragraphs")}</p>
          </div>

          {/* BOTÕES */}
          <div
            className="
              flex flex-col sm:flex-row
              items-center md:items-start
              justify-center md:justify-start
              gap-4 sm:gap-6
              mt-10 md:mt-12
            "
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
                px-8 py-3
                rounded-full
                font-medium
                text-black
                w-full sm:w-auto
                text-center
              "
              style={{
                background: NEON,
                boxShadow: `0 0 30px ${NEON}88`,
              }}
            >
              {t("home.about.ctaPrimary")}
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 25px ${NEON}66`,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
                px-8 py-3
                rounded-full
                font-medium
                border
                w-full sm:w-auto
                text-center
              "
              style={{
                borderColor: `${NEON}77`,
                color: NEON,
              }}
            >
              {t("home.about.ctaSecondary")}
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGEM */}
        <motion.img
          src="/about-img.png"
          alt="Sobre mim"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
            mx-auto
          "
        />
      </div>
    </section>
  );
}

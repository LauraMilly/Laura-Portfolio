import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import TimelineJourney from "./TimelineJourney";

const NEON = "#A855F7";

export default function Services() {
  const { t } = useLanguage();

  const cards = t("services.cards", { returnObjects: true });

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center
                 py-24 px-6 md:px-20 text-gray-100 z-20"
    >
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white/90 mb-6">
          {t("services.hero.title")}{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(90deg, ${NEON}, ${NEON})`,
            }}
          >
            {t("services.hero.highlight")}
          </span>
        </h2>

        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
          {t("services.hero.subtitle")}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mb-32">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            whileHover={{
              boxShadow: `0 0 35px ${NEON}55`,
            }}
            className="relative bg-white/5 backdrop-blur-xl
                       border rounded-3xl p-8 text-left
                       transition-all duration-300 ease-out"
            style={{ borderColor: `${NEON}55` }}
          >
            <h3 className="text-2xl font-semibold mb-3" style={{ color: NEON }}>
              {card.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              {card.desc}
            </p>

            <p className="text-sm italic" style={{ color: `${NEON}CC` }}>
              {card.value}
            </p>

            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              whileHover={{
                background: `radial-gradient(circle at center, ${NEON}22 0%, transparent 70%)`,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center mb-24"
      >
        <h3 className="text-3xl md:text-4xl font-light text-white/90 mb-6">
          {t("services.quote.text")}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {t("services.quote.subtext")}
        </p>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="px-8 py-3 rounded-full font-medium text-black
                   transition-all mb-32"
        style={{
          background: NEON,
          boxShadow: `0 0 30px ${NEON}88`,
        }}
      >
        {t("services.buttons.contactUs")}
      </motion.a>

      {/* Timeline (substitui metrics) */}
      <TimelineJourney />
    </section>
  );
}

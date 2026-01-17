import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { sprites } from "../assets/journey";
import { useLanguage } from "../context/LanguageContext";
import { journeyBase } from "../data/journeyData";

const NEON = "#A855F7";

export default function TimelineJourney() {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();

  const journey = journeyBase.map((item) => ({
    ...item,
    label: t(`services.timelineJourney.labels.${item.labelKey}`),
    title: t(`services.timelineJourney.titles.${item.titleKey}`),
    desc: t(`services.timelineJourney.descriptions.${item.descKey}`),
  }));

  const current = journey[step];

  /* Navegação por teclado (desktop) */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setStep((prev) => Math.min(prev + 1, journey.length - 1));
      }
      if (e.key === "ArrowLeft") {
        setStep((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [journey.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      {/* ================= MOBILE ================= */}
      <div className="flex flex-col items-center gap-8 md:hidden">
        {/* Sprite */}
        <motion.img
          key={current.sprite}
          src={sprites[current.sprite]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-20"
          style={{
            imageRendering: "pixelated",
            filter: `drop-shadow(0 0 15px ${NEON})`,
          }}
        />

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              bg-white/5 backdrop-blur-xl
              border border-purple-500/40
              rounded-xl px-5 py-4
              text-center max-w-sm
            "
          >
            <h4 className="text-white font-semibold mb-2">
              {current.title}
            </h4>
            <p className="text-sm text-gray-400">{current.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Label */}
        <p className="text-xs text-purple-400 uppercase tracking-wider">
          {current.label}
        </p>

        {/* Controles */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            disabled={step === 0}
            className="
              px-4 py-2 text-sm rounded-full
              border border-purple-500/40
              text-purple-300
              disabled:opacity-30
            "
          >
            Anterior
          </button>

          <button
            onClick={() =>
              setStep((s) => Math.min(s + 1, journey.length - 1))
            }
            disabled={step === journey.length - 1}
            className="
              px-4 py-2 text-sm rounded-full
              bg-purple-500 text-black font-medium
              disabled:opacity-30
            "
          >
            Próximo
          </button>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        {/* Linha */}
        <div className="relative w-full h-48">
          <div className="absolute left-0 right-0 top-24 h-[2px] bg-purple-500/30" />

          <motion.div
            className="absolute top-24 h-[2px] bg-purple-500"
            style={{ boxShadow: `0 0 20px ${NEON}` }}
            animate={{ width: `${current.position}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Sprite */}
          <motion.img
            src={sprites[current.sprite]}
            animate={{ left: `${current.position}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-24 w-16 z-20"
            style={{
              transform: "translate(-50%, -100%)",
              imageRendering: "pixelated",
              filter: `drop-shadow(0 0 12px ${NEON})`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between items-start mt-8">
          {journey.map((item, index) => {
            const isActive = index === step;

            return (
              <div key={item.id} className="relative w-40 text-center">
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="
                        absolute -top-28 left-1/2 -translate-x-1/2
                        bg-white/5 backdrop-blur-xl
                        border border-purple-500/40
                        rounded-xl px-4 py-3 w-48 z-30
                      "
                    >
                      <h4 className="text-white text-sm font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="w-[2px] h-10 mx-auto bg-purple-500/30" />

                <div
                  className={`w-4 h-4 mx-auto rounded-full ${isActive ? "bg-purple-400" : "bg-purple-600"
                    }`}
                  style={{ boxShadow: `0 0 15px ${NEON}` }}
                />

                <p className="text-xs text-gray-400 mt-2">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

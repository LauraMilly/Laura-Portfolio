import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const NEON = "#A855F7";

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = t("portfolio.projects", { returnObjects: true });

  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(390);

  const projectsLength = projects.length;
  const infiniteProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const updateSize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 40);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setIndex(projectsLength);
  }, [projectsLength]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index >= projectsLength * 2) {
      setTimeout(() => setIndex(projectsLength), 50);
    }
    if (index <= projectsLength - 1) {
      setTimeout(() => setIndex(projectsLength * 2 - 1), 50);
    }
  }, [index, projectsLength]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -40) next();
    if (info.offset.x > 40) prev();
  };

  return (
    <section
      id="portfolio"
      className="relative w-full flex flex-col items-center py-10 text-gray-100 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-light text-center">
        {t("portfolio.title")}{" "}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r"
          style={{ backgroundImage: `linear-gradient(90deg, ${NEON}, #d8b4fe)` }}
        >
          {t("portfolio.highlight")}
        </span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mt-6 mb-14 leading-relaxed">
        {t("portfolio.subtitle")}
      </p>

      {/* SETA ESQUERDA */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30
        bg-white/5 border border-purple-500/30 backdrop-blur-xl 
        w-12 h-12 rounded-full justify-center items-center 
        hover:bg-white/10 transition"
        style={{ boxShadow: `0 0 20px ${NEON}` }}
      >
        ←
      </button>

      {/* SETA DIREITA */}
      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30
        bg-white/5 border border-purple-500/30 backdrop-blur-xl 
        w-12 h-12 rounded-full justify-center items-center 
        hover:bg-white/10 transition"
        style={{ boxShadow: `0 0 20px ${NEON}` }}
      >
        →
      </button>

      {/* SLIDER */}
      <div className="w-full overflow-hidden px-4 md:px-10 select-none relative pt-6 pb-10">
        <motion.div
          className="flex gap-10"
          animate={{ x: -index * cardWidth }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {infiniteProjects.map((p, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                ref={i === 0 ? cardRef : null}
                key={i}
                whileHover={{ y: -10, boxShadow: `0 0 35px ${NEON}` }}
                className="min-w-[85vw] sm:min-w-[350px] max-w-[350px]
                bg-white/5 backdrop-blur-xl 
                border border-purple-500/30
                rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-top object-cover opacity-80"
                  />
                </div>

                <div className="p-6 flex flex-col">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: NEON }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className={`text-sm text-gray-300 transition-all ${isExpanded ? "" : "line-clamp-3"
                      }`}
                  >
                    {p.desc}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : i)
                    }
                    className="text-xs mt-2 w-fit text-purple-300 hover:text-purple-200 transition"
                  >
                    {isExpanded ? "Ler menos" : "Ler mais"}
                  </button>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs 
                        bg-white/10 border border-purple-500/30 
                        rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

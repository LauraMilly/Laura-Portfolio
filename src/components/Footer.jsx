import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const NEON = "#A855F7";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full mt-32 border-t border-purple-500/30 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/lm.png"
              alt="Laura Souza"
              className="w-10 h-10 rounded-full object-cover border border-purple-400 shadow-purple-500/40 shadow-md"
            />

            <span className="text-xl font-semibold tracking-wide text-white">
              Laura Souza
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
            {t("footer.description")}
          </p>

          <div className="flex gap-5 mt-2">
            <a
              href="https://github.com/LauraMilly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 text-xl transition"
              style={{ textShadow: `0 0 10px ${NEON}` }}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/lauramilly/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 text-xl transition"
              style={{ textShadow: `0 0 10px ${NEON}` }}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/55819898225525"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 text-xl transition"
              style={{ textShadow: `0 0 10px ${NEON}` }}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-gray-300 font-medium mb-4 tracking-wide">
            {t("footer.navigation")}
          </h4>

          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-purple-400 transition">
                {t("footer.navLinks.home")}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                {t("footer.navLinks.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-purple-400 transition">
                {t("footer.navLinks.services")}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-purple-400 transition">
                {t("footer.navLinks.portfolio")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                {t("footer.navLinks.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:items-end">
          <h4 className="text-gray-300 font-medium mb-4 tracking-wide text-left">
            {t("footer.talkTitle")}
          </h4>

          <p className="text-gray-400 text-sm max-w-xs mb-4">
            {t("footer.talkDescription")}
          </p>

          <a
            href="https://wa.me/5511950187114"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full 
            text-purple-300 border border-purple-500/40 
            hover:bg-purple-500/10 transition text-sm"
            style={{ boxShadow: `0 0 20px ${NEON}` }}
          >
            {t("footer.whatsapp")}
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full text-center py-6 text-gray-500 text-xs border-t border-purple-500/30">
        © {new Date().getFullYear()} Laura Souza — {t("footer.rights")}
      </div>
    </footer>
  );
}

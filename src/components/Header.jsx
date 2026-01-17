import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ReactCountryFlag from "react-country-flag";

export default function Header() {
  const { t, toggleLang, lang } = useLanguage();
  const navbarItens = t("navbar.navs", { returnObjects: true });
  const navbarLinks = t("navbar.links", { returnObjects: true });
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
          flex items-center justify-between gap-6
          px-8 py-3 rounded-full 
          backdrop-blur-xl bg-white/10 border border-white/20 
          shadow-[0_0_25px_rgba(255,255,255,0.08)]
          text-snow"
      >


        <nav className="hidden md:flex gap-6 text-sm font-light tracking-wide">
          {navbarItens.map((item, i) => (
            <a
              key={i}
              href={navbarLinks[i]}
              className="relative group text-snow transition-colors duration-300 hover:text-[#A855F7]"
            >
              {item}
              <span
                className="absolute bottom-0 left-0 w-full h-0.5
                           bg-[#A855F7]
                           shadow-[0_0_20px_#A855F7]
                           scale-x-0 group-hover:scale-x-100
                           origin-left transition-transform duration-300"
              />
            </a>
          ))}
        </nav>

        <motion.button
          onClick={toggleLang}
          className="hidden md:block text-sm border border-white/30 px-3 py-1 rounded-full hover:bg-white/10 transition-all"
        >
          {lang === "en" ? (
            <ReactCountryFlag
              countryCode="BR"
              svg
              style={{ width: "1em", height: "1em", marginTop: "-5px" }}
            />
          ) : (
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{ width: "1em", height: "1em", marginTop: "-5px" }}
            />
          )}
        </motion.button>

        <button
          className="md:hidden p-2 text-snow"
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 
                       w-[90%] max-w-sm 
                       backdrop-blur-lg bg-white/10 
                       border border-white/10 
                       rounded-3xl shadow-lg md:hidden z-40"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-light text-snow">
              {navbarItens.map((item, i) => (
                <li key={i}>
                  <a
                    href={navbarLinks[i]}
                    className="hover:text-[#A855F7] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <button
                onClick={toggleLang}
                className="text-sm border border-white/30 px-3 py-1 rounded-full hover:bg-white/10"
              >
                {lang === "en" ? (
                  <ReactCountryFlag
                    countryCode="BR"
                    svg
                    style={{ width: "1em", height: "1em", marginTop: "-5px" }}
                  />
                ) : (
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{ width: "1em", height: "1em", marginTop: "-5px" }}
                  />
                )}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

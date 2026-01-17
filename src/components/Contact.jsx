import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";

const NEON = "#A855F7";

export default function Contact() {
  const { t } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_7bhxbfj",
        "template_tatd9xq",
        form.current,
        "zy9f2zG928YTuhczt"
      )
      .then(
        () => {
          setStatus("success");
          toast.success(t("contact.form.success"), {
            style: {
              background: "#0e1113",
              color: "#eaeaea",
              border: `1px solid ${NEON}`,
              borderRadius: "12px",
              boxShadow: `0 0 20px ${NEON}`,
            },
          });
          form.current.reset();
          setTimeout(() => setStatus(""), 2000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setTimeout(() => setStatus(""), 2000);
        }
      );
  };

  return (
    <section id="contact" className="w-full px-6 md:px-20 py-28 text-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light leading-snug"
          >
            {t("contact.title")}{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(90deg, ${NEON}, #d8b4fe)` }}
            >
              {t("contact.highlight")}
            </span>
          </motion.h2>

          <p className="text-gray-400 leading-relaxed max-w-md">
            {t("contact.subtitle")}
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-2">
            <a
              href="https://github.com/LauraMilly"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lauramilly/"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:laauramirellydesouza@gmail.com"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 text-2xl transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/55819898225525"
            target="_blank"
            className="flex items-center gap-3 w-fit mt-4 
            bg-purple-500/20 border border-purple-500/30 backdrop-blur-lg 
            text-purple-300 px-6 py-3 rounded-full 
            hover:bg-purple-500/30 transition 
            shadow-lg"
            style={{ boxShadow: `0 0 20px ${NEON}` }}
          >
            <FaWhatsapp className="text-2xl" />
            {t("contact.whatsapp")}
          </a>
        </div>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-purple-500/30 
          rounded-3xl p-10 flex flex-col gap-6 shadow-xl"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">
              {t("contact.form.nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              required
              className="bg-white/5 border border-white/20 rounded-xl p-3 
              text-gray-100 focus:outline-none focus:border-purple-400"
              placeholder={t("contact.form.namePlaceholder")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">
              {t("contact.form.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              required
              className="bg-white/5 border border-white/20 rounded-xl p-3 
              text-gray-100 focus:outline-none focus:border-purple-400"
              placeholder={t("contact.form.emailPlaceholder")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">
              {t("contact.form.messageLabel")}
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="bg-white/5 border border-white/20 rounded-xl p-3 
              text-gray-100 focus:outline-none focus:border-purple-400 resize-none"
              placeholder={t("contact.form.messagePlaceholder")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 font-semibold rounded-full px-6 py-3 
            text-white transition"
            style={{
              background: `linear-gradient(90deg, ${NEON}, #d8b4fe)`,
              boxShadow: `0 0 25px ${NEON}`,
            }}
          >
            {status === "sending"
              ? t("contact.form.sending")
              : status === "success"
                ? t("contact.form.success")
                : status === "error"
                  ? t("contact.form.error")
                  : t("contact.form.submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

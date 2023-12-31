import { useState, useRef, Suspense } from "react";
import { useTranslation } from "react-i18next";

import emailjs from "@emailjs/browser";

import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";
import Loader from "../components/Loader";

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

import Footer from "../components/Footer";

const Contact = () => {
  const [t, _] = useTranslation("global");

  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const sendEmail = () => {
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: "brayanalexanderb@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showAlert({
          text: t("pages.contact.form.successMessage"),
          type: "success",
        });

        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error.text);

        showAlert({
          text: t("pages.contact.form.errorMessage"),
          type: "danger",
        });
      })
      .finally(() => {
        setIsLoading(false);
        setCurrentAnimation("idle");

        setTimeout(() => {
          hideAlert();
        }, 3000);
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendEmail();
  };

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
        {alert.show && <Alert {...alert} />}

        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">{t("pages.contact.title")}</h1>

          <form
            ref={formRef}
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold">
              {t("pages.contact.form.labels.name")}
              <input
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="text"
                name="name"
                className="input"
                placeholder={t("pages.contact.form.placeholders.name")}
                required
              />
            </label>
            <label className="text-black-500 font-semibold">
              {t("pages.contact.form.labels.email")}
              <input
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="email"
                name="email"
                className="input"
                placeholder={t("pages.contact.form.placeholders.email")}
                required
              />
            </label>
            <label className="text-black-500 font-semibold">
              {t("pages.contact.form.labels.message")}
              <textarea
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="text"
                name="message"
                rows={4}
                className="textarea"
                placeholder={t("pages.contact.form.placeholders.message")}
                required
              />
            </label>

            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading
                ? t("pages.contact.form.sendingMessage")
                : t("pages.contact.form.submit")}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
      <hr className="border-slate-200 mb-6" />
      <Footer />
    </>
  );
};

export default Contact;

import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, _] = useTranslation("global");

  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">{t("pages.contact.title")}</h1>

        <form
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
    </section>
  );
};

export default Contact;

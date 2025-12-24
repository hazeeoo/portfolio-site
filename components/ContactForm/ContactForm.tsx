"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Сообщение обязательно";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Сообщение должно содержать минимум 10 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Интеграция с Formspree или другим сервисом
      // Для примера используем Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      
      <div className="max-w-2xl mx-auto relative z-10">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black dark:text-white">
            Связаться со мной
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            Есть проект или вопрос? Напишите мне, и я отвечу в ближайшее время
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <form onSubmit={handleSubmit} className="space-y-6 glass p-8 md:p-10 rounded-2xl shadow-2xl">
          {/* Имя */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-3 rounded-lg border transition-all",
                "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm",
                "border-gray-300 dark:border-gray-700",
                "text-black dark:text-white",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:scale-[1.02]",
                "hover:shadow-lg",
                errors.name && "border-red-500"
              )}
              placeholder="Ваше имя"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-3 rounded-lg border transition-all",
                "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm",
                "border-gray-300 dark:border-gray-700",
                "text-black dark:text-white",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:scale-[1.02]",
                "hover:shadow-lg",
                errors.email && "border-red-500"
              )}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Сообщение */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
            >
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={cn(
                "w-full px-4 py-3 rounded-lg border transition-all resize-none",
                "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm",
                "border-gray-300 dark:border-gray-700",
                "text-black dark:text-white",
                "focus:outline-none focus:ring-2 focus:ring-accent focus:scale-[1.02]",
                "hover:shadow-lg",
                errors.message && "border-red-500"
              )}
              placeholder="Ваше сообщение..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Статус отправки */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400">
              Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400">
              Произошла ошибка при отправке. Попробуйте еще раз или свяжитесь со мной напрямую.
            </div>
          )}

          {/* Кнопка отправки */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "btn-3d w-full px-6 py-3 rounded-lg font-semibold transition-all",
              "bg-accent text-white hover:bg-green-600",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
              "shadow-lg"
            )}
          >
            {isSubmitting ? "Отправка..." : "Отправить сообщение"}
          </button>
          </form>
        </ScrollAnimation>

        {/* Альтернативные способы связи */}
        <ScrollAnimation delay={300}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Или свяжитесь со мной напрямую:
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:example@email.com"
                className="text-accent hover:underline font-medium"
              >
                example@email.com
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Telegram
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}


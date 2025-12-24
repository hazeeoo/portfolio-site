import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Система учета для типографии",
    description: "Full-stack приложение для управления заказами, складом и клиентами. Включает панель администратора, систему отчетности и интеграцию с принтерами.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com/username/printing-system",
    imageUrl: "/images/project-1.jpg"
  },
  {
    id: 2,
    title: "E-commerce платформа",
    description: "Современный интернет-магазин с корзиной, системой оплаты, личным кабинетом и админ-панелью. Реализована фильтрация, поиск и рекомендации товаров.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    demoUrl: "https://shop.example.com",
    codeUrl: "https://github.com/username/ecommerce",
    imageUrl: "/images/project-2.jpg"
  },
  {
    id: 3,
    title: "Дашборд аналитики",
    description: "Веб-приложение для визуализации данных с интерактивными графиками, экспортом отчетов и настраиваемыми виджетами. Поддержка real-time обновлений.",
    tech: ["React", "D3.js", "Python", "FastAPI", "WebSocket"],
    demoUrl: "https://analytics.example.com",
    codeUrl: "https://github.com/username/analytics-dashboard",
    imageUrl: "/images/project-3.jpg"
  },
  {
    id: 4,
    title: "Мобильное приложение для доставки",
    description: "Кроссплатформенное приложение на React Native для заказа еды с отслеживанием доставки в реальном времени, push-уведомлениями и системой рейтингов.",
    tech: ["React Native", "Node.js", "Firebase", "MongoDB", "Expo"],
    demoUrl: "https://app.example.com",
    codeUrl: "https://github.com/username/delivery-app",
    imageUrl: "/images/project-4.jpg"
  }
];


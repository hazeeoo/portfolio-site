import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-4 mt-0 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* О себе */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">О портфолио</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-stack разработчик, создающий современные веб-приложения с
              фокусом на качество и пользовательский опыт.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-accent transition-all hover:translate-x-1 inline-block"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-accent transition-all hover:translate-x-1 inline-block"
                >
                  Проекты
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-accent transition-all hover:translate-x-1 inline-block"
                >
                  Контакты
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-accent transition-all hover:translate-x-1 inline-block"
                >
                  Все проекты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:example@email.com"
                  className="text-gray-400 hover:text-accent transition-all hover:translate-x-1 inline-block"
                >
                  example@email.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-all hover:translate-x-1 inline-block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-all hover:translate-x-1 inline-block"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p className="text-sm">
            © {currentYear} Haze.
          </p>
        </div>
      </div>
    </footer>
  );
}


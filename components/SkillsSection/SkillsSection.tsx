"use client";

import { Skill } from "@/types";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  skills: Skill[];
}

const categories = [
  { id: "all", name: "Все", value: null },
  { id: "frontend", name: "Frontend", value: "frontend" as const },
  { id: "backend", name: "Backend", value: "backend" as const },
  { id: "tools", name: "Инструменты", value: "tools" as const },
];

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === null
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const groupedSkills = filteredSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black dark:text-white">
          Навыки
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Технологии и инструменты, с которыми я работаю
        </p>

        {/* Фильтры категорий */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-6 py-2 rounded-lg font-medium transition-colors",
                activeCategory === category.value
                  ? "bg-accent text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Сетка навыков */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white capitalize">
                {category === "frontend"
                  ? "Frontend"
                  : category === "backend"
                  ? "Backend"
                  : "Инструменты"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-black dark:text-white">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    {skill.level && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-3d-soft group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col">
      {/* Изображение проекта */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl font-mono text-gray-400 dark:text-gray-600">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
      </div>

      {/* Контент карточки */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Технологии */}
        <div className="flex flex-wrap gap-2 mb-6 min-h-[2.5rem]">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Ссылки */}
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "btn-3d flex-1 px-4 py-2 rounded-lg font-semibold text-center relative overflow-hidden group",
                "bg-accent text-white"
              )}
            >
              <span className="relative z-10">Демо</span>
              <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "btn-3d flex-1 px-4 py-2 rounded-lg font-semibold text-center relative overflow-hidden group",
                "border-2 border-black dark:border-white",
                "text-black dark:text-white",
                "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              )}
            >
              <span className="relative z-10">Код</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


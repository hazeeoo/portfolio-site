import Header from "@/components/Header/Header";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Footer from "@/components/Footer/Footer";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
              Все проекты
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Полный список проектов, над которыми я работал. Каждый проект
              представляет уникальный опыт и набор технологий.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

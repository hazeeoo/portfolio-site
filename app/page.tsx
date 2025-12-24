import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import { projects } from "@/data/projects";

export default function Home() {
  // Показываем только первые 3 проекта на главной
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        
        {/* Projects Section */}
        <section id="projects" className="relative py-20 px-4 overflow-hidden">
          
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black dark:text-white">
                Избранные проекты
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
                Несколько проектов, над которыми я работал. Каждый из них представляет
                уникальный набор задач и решений.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <ScrollAnimation key={project.id} delay={index * 100} className={`stagger-${index + 1}`}>
                  <ProjectCard project={project} />
                </ScrollAnimation>
              ))}
            </div>
            <ScrollAnimation delay={400}>
              <div className="text-center">
                <a
                  href="/projects"
                  className="btn-3d inline-block px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all relative overflow-hidden group text-lg"
                >
                  <span className="relative z-10">Посмотреть все проекты</span>
                  <span className="absolute inset-0 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

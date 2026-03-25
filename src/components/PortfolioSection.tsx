import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import posterSnowQueenLookingGlass from "@/assets/poster-snow-queen-looking-glass.png";
import posterHanselMagicAgency from "@/assets/poster-hansel-magic-agency.png";
import posterNickInventor from "@/assets/poster-nick-inventor.png";
import posterBobrDobr from "@/assets/poster-bobr-dobr-new.png";
import posterMagicKitchen from "@/assets/poster-magic-kitchen-new.png";
import posterHanselSleepingBeauty from "@/assets/poster-hansel-sleeping-beauty.png";
import posterGuardians from "@/assets/poster-snow-queen-guardians-new.png";
import posterHeroesArctic from "@/assets/poster-heroes-arctic.png";
import posterTurtles from "@/assets/poster-turtles.jpg";

interface Project {
  title: string;
  type: string;
  image: string;
  description: string;
  fit?: "cover" | "contain";
}

const projects: Project[] = [
  {
    title: "Ник-изобретатель",
    type: "Сериал",
    image: posterNickInventor,
    description: "Персонажная анимация для детского приключенческого сериала с акцентом на динамику, выразительные реакции и ясный силуэт движения.",
  },
  {
    title: "Ганзель, Гретель и Агентство Магии",
    type: "Фильм",
    image: posterHanselMagicAgency,
    description: "Анимация персонажей для полнометражного фильма. Работа над харизмой героев, комедийным таймингом и живой актёрской подачей.",
  },
  {
    title: "Бобр Добр",
    type: "Сериал",
    image: posterBobrDobr,
    description: "Яркая персонажная анимация для детского сериала с комедийными акцентами, понятной пластикой и эмоционально читаемыми позами.",
  },
  {
    title: "Ганзель и Гретель: Миссия «Спящая красавица»",
    type: "Фильм",
    image: posterHanselSleepingBeauty,
    description: "Полнометражный проект с упором на актёрскую анимацию, взаимодействие персонажей в кадре и выразительную постановку сцен.",
  },
  {
    title: "Волшебная кухня",
    type: "Сериал",
    image: posterMagicKitchen,
    description: "Сериал с мягкой стилизацией и сказочным настроением, где важны деликатная мимика, жесты и дружелюбный ритм анимации.",
  },
  {
    title: "Снежная Королева: Хранители чудес",
    type: "Сериал",
    image: posterGuardians,
    description: "Сериальный проект по известной франшизе. Работа в продакшн-пайплайне с быстрыми итерациями и сохранением цельной актёрской анимации.",
  },
  {
    title: "Снежная Королева: Зазеркалье",
    type: "Фильм",
    image: posterSnowQueenLookingGlass,
    description: "Полнометражный фильм с масштабной постановкой. Фокус на персонажной выразительности, ясных силуэтах и эмоционально читаемых сценах.",
    fit: "contain",
  },
  {
    title: "Герои Арктики",
    type: "Фильм",
    image: posterHeroesArctic,
    description: "Приключенческий полнометражный проект, где важны ансамблевые сцены, ритм действия и убедительное поведение героев в кадре.",
  },
  {
    title: "Черепашки",
    type: "Сериал",
    image: posterTurtles,
    description: "Анимация для сериала с мультяшной стилистикой, командной динамикой и чистой подачей эмоций через позу, жест и тайминг.",
  },
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Портфолио</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Проекты</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Полнометражные фильмы и сериалы, в которых я создавала персонажную анимацию.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.button
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(project)}
              className="group relative rounded-xl overflow-hidden aspect-[2/3] cursor-pointer text-left"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={640}
                height={896}
                className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                  project.fit === "contain" ? "object-contain bg-secondary p-2" : "object-cover"
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-accent/30 rounded-xl" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block text-xs tracking-wider uppercase text-accent mb-1">{project.type}</span>
                <h3 className="text-sm md:text-base font-display font-semibold text-foreground leading-tight">{project.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-lg w-full overflow-hidden"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className={`w-full h-56 ${
                  selected.fit === "contain" ? "object-contain bg-secondary p-4" : "object-cover"
                }`}
              />
              <div className="p-6">
                <span className="inline-block text-xs tracking-wider uppercase text-accent mb-2">{selected.type}</span>
                <h3 className="text-xl font-display font-bold mb-3">{selected.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{selected.description}</p>
                <button
                  onClick={() => setSelected(null)}
                  className="text-sm text-accent hover:underline"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;

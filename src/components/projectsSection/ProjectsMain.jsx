import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const project = {
  name: "Recipe Finder",
  year: "2025",
  align: "center",
  image: "/images/recipe-finder.jpg", // ✅ Correct public path
  link: "https://github.com/natitam1/Recipe-Finder-main",
  description:
    "A web application that lets users enter ingredients and get recipe suggestions. It uses AI to suggest dishes and displays the recipe in a clean markdown format.",
};

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-center">Featured Project</h2>
        <p className="text-center mt-4 text-gray-600">{project.description}</p>
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        <SingleProject
          name={project.name}
          year={project.year}
          align={project.align}
          image={project.image}
          link={project.link}
        />
      </div>
    </div>
  );
};

export default ProjectsMain;

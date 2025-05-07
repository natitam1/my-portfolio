import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer (Freelance)",
    company: "Local Small Businesses",
    date: "April 2025 - May 2025",
    responsibilities: [
      "Built responsive websites for local clients using React and Tailwind CSS.",
      "Worked closely with small business owners to bring their ideas to life.",
      "Handled design-to-code conversion and basic SEO setup.",
    ],
  },
  {
    job: "Project Collaborator",
    company: "Study Group Projects",
    date: "February 2025 - Mid-April 2025",
    responsibilities: [
      "Built simple web apps in groups using HTML, CSS, and JavaScript. Used GitHub for collaboration and focused on clean, user-friendly UI."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="flex items-center">
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 && (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllExperiences;

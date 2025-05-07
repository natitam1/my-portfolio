import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hey, I’m Natnael Tamiru! I’m a front-end web developer who really enjoys building clean, fun, and user-friendly websites. I like mixing design with code to create stuff that looks good and works well.
        I’m always up for learning new things, trying out cool tools, and working on projects that push me to grow. Whether it’s a solo project or a team effort, I love turning ideas into real, working websites.
        Let’s make something awesome together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

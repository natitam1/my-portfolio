import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/natnael-tamiru-76b562334/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/natitam1" Icon={FiGithub} />
      <SingleContactSocial link="https://t.me/natitam1" Icon={FaTelegram} />
    </div>
  );
};

export default ContactSocial;

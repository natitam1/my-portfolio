import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="natnaeltamiru98@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+251 994 627 985" Image={FiPhone} />
      <SingleInfo text="Natnael, Ethiopia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

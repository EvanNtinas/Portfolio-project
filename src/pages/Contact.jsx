import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import ContactInfo from "../components/ContactInfo";
import backgroundImage from "../assets/Thessaloniki.jpg";

const Contact = () => {
  return (
    <section
      className='sm:h-full sm:w-full min-h-screen min-w-screen relative bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-2'>
          Contact me
        </h1>
        <div className='flex flex-col text-lg sm:text-xl'>
          <ContactInfo
            icon={<FiMapPin size={30} />}
            text='Thessaloniki, Greece'
          />
          <ContactInfo
            icon={<AiOutlineMail size={30} />}
            text='evan_ntinas@hotmail.com'
          />
          <ContactInfo
            icon={<IoCallOutline size={30} />}
            text='+30 6970451577'
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

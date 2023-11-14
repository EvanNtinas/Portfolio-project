import img from "../assets/vag.jpg";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const AboutMe = () => {
  return (
    <section className='min-h-screen min-w-screen flex flex-col flex-1 justify-start items-center p-5 text-center'>
      <h1 className='text-4xl md:text-6xl font-bold mb-4 text-center  p-5 text-teal-700'>
        About
      </h1>
      <div className='flex flex-row flex-wrap container m-4'>
        <div className='flex flex-col p-4 m-3 w-full text-left flex-1'>
          <p className='text-base md:text-xl leading-relaxed font-medium'>
            Hello, I'm Vangelis, a Computer Engineer with a passion for
            technology and a journey that's taken me from IT technician to Web
            Developer.
          </p>
          <p className='text-base md:text-xl leading-relaxed font-medium pt-4'>
            My journey in the world of technology began with a profound passion
            for computers that predates my formal education in Computer
            Engineering at the University of Western Macedonia. My fascination
            with PCs led me to troubleshoot and build systems long before I
            embarked on my academic journey. This hands-on experience not only
            kindled my love for technology but also provided a practical
            understanding of hardware intricacies. After completing my degree, I
            delved into the realm of IT engineering, honing my skills in
            technical support and system maintenance. However, driven by a
            fervent desire for continuous growth, innovation, and a profound
            interest in software development, I made a conscious decision to
            transition my career path over the last three years. This shift has
            been marked by my commitment to becoming a proficient Web Developer
            and Software Engineer, where I can leverage my technical background
            and passion for problem-solving to create innovative digital
            solutions.
          </p>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center w-full md:w-1/2 m-3'>
          <img src={img} alt='hero' className='rounded-full' />
          <div className='text-center font-medium text-lg'>
            <h3>Tech Stack</h3>
            <div className='flex flex-row m-2 space-x-4'>
              <AiFillHtml5 size={50} className='text-red-500' />
              <IoLogoCss3 size={50} className='text-blue-500' />
              <RiJavascriptFill size={50} className='text-yellow-500' />
              <FaReact size={50} className='text-sky-400' />
              <BiLogoTailwindCss size={50} className='text-blue-300' />
            </div>
          </div>
          <a
            href='/resume.pdf'
            download='Evangelos_Ntinas_Resume.pdf'
            className='bg-gradient-to-l from-teal-500 to-teal-800 text-white px-4 py-2 rounded-md mt-4 inline-block hover:text-customyellow'
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

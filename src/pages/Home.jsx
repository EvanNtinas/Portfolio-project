import { FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-5 text-center'>
      <h2 className='mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-700'>
        Vangelis Ntinas
      </h2>
      <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        Computer Engineer
      </h3>
      <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        Hello{" "}
        <span className='animate-pulse text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          👋
        </span>
        , welcome to my Portfolio
      </h2>
      <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-32 sm:w-28'>
        <a
          href='https://www.linkedin.com/in/vaggelis-ntinas-62bb92227/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 mr-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-20'
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href='https://github.com/EvanNtinas'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;

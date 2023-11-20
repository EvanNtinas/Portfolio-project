import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-800 p-4 overflow-auto'>
      <div className='flex items-center justify-between'>
        <img src='/v.png' alt='Icon' className='w-[50px] h-[50px] rounded-lg' />
        <ul className='flex space-x-4 items-center'>
          <li className='text-white text-lg md:text-xl  hover:text-customyellow hover:underline pt-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-white text-lg md:text-xl  hover:text-customyellow hover:underline pt-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='text-white text-lg md:text-xl  hover:text-customyellow hover:underline pt-2'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='text-white text-lg md:text-xl  hover:text-customyellow hover:underline pt-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <DarkModeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

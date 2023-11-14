import { Outlet } from "react-router-dom";
import { useDarkMode } from "../components/DarkModeContext";
import Header from "../components/Header";

const Layout = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark-mode" : ""}`}>
        <Header />
        {/* className='flex-grow w-full p-4 md:p-8' */}
        <main className=''>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import { useDarkMode } from "../components/DarkModeContext";
import Header from "../components/Header";

const Layout = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark-mode" : ""}`}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;

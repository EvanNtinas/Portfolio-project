import { FaGithub } from "react-icons/fa";

const projectData = [
  {
    image: require("../assets/v.png"),
    title: "Portfolio Project",
    description: "Portfolio site using React and Tailiwind CSS",
    linkText: <FaGithub />,
    linkUrl: " https://github.com/EvanNtinas/Portfolio-project",
    liveUrl: "https://evanntinas-portofolio-project.vercel.app/",
  },
  {
    image: require("../assets/weather.jpg"),
    title: "Weather App",
    description: "Weather App project",
    linkText: <FaGithub />,
    linkUrl: " https://github.com/EvanNtinas/Weather-App-Project",
  },
  {
    image: require("../assets/ramen-food.jpg"),
    title: "Food Order App",
    description: "Food order App",
    linkText: <FaGithub />,
    linkUrl: "https://github.com/EvanNtinas/food-order-app",
  },
  {
    image: require("../assets/simon-game.png"),
    title: "Simon Game",
    description: "Simon game using HTML, CSS, JS",
    linkText: <FaGithub />,
    linkUrl: "https://github.com/EvanNtinas/Simon-Game",
  },
  {
    image: require("../assets/investment-calculator-logo.png"),
    title: "Investment Calculator",
    description: "Simple React Project",
    linkText: <FaGithub />,
    linkUrl: "https://github.com/EvanNtinas/Investment-Calculator",
  },
];

export default projectData;

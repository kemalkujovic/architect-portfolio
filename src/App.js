import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/Home/HomePage";
import "./assets/fonts/Lato-Black.ttf";
import "./assets/fonts/Lato-BlackItalic.ttf";
import "./assets/fonts/Lato-Bold.ttf";
import "./assets/fonts/Lato-BoldItalic.ttf";
import "./assets/fonts/Lato-Italic.ttf";
import "./assets/fonts/Lato-Light.ttf";
import "./assets/fonts/Lato-LightItalic.ttf";
import "./assets/fonts/Lato-Regular.ttf";
import "./assets/fonts/Lato-Thin.ttf";
import "./assets/fonts/Lato-ThinItalic.ttf";
import "./assets/fonts/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat-ExtraBoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraLight.ttf";
import "./assets/fonts/Montserrat-ExtraLightItalic.ttf";
import "./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf";
import "./assets/fonts/Montserrat-Italic.ttf";
import "./assets/fonts/Montserrat-Light.ttf";
import "./assets/fonts/Montserrat-Regular.ttf";
import ProjectsDetail from "./pages/Projects/ProjectsDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        { path: "/projects/:projectsId", element: <ProjectsDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

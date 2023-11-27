import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import ProjectPage from "../pages/Project/ProjectPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/project/:id',
          element: <ProjectPage></ProjectPage>
        }
      ]
    },
  ]);


export default router;
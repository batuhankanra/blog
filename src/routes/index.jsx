import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout";
import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/project";
import NotFound from "../pages/notFound";
import Writing from "../pages/writing";


 const routes =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/project",
                element:<Project />
            },
            {
                path:"/writing",
                element:<Writing />
            },
            {
                path:"/*",
                element:<NotFound />
            }
        ]
    }
])
export default routes
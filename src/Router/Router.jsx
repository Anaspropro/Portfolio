import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Project from "../pages/Project"
import About from "../pages/About"
import Blog from "../pages/Blog"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/",
    element: <Project />
  },
  {
    path: "/",
    element: <Blog />
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
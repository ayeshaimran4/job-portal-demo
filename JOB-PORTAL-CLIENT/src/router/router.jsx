import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/About";
import Creatjob from "../pages/Creatjob";
import MyJobs from "../pages/MyJobs";
import SalaryPage from "../pages/SalaryPage";
import UpdateJob from "../pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {   path: "/",    element: <Home/>},

        //{   path: "/about",    element: <About/>},
        {
          path: "/post-job",
          element:<Creatjob/>
        },
        {
          path: "/my-job",
          element:<MyJobs/>
        },
        {
          path: "/salary",
          element:<SalaryPage/>
        },
        {
          path: "edit-job/:id",
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
        {
          path: "/job/:id",
          element:<JobDetails/>,
        }
      ]
    },

        {
          path: "/login",
          element: <Login/>,
        },
  ]);

  export default router;
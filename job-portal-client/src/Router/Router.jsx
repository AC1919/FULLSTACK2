import {createBrowserRouter} from "react-router-dom";
import App from "../App";

import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";
import Logout from "../components/Logout";
import Home from "../Pages/Home";




const router = createBrowserRouter([
    {path: "https://fullstack-2.vercel.app/",
    element: <App/>,
    children:[
        {
            path:"https://fullstack-2.vercel.app/",element:<Home/>
        },
        {
            path: "https://fullstack-2.vercel.app/post-job",
            element:<CreateJob/>
        },
        {
            path: "https://fullstack-2.vercel.app/my-job",
            element:<MyJobs/>
        },
        {
            path: "https://fullstack-2.vercel.app/salary",
            element:<SalaryPage/>
        },
        {
            path: "https://fullstack-2.vercel.app/edit-job/:id",
            element:<UpdateJob/>,
            loader:({params})=> fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
        
        {
            path: "https://fullstack-2.vercel.app/job/:id",
            element:<JobDetails/>,
            
        },

        
    ],
    
    },
    {
        path:"https://fullstack-2.vercel.app/login",
        element:<Login/>
    },
    {
        path:"https://fullstack-2.vercel.app/logout",
        element:<Logout/>
    }
   

  ]);
  export default router

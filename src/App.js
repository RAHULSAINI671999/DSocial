import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import './style.scss'
import { createBrowserRouter ,RouterProvider,Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./Pages/home/Home"
import Profile from "./Pages/profile/Profile"
import { useContext } from "react";
import { AuthContext } from "./context/authContext";





function App() {
  const {currentUser} = useContext(AuthContext)

  // const { darkMode } = useContext(DarkModeContext);
 

  const Layout = () =>{
    return (
      <div className="theme-dark">
       <Navbar />
       <div style={{display:"flex"}} >
       <LeftBar />
       <div style={{flex:6}}>
       <Outlet />
       </div>
   
       <RightBar />
       </div>
      </div>
    );
  };
  
  const ProtectdRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }

  return children

  }
  
const router = createBrowserRouter([
   
   {
   
    path:"/",
    element:<ProtectdRoute>
    <Layout />
    </ProtectdRoute> ,
    children:[
      {
      path:"/",
      element:<Home />,
    },
    {
      path:"/profile/:id",
      element:<Profile />,
    },
    ],
   },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);




  return (
    <div>

    <RouterProvider router={router} />
    </div>
  );
}

export default App;

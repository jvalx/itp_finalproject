import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "../Navigation";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal";


export default function Root() {
  return (
    <div className="container">
      <Navigation />

      



      {/* where we want the dynamic content */}
      <Outlet />
    
      
      <ToastContainer />
    </div>
  );
}
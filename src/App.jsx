import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
export default function App() {
  

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="pt-20 ">
        <Outlet />
      </div>
      <Footer />
    </div>
    
  );
}

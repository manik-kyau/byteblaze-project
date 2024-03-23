import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-290px)]">
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;
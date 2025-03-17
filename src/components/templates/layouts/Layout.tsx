import { ReactNode } from "react";
import Navbar from '../../molecules/nav-bar/Navbar';
import Footer from "../../molecules/footer/Footer";
import "../../../styles/animations.scss";


interface LayoutProps {
  children: ReactNode;
}


export default function Layout({children}:LayoutProps){


    return(
        <div>
            <Navbar/>
            <div className="scroll-watcher"></div>
            {children}
            <Footer/>
        </div>
    )
}
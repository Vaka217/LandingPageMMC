import logo from '../assets/logo.svg';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

// Hooks
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const scrollDirection = useScrollDirection();

    return (
        <header className={`flex items-center w-full p-4 h-[10vh] justify-between xl:justify-start z-50 bg-gradient-to-l from-sky-950 md:from-50% from-30% to-sky-100 sticky ${scrollDirection === "down" ? "-top-[10vh]" : "top-0"} transition-all duration-500`}>
            <img src={logo} alt="Logo" className="h-full ml-10" />
            <nav className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0 bg-gradient-to-b from-sky-900 from-30% to-white" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}>
                <AnchorLink href="#home" className="font-bold text-white text-2xl">
                    Home
                </AnchorLink>
                <AnchorLink href="#features" className="font-bold text-white text-2xl">
                    Features
                </AnchorLink>
                <AnchorLink href="#aboutus" className="font-bold text-white text-2xl">
                    About Us
                </AnchorLink>
            </nav>
            <button className="text-3xl p-2 xl:hidden" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <MdOutlineClose color='white' /> : <RxHamburgerMenu color='white' />}
            </button>
        </header>
    );
}

export default Header;
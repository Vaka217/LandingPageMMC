import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-sky-200 h-[10vh] flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-full py-4 ml-12" />
                <p className="text-sky-950 text-center font-semibold m-4">
                    © Market of Many Cards 2023 - All Rights Reserved
                </p>
                <AiOutlineGithub size={64} color="rgb(8 47 73)" className="self-justify-end mr-12" />
        </footer>
    )
};

export default Footer;
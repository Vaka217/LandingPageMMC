import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-sky-200 h-[10vh] flex flex-row justify-center items-center relative">
                <img src={logo} alt="Logo" className="h-full absolute left-14 py-4" />
                <p className="text-sky-950 text-center font-semibold">
                    © Market of Many Cards 2023 - All Rights Reserved
                </p>
                <AiOutlineGithub size={56} color="rgb(8 47 73)" className="absolute right-14" />
        </footer>
    )
};

export default Footer;
import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Member = ({name, roles, image, description, github, linkedin, instagram}) => {
    return (
        <div className="col-span-1 rounded-xl bg-sky-200 p-4 flex items-center flex-col shadow-lg shadow-slate-900 justify-start">
            <div className="flex justify-center items-center rounded-full shadow-xl w-56 h-56 overflow-hidden mt-4">
                <img src={image} className="w-full object-fill"/>
            </div>
            <h3 className="text-3xl font-bold my-4 text-sky-950 text-center">{name}</h3>
            <p className="text-center italic text-sky-950">{description}</p>
            <p className="text-sky-950 font-semibold text-xl my-4 text-center">
                {roles}
            </p>
            <div className="flex flex-row gap-4 mb-4">
                <a href={github} className='hover:scale-110 transition-all duration-500'>
                    <AiOutlineGithub size={36} color="rgb(8 47 73)" />
                </a>
                <a href={linkedin} className='hover:scale-110 transition-all duration-500'>
                    <BiLogoLinkedin size={36} color="rgb(8 47 73)" />
                </a>
                <a href={instagram} className='hover:scale-110 transition-all duration-500'>
                    <AiOutlineInstagram size={36} color="rgb(8 47 73)" />
                </a>
            </div>
        </div>
        )
    }

export default Member;
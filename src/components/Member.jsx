import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const lore = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet vehicula dignissim. Suspendisse in iaculis mi. Donec elit mi, scelerisque quis tempus ut, facilisis id tellus. Aenean ut risus eu lorem ornare interdum eget ut eros. Praesent lacinia convallis vestibulum. Morbi diam orci, sollicitudin sit amet sodales vitae, egestas quis nibh. Proin pharetra vulputate imperdiet. Ut quis convallis arcu, eget."

const Member = ({name, roles, image}) => {
    return (
        <div className="col-span-1 rounded-xl bg-sky-200 p-4 flex justify-center items-center flex-col shadow-lg shadow-slate-900">
            <div className="flex justify-center items-center rounded-full shadow-xl w-56 h-56 overflow-hidden mt-4">
                <img src={image} className="w-full object-fill"/>
            </div>
            <h3 className="text-3xl font-bold my-4 text-sky-950">{name}</h3>
            <p className="text-center italic text-sky-950">{lore}</p>
            <p className="text-sky-950 font-semibold text-xl my-4">
                {roles}
            </p>
            <div className="flex flex-row gap-4 mb-4">
                <AiOutlineGithub size={36} color="rgb(8 47 73)" />
                <BiLogoLinkedin size={36} color="rgb(8 47 73)" />
                <AiOutlineTwitter size={36} color="rgb(8 47 73)" />
            </div>
        </div>
        )
    }

export default Member;
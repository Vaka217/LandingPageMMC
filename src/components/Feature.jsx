import React from "react";

const Feature = ({name, description, image}) => {
    return (
        <div className="col-span-1 rounded-xl bg-sky-200 p-8 flex items-center flex-col shadow-lg shadow-slate-900 hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold text-sky-950 text-center">{name}</h3>
            <p className="text-sky-950 my-4 text-center">
                {description}
            </p>
            <div className="flex justify-center items-center mt-4 flex-1">
                <img src={image} className="rounded-xl w-1/2"/>
            </div>
        </div>
        )
    }

export default Feature;
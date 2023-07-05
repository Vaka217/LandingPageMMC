import React from "react";
import Feature from "./Feature";

const lore = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet vehicula dignissim. Suspendisse in iaculis mi. Donec elit mi, scelerisque quis tempus ut, facilisis id tellus. Aenean ut risus eu lorem ornare interdum eget ut eros. Praesent lacinia convallis vestibulum. Morbi diam orci, sollicitudin sit amet sodales vitae, egestas quis nibh. Proin pharetra vulputate imperdiet. Ut quis convallis arcu, eget."

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center xl:h-[100vh]" id="features">
            <h2 className="text-5xl text-slate-100 font-bold mt-8">Features</h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 p-10 px-16">
                <Feature name="Search your favorite cards!" description={lore} image="https://cdn.discordapp.com/attachments/732360655658680452/1126191772222099456/feature1.png" />
                <Feature name="Look for a specific card!" description={lore} image="https://cdn.discordapp.com/attachments/732360655658680452/1126195118785974383/feature2.png" />
                <Feature name="Manage your profile!" description={lore} image="https://cdn.discordapp.com/attachments/732360655658680452/1126195119368962078/feature3.png" />
            </div>
        </div>
    )
};

export default Features
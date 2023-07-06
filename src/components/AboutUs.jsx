import React from "react";
import Member from "./Member";

const members = [
  {
    name: "Gonzalo Cabaleiro",
    roles: "Frontend Developer/Project Manager",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222702152257716/14NYXqPVraSedJo6jD-5ZxxGcZTc6ADLb2adQSvz6j5zdKM-dZ-r1LbZSnpP4g6c.png",
    github: "https://github.com/Vaka217"
  },
  {
    name: "Nahuel Menéndez",
    roles: "DevOps",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222703003701440/1wQM1NLdI37pPdfL97HQVB0VEYQ_N7nKCVGXJ7XnP-uTLyQDm4dQarcXsnLNWSuc.png",
    github: "https://github.com/NMenendez24"
  },
  {
    name: "Santiago Vidarte",
    roles: "Backend Developer",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222702433292289/1Kvu-cd9vGK-EUKbYum9pW7lyUS4LEhBzzBfJWwk58p_nWDqOJCz2G7yXpl-w6w.png",
    github: "https://github.com/TheHaruYoshida"
  },
  {
    name: "Maicol Núñez",
    roles: "Frontend Developer",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222702718500985/1lpmgrQMl2gYnnKXBsJ8jEVLtZ1gZUoJsKBG-5uASaCpCMlBNSXeq9Q0Ffjql6P4.png",
    github: "https://github.com/Repli1"
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8" id="aboutus">
      <h2 className="text-5xl text-slate-100 font-bold mt-8">About Us</h2>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 p-10 px-16 w-full">
        {members.map((member, index) => (
          <Member
            key={index}
            name={member.name}
            roles={member.roles}
            image={member.image}
            github={member.github}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

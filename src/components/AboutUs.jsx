import React from "react";
import Member from "./Member";

const members = [
  {
    name: "Gonzalo Cabaleiro",
    roles: "Full-Stack Developer/Project Manager",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222702152257716/14NYXqPVraSedJo6jD-5ZxxGcZTc6ADLb2adQSvz6j5zdKM-dZ-r1LbZSnpP4g6c.png",
    github: "https://github.com/Vaka217",
    linkedin: "https://www.linkedin.com/in/gonzalo-cabaleiro/",
    instagram: "https://www.instagram.com/gonzalocabaleiro/?hl=es-la",
    description: "Gonzalo Cabaleiro is our dedicated Fullstack Developer and Project Manager for the MVP. With a passion for learning and improving, he takes charge of crafting seamless user experiences. Gonzalo collaborates closely with the team, ensuring a well-coordinated effort for our MVP development. His eagerness to embrace challenges make him a valuable asset for the project's success."
  },
  {
    name: "Nahuel Menéndez",
    roles: "DevOps/QA Tester",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222703003701440/1wQM1NLdI37pPdfL97HQVB0VEYQ_N7nKCVGXJ7XnP-uTLyQDm4dQarcXsnLNWSuc.png",
    github: "https://github.com/NMenendez24",
    linkedin: "https://www.linkedin.com/in/nahuel-menendez/",
    instagram: "https://www.instagram.com/ario_canario/?hl=es-la",
    description: "Nahuel Menéndez, our versatile DevOps and QA expert, plays a vital role in ensuring the efficiency and stability of our MVP. While growing his expertise, he automates processes, manages infrastructure, and actively tests to ensure the best possible quality for the MVP. Nahuel's problem-solving skills and determination contribute to the project's progress and success."
  },
  {
    name: "Santiago Vidarte",
    roles: "Backend Developer",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222702433292289/1Kvu-cd9vGK-EUKbYum9pW7lyUS4LEhBzzBfJWwk58p_nWDqOJCz2G7yXpl-w6w.png",
    github: "https://github.com/TheHaruYoshida",
    linkedin: "https://www.linkedin.com/in/santiagovidarte/",
    instagram: "https://www.instagram.com/vidarte.santiago/?hl=es-la",
    description: "Santiago Vidarte, our enthusiastic Backend Developer for the MVP. Eager to expand his knowledge, he is the driving force behind the development of the backend infrastructure. Santiago takes pride in designing APIs, integrating databases, and ensuring the smooth functioning of our MVP. His dedication to improvement and attention to detail is essential for the project's advancement."
  },
  {
    name: "Maicol Núñez",
    roles: "Frontend Developer",
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126222702718500985/1lpmgrQMl2gYnnKXBsJ8jEVLtZ1gZUoJsKBG-5uASaCpCMlBNSXeq9Q0Ffjql6P4.png",
    github: "https://github.com/Repli1",
    linkedin: "https://www.linkedin.com/in/maicol-nunez-a131a1282/",
    instagram: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Last but not least, Maicol Núñez, our creative and growth-oriented Frontend Developer, brings designs to life for the MVP. Embracing challenges, he creates visually appealing and user-friendly experiences. Maicol stays updated on the latest frontend technologies, continuously refining the MVP's interface. His enthusiasm and collaborative spirit contribute to the project's achievements."
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
            linkedin={member.linkedin}
            instagram={member.instagram}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

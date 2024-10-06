import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa"; // Assuming you're using react-icons

const project = [
  {
    title: "Project 1",
    image: "image1.jpg",
    link: "https://project1.com",
    icon: <FaArrowAltCircleLeft />,
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <>
      {/* <div className="project-section h-[100vh] w-full bg-gray-600  ">
        
        <h2 className="text-center bg-fixed text-[20vw] font-bold bg-gradient-to-r from-orange-300 to-red-600 bg-clip-text text-transparent translate-y-[25%]   ">
          PROJECTS
        </h2>

        <div className="proj h-[80vh] w-[40vw] border-2 border-none bg-zinc-800 pb-20  z-10"> 
        
        </div> 
        
      </div> */}
      <div className="project-section h-[100vh] w-full bg-gray-600 flex flex-col justify-center items-center">
  {/* Projects Heading */}
  <h2 className="text-center text-[15vw] font-bold bg-gradient-to-r from-orange-300 to-red-600 bg-clip-text text-transparent mb-10">
    PROJECTS
  </h2>

  {/* Project Box */}
  <div className="proj h-[60vh] w-[80vw] md:w-[40vw] bg-zinc-800 flex justify-center items-center rounded-lg">
    {/* Content for the project can go here */}
  </div>
</div>

    </>
  );
};

export default Project;

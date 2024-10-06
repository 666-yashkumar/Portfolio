import React from "react";
import Img2 from "../Image/Img2.jpg";
import Img3 from "../Image/Img3.jpg";
import resumePdf from "../Image/resume (1).pdf";

const About = () => {
  return (
    <>
      <div className="about  h-[100vh]  pt-10" style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${Img3})`,
        backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="heading m-4">
          <h1 className="text-[4vw] font-light font-mono text-blue-500">About Me</h1>
        </div>
        <div className="content flex justify-between items-center gap-10 px-10">
            <div className="left flex-shrink-0 ">
                <img className="h-[50vh] w-[40vh] object-cover" src={Img2} alt="" />
            </div>
            <div className="right   "  >
                 
                <p className="text-xl text-gray-200">I am a passionate and dedicated Web Development Fresher with a strong foundation in front-end and back-end technologies.<br/> <br/>Having recently completed my graduation in Information Technology, I have honed my skills in HTML, CSS, JavaScript, and React, along with a growing expertise in back-end technologies such as Node.js, Express, and MongoDB.</p>

                <button className="bg-gray-500 text-xl font-mono text-white px-4 py-2 rounded-md mt-8 hover:bg-gray-600 hover:scale-105 duration-300">
                <a href={resumePdf} download="Yash_Resume.pdf" className="flex items-center justify-center">
                  My Resume
                  </a>
                  </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;

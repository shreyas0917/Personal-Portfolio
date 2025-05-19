/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";
import PropTypes from "prop-types";

const Project_prop = (props) => {
  return (
    <>
      <div
        className="group border-[#00040f] shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl h-[370px] max-sm:h-[450px] p-7 max-sm:p-3 
        hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]
        hover:scale-[1.02] transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:shadow-blue-200 dark:hover:shadow-cyan-900"
      >
        <div className="HEADER">
          <div className="HEADING flex gap-7 max-sm:gap-0">
            <div className="p-3">
              <img
                src={props.img}
                alt=""
                className="max-w-[100px] rounded-full border border-[#00040f] 
                group-hover:scale-110 transition-transform duration-300 ease-in-out
                group-hover:shadow-lg"
              />
            </div>
            <div className="p-3">
              <h1
                className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r p-1 
                from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl mb-2
                group-hover:scale-105 transition-transform duration-300"
              >
                {props.title}
              </h1>
              <h3
                className="text-[#00040f] dark:text-slate-200 p-1 
                group-hover:text-blue-700 dark:group-hover:text-cyan-400 transition-colors duration-300"
              >
                Tech Stack
              </h3>

              {/* Updated tech stack icons container with safe-area */}
              <div
                className="flex flex-wrap gap-2 p-1 
                safe-left:pl-[env(safe-area-inset-left)]
                safe-right:pr-[env(safe-area-inset-right)]
                max-sm:safe-bottom:pb-[env(safe-area-inset-bottom)]
                group-hover:translate-x-0 transition-transform duration-300
                max-sm:justify-center max-sm:gap-3 max-sm:mt-2"
              >
                {/* Individual icon wrappers with safe touch targets */}
                <div
                  className="p-2 hover:scale-110 transition-transform duration-200 
                  max-sm:p-3 max-sm:text-2xl cursor-pointer"
                >
                  {props.html5}
                </div>
                <div
                  className="p-2 hover:scale-110 transition-transform duration-200 
                  max-sm:p-3 max-sm:text-2xl cursor-pointer"
                >
                  {props.css3}
                </div>
                <div
                  className="p-2 hover:scale-110 transition-transform duration-200 
                  max-sm:p-3 max-sm:text-2xl cursor-pointer"
                >
                  {props.javascript}
                </div>
                <div
                  className="p-2 hover:scale-110 transition-transform duration-200 
                  max-sm:p-3 max-sm:text-2xl cursor-pointer"
                >
                  {props.tailwindcss}
                </div>
                <div
                  className="p-2 hover:scale-110 transition-transform duration-200 
                  max-sm:p-3 max-sm:text-2xl cursor-pointer"
                >
                  {props.react}
                </div>
                <div
                  className="p-2 hover:scale-110 transition-transform duration-200 
                  max-sm:p-3 max-sm:text-2xl cursor-pointer"
                >
                  {props.vite}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-slate-500 mt-5 text-lg px-5 
          group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300"
        >
          {props.para}
        </p>

        <div className="flex gap-2 text-[#00040f] dark:text-slate-200 p-2 pl-5 mt-5 text-3xl">
          <a
            href={props.github_link}
            className="hover:scale-125 transition-transform duration-300 
            hover:text-blue-600 dark:hover:text-cyan-400"
          >
            <SiGithub />
          </a>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-transform duration-300
            hover:text-blue-600 dark:hover:text-cyan-400"
          >
            <SlLink />
          </a>
        </div>
      </div>
    </>
  );
};

Project_prop.propTypes = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github_link: PropTypes.string.isRequired,
  html5: PropTypes.node,
  css3: PropTypes.node,
  javascript: PropTypes.node,
  tailwindcss: PropTypes.node,
  react: PropTypes.node,
  vite: PropTypes.node,
};

export default Project_prop;

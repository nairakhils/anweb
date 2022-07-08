import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Python </span>
          &nbsp;for analyzing spectra, data analysis, package development, etc.
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Machine Learning & Deep Learning </span>
          &nbsp;for radio quasar morphology classification, predicitive analysis, etc.
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">NLP </span>
          &nbsp;for text analysis using Machine Learning
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Other: </span>
          &nbsp;C++, Javascript, C, SQL, HTML, CSS, MongoDB, Latex, Bash
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Softwares: </span>
          &nbsp;IRAF, SAO DS9, Astrometrica, Topcat, COMSOL, FIMMWAVE, OriginLab, LabView
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">Aladin</span>,{" "}
        <span className="text-white">API Clients </span>,{" "}
        <span className="text-white">Cadence Blockchain Language </span>{" "}
      </p>
    </div>
  );
};

export default Skills;

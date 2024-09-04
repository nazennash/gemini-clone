import React from "react";
import { BiHistory, BiMicrophone, BiUpload, BiUserCircle, BiVoicemail } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";

function Main() {
  return (
    <div className="p-5 bg-[#1e1f20] h-screen w-full opacity-[0.9] text-white">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="text-2xl flex items-center">
          <span>Gemini</span>
          <RiArrowDropDownFill size={30} color="white" />
        </div>
        <div className="flex items-center gap-3 justify-end">
          <BiHistory size={30} color="white" />
          <BiUserCircle size={30} color="white" />
        </div>
      </div>

      {/* Body */}
      <div className="mt-32 container mx-auto">
        <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#12c2e9] to-[#c471ed]">Hello, Nash</h1>
        <h1 className="text-5xl mt-3 opacity-[0.5]">How can I help you today?</h1>
      </div>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-4 gap-5 mx-auto container">
        <div className="p-5 h-56 rounded-lg shadow-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="p-5 h-56 rounded-lg shadow-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="p-5 h-56 rounded-lg shadow-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="p-5 h-56 rounded-lg shadow-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>

      {/* prompt */}

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-3/4">
      <form action="" method="post" className="relative flex items-center">
        <input
          type="text"
          name="prompt"
          id="prompt"
          className="w-full p-4 pr-12 rounded-3xl shadow-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
          placeholder="Type your message..."
        />
        <button type="button" className="absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
          <IoImageOutline size={20} />
        </button>
        <button type="button" className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
          <BiMicrophone size={20} />
        </button>
        <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
          <BsSend size={20} />
        </button>
      </form>
    </div>
    </div>
  );
}

export default Main;

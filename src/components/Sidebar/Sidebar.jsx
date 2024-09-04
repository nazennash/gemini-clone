import React, { useState } from "react";
import { BiHelpCircle, BiMenu, BiMessage, BiPlus } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

function Sidebar() {

    const [extended, setExtended] = useState(true)

    const toggleSidebar = () => {
        setExtended(!extended);
      };

  return (
    <>
      <div className={`bg-[#1e1f20] h-screen ${extended ? 'w-1/4' : 'w-1/12'} text-white p-5 hidden lg:block`}>
        {/* top */}
        <div>
          <BiMenu size={30} color="white" onClick={toggleSidebar} />
          <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#1e1f25] py-2 w-3/4 mb-5">
            <BiPlus />
            {extended ? <span>Show</span> : null}
          </div>
          {extended ? 
          <div>
            <div className="mb-3">Recent</div>
            <div className="flex items-center gap-4">
              <BiMessage />
              
              <span>Chat 1</span>
            </div>
          </div>
          : null}
        </div>
        

        {/* bottom */}
        <div className="absolute bottom-0 mb-6">

          <div className="flex items-center gap-4 mb-2">
            <BiHelpCircle size={20} />
            {extended ? <span>Help</span> : null}
            
          </div>

          <div className="flex items-center gap-4 mb-2">
            <BsActivity size={20} />
            {extended ? <span>Activity</span> : null}
            
          </div>

          <div className="flex items-center gap-4 mb-2">
            <CiSettings size={20} />
            {extended ? <span>Settings</span> : null}
            
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;

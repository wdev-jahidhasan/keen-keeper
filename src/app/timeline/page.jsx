"use client";
import { useActivity } from "@/context/ActivityContext";
import { MdOutlineWifiCalling3, MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { useState } from "react";

export default function TimelinePage() {

  // codes for filter
    const [filterType, setFilterType] = useState("");
  const { logs } = useActivity();

  const filteredLogs = filterType ? logs.filter(log => log.type === filterType) 
  : logs;

  const getIcon = (type) => {
    if (type === "Audio Call") {
      return <MdOutlineWifiCalling3 />;
    } else if (type === "Text") {
      return <MdOutlineTextsms />;
    } else if (type === "Video Call") {
      return <IoVideocamOutline />;
    } else {
      return null;
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Timeline</h1>

        {/* dropdown */}
        <div className="dropdown dropdown-bottom my-4">
          <div tabIndex={0} role="button" className="btn m-1">Filter Timeline ⌵</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => setFilterType("Text")}><a>Text</a></li>
            <li onClick={() => setFilterType("Audio Call")}><a>Audio Call</a></li>
            <li onClick={() => setFilterType("Video Call")}><a>Video Call</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          {filteredLogs.length === 0 ? (
            <div className="bg-red-50 p-10 shadow-sm rounded-lg text-center text-gray-500 border-gray-300 text-3xl">
              No Activity found!
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div
                key={log.id}
                className="bg-white p-5 shadow-sm rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{getIcon(log.type)}</div>
                  <div>
                    <p>
                      <span className="font-bold text-green-700">{log.type}</span> with <span>{log.name}</span>
                    </p>
                    <p className="text-sm text-gray-400">{log.time}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
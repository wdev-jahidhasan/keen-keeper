"use client";
import { useActivity } from "@/context/ActivityContext";
import { MdOutlineWifiCalling3, MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

export default function TimelinePage() {
  const { logs } = useActivity();
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

        <div className="space-y-4">
          {logs.length === 0 ? (
            <div className="bg-red-50 p-10 shadow-sm rounded-lg text-center text-gray-500 border-gray-300 text-3xl">
              No activity found!
            </div>
          ) : (
            logs.map((log) => (
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
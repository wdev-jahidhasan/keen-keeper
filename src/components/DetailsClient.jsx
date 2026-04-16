"use client";
import Image from "next/image";
import { useActivity } from "@/context/ActivityContext";
import { MdOutlineSnooze, MdOutlineWifiCalling3, MdOutlineTextsms } from "react-icons/md";
import { IoIosArchive } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function DetailsClient({ contact }) {
  const { addLog } = useActivity();
  const handleAction = (type) => {
    addLog(contact.name, type);
    toast.success(`New ${type} with ${contact.name}`);
  };

    return (
    <div className="bg-[#F8FAFC]">
      <div className="w-full md:w-[90%] lg:w-[70%] mx-auto py-10 px-2 grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10">

        {/* left side */}
        <div>
            <div className="shadow-sm py-3 px-2 text-center bg-white rounded-lg">
            <Image src={contact.picture} 
            width={80} height={80} 
            alt={contact.name} className="rounded-full mx-auto" />
             <h1 className="text-xl font-bold mt-2">{contact.name}</h1>
            <span className={`my-3 inline-block px-3 py-1 rounded-xl text-white text-sm ${contact.status === "overdue" ? "bg-red-500" : contact.status === "almost due" ? "bg-yellow-500" : "bg-green-700"}`}>
              {contact.status}</span>
               <div className="flex justify-center gap-2">{contact.tags.map((tag, index) => (
                <span key={index} className="badge bg-green-200 rounded-xl px-2">{tag}</span>
              ))}
             </div>
            <div className="mt-3 text-gray-500">
              <p>{contact.bio}</p>
              <p className="my-2 font-semibold">Email: {contact.email}</p>
            </div>
          </div>
          <div className="flex flex-col my-3 space-y-3 text-center text-gray-700">
             <span className="flex items-center justify-center gap-3 shadow-sm bg-white py-3 font-semibold rounded-lg"><MdOutlineSnooze /> Snooze for 2 weeks</span>
            <span className="flex items-center justify-center gap-3 shadow-sm bg-white py-3 font-semibold rounded-lg"><IoIosArchive /> Archive</span>
            <span className="flex items-center justify-center gap-3 shadow-sm bg-white py-3 text-red-500 font-semibold rounded-lg"><RiDeleteBin6Line /> Delete</span>
          </div>
        </div>

        {/* right side */}
        
        <div>
          {/* upper */}
            <div className="grid grid-cols-3 gap-3 mb-5">
            <div className='text-center shadow-sm py-5 bg-white rounded-lg'>
              <h3 className='text-xl font-semibold text-green-800'>{contact.days_since_contact}</h3>
              <p className='text-lg text-gray-500'>Days Since Contact</p>
            </div>
            <div className='text-center shadow-sm py-5 bg-white rounded-lg'>
              <h3 className='text-xl font-semibold text-green-800'>{contact.goal}</h3>
              <p className='text-lg text-gray-500'>Goal (Days)</p>
            </div>
            <div className='text-center shadow-sm py-5 bg-white rounded-lg'>
              <h3 className='text-xl font-semibold text-green-800'>{contact.next_due_date}</h3>
              <p className='text-lg text-gray-500'>Next Due Date</p>
            </div>
          </div>

          {/* mid */}
            <div className="flex justify-between bg-white shadow-sm my-7 py-4 px-5 rounded-lg">
            <div>
              <h3 className="text-green-800 font-semibold text-lg ">Relationship Goal</h3>
              <p className="my-2"><span className="text-gray-500">Contact every</span> <span className="font-semibold">{contact.goal} Days</span></p>
            </div>
            <button className="btn btn-sm">Edit</button>
          </div>

          {/* lower */}

            <div className="bg-white shadow-sm my-5 py-4 px-5 rounded-lg">
            <p className="text-green-800 font-semibold text-lg">Quick Check-In</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
            
              <div onClick={() => handleAction("Audio Call")} className="bg-gray-50 shadow-sm rounded-lg flex flex-col items-center justify-center font-semibold cursor-pointer py-4 hover:bg-blue-50 transition">
                <MdOutlineWifiCalling3 className="text-2xl text-gray-600" />
                <p className="text-gray-600">Call</p>
              </div>
                <div onClick={() => handleAction("Text")} className="bg-gray-50 shadow-sm rounded-lg flex flex-col items-center justify-center font-semibold cursor-pointer py-4 hover:bg-green-50 transition">
                <MdOutlineTextsms className="text-2xl text-gray-600" />
                <p className="text-gray-600">Text</p>
              </div>
              <div onClick={() => handleAction("Video Call")} className="bg-gray-50 shadow-sm rounded-lg flex flex-col items-center justify-center font-semibold cursor-pointer py-4 hover:bg-purple-50 transition">
                <IoVideocamOutline className="text-2xl text-gray-600" />
                <p className="text-gray-600">Video</p>
              </div>
            </div>
            </div>
          </div>
            <ToastContainer position="top-center" autoClose={3000}hideProgressBar={true}/>
      </div>
    </div>
  );
}
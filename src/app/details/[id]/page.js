import contacts from "../../../../data/contacts.json"
import Image from "next/image";
import { MdOutlineSnooze } from "react-icons/md";
import { IoIosArchive } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

export default async function DetailsPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const contact = contacts.find(c => String(c.id) === id);

  if (!contact) {
    return <h2 className="text-center mt-10 text-xl">Not found</h2>;
  }

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-full md:w-[90%] lg:w-[70%] mx-auto py-10 px-2 grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10">

        {/* left side */}
        <div>
          <div className="shadow-sm py-3 px-2 text-center bg-white rounded-lg">
            <Image
              src={contact.picture}
              width={80}
              height={80}
              alt={contact.name}
              className="rounded-full mx-auto"
            />

            <h1 className="text-xl font-bold mt-2">{contact.name}</h1>

            <span
              className={`my-3
          ${contact.status === "overdue" ? "badge bg-red-500 text-white rounded-xl" : ""}
          ${contact.status === "almost due" ? "badge bg-yellow-500 text-white rounded-xl" : ""}
          ${contact.status === "on-track" ? "badge bg-green-700 text-white rounded-xl" : ""}
        `}
            >
              {contact.status}
            </span>

            <div className="flex justify-center gap-2">
              {
                contact.tags.map((tag, index) => (
                  <span key={index} className="badge bg-green-200 rounded-xl">
                    {tag}
                  </span>
                ))
              }
            </div>

            <div className="mt-3 text-gray-500">
              <p>About: {contact.bio}</p>
              <p className="my-2 font-semibold">Email: {contact.email}</p>
            </div>
          </div>

          <div className="flex flex-col my-3 space-y-3 text-center">
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
              <h1 className='text-lg text-gray-500'>Days Science Contact</h1>
            </div>
            <div className='text-center shadow-sm py-5 bg-white rounded-lg'>
              <h3 className='text-xl font-semibold text-green-800'>30</h3>
              <h1 className='text-lg text-gray-500'>Goal (Days)</h1>
            </div>
            <div className='text-center shadow-sm py-5 bg-white rounded-lg'>
              <h3 className='text-xl font-semibold text-green-800'>Dynamic Date </h3>
              <h1 className='text-lg text-gray-500'>Next Due</h1>
            </div>
          </div>

          {/* mid */}
          <div className="flex justify-between bg-white shadow-sm my-7 py-4 px-5 rounded-lg">
            <div>
              <h3 className="text-green-800 font-semibold text-lg ">Relationship Goal</h3>
              <p className="my-2"><span className="text-gray-500">Contact every</span> <span className="font-semibold">30 Days</span></p>
            </div>
            <button className="btn">Edit</button>
          </div>

          {/* lower */}
          <div className="bg-white shadow-sm my-5 py-4 px-5 rounded-lg">
            <p className="text-green-800 font-semibold text-lg">Quick Check-In</p>

            <div className="grid grid-cols-3 gap-4 my-5">
              <div className="bg-gray-50 shadow-sm p-4 rounded-lg flex flex-col items-center justify-center font-semibold">
                <MdOutlineWifiCalling3 className="text-2xl text-gray-600 mt-3" />
                <p className="text-xl text-gray-600 py-2">Call</p>
              </div>
              <div className="bg-gray-50 shadow-sm p-4 rounded-lg flex flex-col items-center justify-center font-semibold">
                <MdOutlineTextsms className="text-2xl text-gray-600 mt-3" />
                <p className="text-xl text-gray-600 py-2">Text</p>
              </div>
              <div className="bg-gray-50 shadow-sm p-4 rounded-lg flex flex-col items-center justify-center font-semibold">
                <IoVideocamOutline className="text-2xl text-gray-600 mt-3" />
                <p className="text-xl text-gray-600 py-2">Video</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
import contacts from "../../../../data/contacts.json"
import Image from "next/image";


export default async function DetailsPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const contact = contacts.find(c => String(c.id) === id);

  if (!contact) {
    return <h2 className="text-center mt-10 text-xl">Not found</h2>;
  }

  return (
    <div className="w-full md:w-[90%] mx-auto min-h-screen py-10 px-5 grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10">

      {/* left side */}
      <div>
        <div className="shadow-sm py-5 px-2 text-center">
          <Image
            src={contact.picture}
            width={120}
            height={120}
            alt={contact.name}
            className="rounded-full mx-auto"
          />

          <h1 className="text-3xl font-bold mt-4">{contact.name}</h1>

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

          <div className="mt-5 text-gray-500">
            <p>About: {contact.bio}</p>
            <p className="my-4 font-semibold">Email: {contact.email}</p>
          </div>
        </div>

        <div className="flex flex-col my-5 space-y-6 text-center">
          <span className="shadow-sm">Snooze</span>
          <span className="shadow-sm">Archive</span>
          <span className="shadow-sm">Delete</span>
        </div>
      </div>

      {/* right side */}

      <div className="bg-red-300 h-180">

      </div>

    </div>
  );
}
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
    <div className="max-w-3xl mx-auto py-10 text-center">

      <Image
        src={contact.picture}
        width={120}
        height={120}
        alt={contact.name}
        className="rounded-full mx-auto"
      />

      <h1 className="text-3xl font-bold mt-4">{contact.name}</h1>

      <p className="mt-2 text-gray-600">
        Last contacted: {contact.days_since_contact} days ago
      </p>

      <div className="flex justify-center gap-2 my-4">
        {
          contact.tags.map((tag, index) => (
            <span key={index} className="badge bg-green-200 rounded-xl">
              {tag}
            </span>
          ))
        }
      </div>

      <span 
        className={`
          ${contact.status === "overdue" ? "badge bg-red-500 text-white rounded-xl" : ""}
          ${contact.status === "almost due" ? "badge bg-yellow-500 text-white rounded-xl" : ""}
          ${contact.status === "on-track" ? "badge bg-green-700 text-white rounded-xl" : ""}
        `}
      >
        {contact.status}
      </span>

    </div>
  );
}
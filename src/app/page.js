import Link from "next/link";
import Image from "next/image";
import Count from "@/components/Count";
import Banner from "@/components/Banner";

const loadContacts = async function () {
  const res = await fetch("http://localhost:3000/contacts.json", {
    cache: 'no-store'
  });
  const data = await res.json();
  return data;
}
export default async function Home() {
  const contacts = await loadContacts();

  return (
    <div className="bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto py-5 mb-20">
      <Banner></Banner>
      <Count></Count>
      <h1 className='text-2xl font-bold my-6 text-center'>Your Friends</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {
          contacts.map(contact => (
            <Link key={contact.id} href={`/details/${contact.id}`}>
              <div className="card bg-base-100 w-72 md:w-84 lg:w-56 shadow-sm cursor-pointer">
                <figure>
                  <Image width={80} height={80} src={contact.picture} alt={contact.name} className="rounded-full mt-4">
                  </Image></figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{contact.name}</h2>
                  <p>{contact.days_since_contact} days ago</p>
                  <div className="flex gap-2 justify-center my-3">
                    {
                      contact.tags.map((tag, index) => (
                        <span key={index} className="badge bg-green-200 rounded-xl">{tag}</span>
                      ))}
                  </div>
                <span
                    className={`
                ${contact.status === "overdue" ? "badge bg-red-500 text-white rounded-xl" : ""}
                ${contact.status === "almost due" ? "badge bg-yellow-500 text-white rounded-xl" : ""}
                ${contact.status === "on-track" ? "badge bg-green-700 text-white rounded-xl" : ""}
                  `}>
                    {contact.status}
                  </span>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
    </div>
  );
}

import DetailsClient from "@/components/DetailsClient";

export default async function DetailsPage({ params }) {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/contacts.json", {
    cache: 'no-store'
  });
  const contacts = await res.json();
  const contact = contacts.find((c) => String(c.id) === String(id));
  if (!contact) return <h2 className="text-center mt-10">Not found</h2>;
  return <DetailsClient contact={contact} />;
}
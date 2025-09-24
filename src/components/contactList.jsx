// components/contactList.jsx
import React, { useEffect } from "react";
import Item from "./item";
import useStore from "../store/ContactStore";

const List = () => {
  const contacts = useStore((state) => state.contacts);
  const subscribeToContacts = useStore((state) => state.subscribeToContacts);

  useEffect(() => {
    // Subscribe to real-time updates when component mounts
    const unsubscribe = subscribeToContacts();

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, [subscribeToContacts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200 flex justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-6 transition-all duration-300">
        <h1 className="text-purple-600 text-3xl text-center font-semibold">
          👥 Contact Details
        </h1>
        {contacts.map((contact) => (
          <Item key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default List;

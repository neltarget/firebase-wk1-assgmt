import React, { useState } from "react";
import useStore from "../store/ContactStore";

const Form = () => {
  const addContact = useStore((state) => state.addContact);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && phone && email) {
      let newContact = {
        name,
        phone,
        email,
      };
      addContact(newContact);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div className="h-148 bg-gradient-to-br from-white via-slate-50 to-slate-200 flex justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-4 transition-all duration-300"
      >
        <h2 className="text-3xl font-semibold text-purple-700 text-center">
          Create Contact
        </h2>

        {/* name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xl font-medium text-green-900"
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        {/* phone number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xl font-medium text-green-900"
          >
            Phone Number
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="tel"
            id="phone"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xl font-medium text-green-900"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        {/* submit button */}
        <input
          type="submit"
          value={"Add Contact"}
          className="w-1/2 block mx-auto bg-purple-600 text-white font-medium my-2 py-3 rounded-xl hover:bg-purple-700 shadow-md transition"
        />
      </form>
    </div>
  );
};

export default Form;

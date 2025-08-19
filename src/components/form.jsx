import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useStore from "../store/ContactStore";
const Form = () => {
  //import store
  const addContact = useStore(state=>state.addContact)
  //useState and handling for name input
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //useState and handling for email input
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //useState and handling for phone number input
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  //useState and handling for address input
  const [address, setAddress] = useState("");
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  // handling form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && phoneNumber && address) {
      let newContact = {
        name,
        email,
        id: uuid(),
        phoneNumber,
        address,
      };
      addContact(newContact);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
    }
  };
  return (
    <div className="h-148 bg-gradient-to-br from-white via-slate-50 to-slate-200 flex justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-4 transition-all duration-300"
      >
        <h2 className="text-3xl font-semibold text-purple-700 text-center">
          📇Register Contact
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
            onChange={handleNameChange}
            value={name}
            name="name"
            type="text"
            id="name"
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
            onChange={handleEmailChange}
            value={email}
            name="email"
            type="email"
            id="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        {/* phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-xl font-medium text-green-900"
          >
            Phone Number
          </label>
          <input
            onChange={handlePhoneNumberChange}
            value={phoneNumber}
            name="phoneNumber"
            type="tel"
            id="phoneNumber"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        {/* address */}
        <div>
          <label
            htmlFor="address"
            className="block text-xl font-medium text-green-900"
          >
            Address
          </label>
          <input
            onChange={handleAddressChange}
            value={address}
            name="address"
            type="text"
            id="address"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        {/* submit button */}
        <input
          type="submit"
          value={"Add Contact"}
          className="w-1/2 block mx-auto bg-purple-600 text-white font-medium  my-2 py-3 rounded-xl hover:bg-purple-700 shadow-md transition"
        />
      </form>
    </div>
  );
};
export default Form;

import React from "react";
import { useState } from "react";
export default function Form() {
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

  //useState and handling for password input
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // handling form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl space-y-6 transition-all duration-300"
      >
        <h2 className="text-3xl font-semibold text-slate-800 text-center">
          📝Sign Up
        </h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-600"
          >
            Name
          </label>
          <input
            onChange={handleNameChange}
            name="name"
            type="text"
            id="name"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-600"
          >
            Email
          </label>
          <input
            onChange={handleEmailChange}
            name="email"
            type="email"
            id="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-600"
          >
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            value={password}
            name="password"
            type="password"
            id="password"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none"
          />
        </div>
        <input
          type="submit"
          value={"Get Started"}
          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 shadow-md transition"
        />
      </form>
    </div>
  );
}

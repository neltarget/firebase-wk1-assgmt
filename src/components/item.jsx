import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import useStore from "../store/ContactStore";

const Item = ({ contact }) => {
  const editContact = useStore((state) => state.editContact);
  const deleteContact = useStore((state) => state.deleteContact);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhoneNumber(contact.phoneNumber);
    setAddress(contact.address);
  }, [contact]);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePhoneNumber = (event) => setPhoneNumber(event.target.value);
  const handleAddress = (event) => setAddress(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    editContact(contact.id, {
      name,
      email,
      phoneNumber,
      address,
    });
    setOpen(false);
  };

  const handleDelete = () => deleteContact(contact.id);

  return (
    <div className="flex justify-between rounded-lg shadow-grey-400 shadow-md my-1 py-2 px-4">
      <div className="">
        <h1 className="text-green-900 font-bold text-xl">🤖{contact.name}</h1>
        <h3 className="text-lg text-green-400">📧{contact.email}</h3>
        <h3 className="text-lg text-green-400">📞{contact.phoneNumber}</h3>
        <h3 className="text-lg text-green-400">🏙️{contact.address}</h3>
      </div>

      <div className="my-auto">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 text-white text-xl px-1 rounded shadow-md shadow-stone-500 mx-2"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white text-xl px-1 rounded shadow-md shadow-stone-500 mx-2"
        >
          Delete
        </button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="size-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Edit Contact
                    </DialogTitle>
                    <div className="mt-4">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-600">
                            Name
                          </label>
                          <input
                            onChange={handleName}
                            value={name}
                            name="name"
                            type="text"
                            required
                            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-600">
                            Email
                          </label>
                          <input
                            onChange={handleEmail}
                            value={email}
                            name="email"
                            type="email"
                            required
                            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-600">
                            Phone Number
                          </label>
                          <input
                            onChange={handlePhoneNumber}
                            value={phoneNumber}
                            name="phoneNumber"
                            type="tel"
                            required
                            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-600">
                            Address
                          </label>
                          <input
                            onChange={handleAddress}
                            value={address}
                            name="address"
                            type="text"
                            required
                            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 shadow-md transition"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Item;

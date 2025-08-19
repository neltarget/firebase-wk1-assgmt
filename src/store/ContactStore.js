import { create } from "zustand";
import { v4 as uuid } from "uuid";

const useStore = create((set) => ({
  //initialise contacts
  contacts: [
    {
      name: "Jarmie",
      email: "jarme@email.com",
      id: uuid(),
      phoneNumber: "024002233",
      address: "La Beach",
    },
    {
      name: "Omega",
      email: "omega@email.com",
      id: uuid(),
      phoneNumber: "024006688",
      address: "Raffia St",
    },
  ],

  //add contact
  addContact: (newContact) =>
    set((state) => ({
      contacts: [...state.contacts, { ...newContact, id: uuid() }],
    })),

  //edit contact
  editContact: (contactId, newDetails) =>
    set((state) => ({
      contacts: state.contacts.map((contact) =>
        contact.id === contactId ? { ...contact, ...newDetails } : contact
      ),
    })),

  //delete contact
  deleteContact: (contactId) =>
    set((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== contactId),
    })),
}));

export default useStore;

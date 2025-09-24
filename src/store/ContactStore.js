// store/ContactStore.js
import { create } from "zustand";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const useStore = create((set, get) => ({
  contacts: [],

  // Listen to real-time updates from Firestore
  subscribeToContacts: () => {
    const unsubscribe = onSnapshot(
      collection(db, "contacts"),
      (snapshot) => {
        const contactsData = [];
        snapshot.forEach((document) => {
          contactsData.push({ id: document.id, ...document.data() });
        });
        set({ contacts: contactsData });
      },
      (error) => {
        console.error("Error fetching contacts: ", error);
      }
    );
    return unsubscribe;
  },

  // Add a new contact to Firestore
  addContact: async (contact) => {
    try {
      await addDoc(collection(db, "contacts"), contact);
    } catch (error) {
      console.error("Error adding contact: ", error);
    }
  },

  // Edit an existing contact in Firestore
  editContact: async (id, updatedContact) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, updatedContact);
    } catch (error) {
      console.error("Error updating contact: ", error);
    }
  },

  // Delete a contact from Firestore
  deleteContact: async (id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await deleteDoc(contactRef);
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  },
}));

export default useStore;

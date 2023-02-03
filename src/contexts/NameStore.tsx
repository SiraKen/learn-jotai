import { atom, createStore } from "jotai";

const store = createStore();

const nameAtom = atom("John Doe");

export { store, nameAtom };

import { createContext } from "react";

// Définition du type des données partagées
export interface MyContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Création du contexte avec des valeurs par défaut temporaires
export const MyContext = createContext<MyContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

import UserContext from "data/context/UserContext";
import { useContext } from "react";

export default function useUser() {
  const context = useContext(UserContext);
  return context;
}

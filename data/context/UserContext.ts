import User from "models/User";
import { createContext } from "react";

interface UserContextProps {
  user: User | null;
  setUserByToken?: (token: string) => void;
}

const UserContext = createContext<UserContextProps>({ user: null });

export default UserContext;

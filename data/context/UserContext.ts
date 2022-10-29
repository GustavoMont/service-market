import Token from "models/Token";
import User from "models/User";
import { createContext } from "react";

interface UserContextProps {
  user: User | null;
  login: (data: Token) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  login: (data) => {},
});

export default UserContext;

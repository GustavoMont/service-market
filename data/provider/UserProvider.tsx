import UserContext from "data/context/UserContext";
import User from "models/User";
import React, { useState } from "react";
import { decodeJwt, JWTPayload } from "jose";

interface UserJwt extends JWTPayload, User {}

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  function setUserByToken(token: string) {
    const user = decodeJwt(token);
    setUser({ ...(user as unknown as User) });
  }
  return (
    <UserContext.Provider value={{ user, setUserByToken }}>
      {children}
    </UserContext.Provider>
  );
}

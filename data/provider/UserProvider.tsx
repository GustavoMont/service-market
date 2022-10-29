import UserContext from "data/context/UserContext";
import User from "models/User";
import React, { useState } from "react";
import { decodeJwt, JWTPayload } from "jose";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

interface UserJwt extends JWTPayload, User {}

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  function login(data: { access: string }) {
    const user = decodeJwt(data.access);
    setCookie(null, "access", data.access);
    setUser({ ...(user as unknown as User) });
    router.push("/");
  }

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}

import Cookies from "models/cookies";
import Token from "models/token";
import { parseCookies } from "nookies";

export default function getToken(): Token | null {
  const jsonToken = parseCookies<Cookies>(null);
  if (!jsonToken) {
    return null;
  }
  return jsonToken.access;
}

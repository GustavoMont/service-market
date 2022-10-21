import Cookies from "models/Cookies";
import Token from "models/Token";
import { parseCookies } from "nookies";

export default function getToken(): Token | null {
  const jsonToken = parseCookies<Cookies>(null);
  if (!jsonToken) {
    return null;
  }
  return jsonToken.access;
}

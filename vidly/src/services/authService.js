import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint =  "/auth";
const tokenKey = "token";

http.setJwt(getJwt())

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (err) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const obj = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
};

export default obj;

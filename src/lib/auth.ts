const AUTH_KEY = "jivanjor-authenticated";
const USER_EMAIL_KEY = "jivanjor-user-email";

export function isBrowser() {
  return typeof window !== "undefined";
}

export function isAuthenticated() {
  return isBrowser() && localStorage.getItem(AUTH_KEY) === "true";
}

export function signIn(email: string) {
  if (!isBrowser()) return false;
  localStorage.setItem(AUTH_KEY, "true");
  localStorage.setItem(USER_EMAIL_KEY, email);
  return true;
}

export function signOut() {
  if (!isBrowser()) return;
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(USER_EMAIL_KEY);
}

export function getUserEmail() {
  return isBrowser() ? (localStorage.getItem(USER_EMAIL_KEY) ?? "") : "";
}

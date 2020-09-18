import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, setUser, user, token, setToken }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

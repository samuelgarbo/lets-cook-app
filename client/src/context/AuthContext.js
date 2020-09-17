import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, setUser, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState({
    email: "samuel.garbo@gmail.com",
    firstName: "sam",
    lastName: "gar",
    _id: "5f573a6e4d55770eb4da05d2",
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, setUser, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

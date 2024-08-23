import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [Loading, setLoading] = useState(true); // <-- Add a loading state

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    setLoading(false); // Mark loading as complete after setting the token
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, Loading }}>
      {children}
    </AuthContext.Provider>
  );
};
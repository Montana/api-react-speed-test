import React, { createContext, useContext, useState } from "react";

export const FooContext = createContext();
export const FooProvider = ({ children }) => {
  const { foo, setFoo } = usState();
  return (
    <FooContext.Provider value={{ foo, setFoo }}>
      {children}
    </FooContext.Provider>
  );
};

export const useFooValue = () => useContext(FooContext);

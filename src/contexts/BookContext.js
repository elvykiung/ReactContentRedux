import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books] = useState([
    { title: "name of the wind", id: 1 },
    { title: "The way of King", id: 2 },
    { title: "The final empire", id: 3 },
    { title: "The Hero of Ages", id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

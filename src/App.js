import React from "react";
import Navbar from "./componennts/Navbar";
import BookList from "./componennts/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./componennts/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

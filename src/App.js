import React from "react";
import Navbar from "./componennts/Navbar";
import BookList from "./componennts/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./componennts/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar></Navbar>
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

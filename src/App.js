import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Normalize } from "@smooth-ui/core-sc";
import Cards from "./components/Cards";
import { theme } from "@smooth-ui/core-sc";
import { ThemeProvider } from "styled-components";
import "./components/styling.css";
function App() {
  const theme = {
    colors: {
      primary: "purple",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Normalize />
        <h3>
          Put in your first and last name and click submit and you will be
          provided with a personalized random joke!
        </h3>
        <Cards />
      </div>
    </ThemeProvider>
  );
}

export default App;

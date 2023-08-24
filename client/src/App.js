import React, { useState } from "react";
import InputTodos from "./components/InputTodos";
import ListTodos from "./components/ListTodos";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Store } from "./utils/store";
import { changeTheme } from "./utils/themeProvider";
import ThemeButton from "./styles/Buttons/ThemeButton";
import MainContainer from "./styles/Box/MainContainer";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );
  const Theme = changeTheme(mode);

  function toggleTheme() {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <>
      <Store.Provider>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <MainContainer>
            <ThemeButton onClick={toggleTheme} mode={mode} />
            <InputTodos />
            <ListTodos />
          </MainContainer>
        </ThemeProvider>
      </Store.Provider>
    </>
  );
}

export default App;

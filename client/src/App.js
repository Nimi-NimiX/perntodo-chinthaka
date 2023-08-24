import React, { useState } from "react";
import InputTodos from "./components/InputTodos";
import ListTodos from "./components/ListTodos";
import { Box, Button, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Store } from "./utils/store";
import { changeTheme } from "./utils/themeProvider";

function App() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "light");
  const Theme = changeTheme(currentTheme);

  function toggleTheme() {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <>
      <Store.Provider>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Box
            sx={{
              bgcolor: "background.paper",
              height: "100vh",
              width: "100vw",
              padding: "5em",
              margin: "0px",
            }}
          >
            <Button
              onClick={toggleTheme}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                border: "none",
                backgroundColor: "transparent"
              }}
            >
              {Theme.palette.mode === "light" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon color="info" />
              )}
            </Button>
            <InputTodos />
            <ListTodos />
          </Box>
        </ThemeProvider>
      </Store.Provider>
    </>
  );
}

export default App;
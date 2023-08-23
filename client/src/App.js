import React, { useEffect, useState } from "react";
import InputTodos from "./components/InputTodos";
import ListTodos from "./components/ListTodos";
import { Box, Button, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontFamily: "Poppins",
    },
  });

  const changeTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
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
            onClick={changeTheme}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              border: "none",
              backgroundColor: "transparent"
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon color="info" />
            )}
          </Button>
          <InputTodos />
          <ListTodos />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

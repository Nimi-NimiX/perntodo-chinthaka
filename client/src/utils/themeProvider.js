import { createTheme } from "@mui/material/styles";

export const changeTheme = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
        },
        typography: {
            fontFamily: "Poppins",
        },
    });
};

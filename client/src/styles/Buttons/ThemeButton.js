import { Button } from "@mui/base";
import styled from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const StyledButton = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  background-color: transparent;
`;

const ThemeButton = ({ ...props }) => {
    const { mode } = props;

    return (
        <StyledButton {...props}>
            {mode === "light" ? (
                <DarkModeIcon sx={{ color: "black" }} />
            ) : (
                <LightModeIcon sx={{ color: "white" }} />
            )}
        </StyledButton>
    );
};

export default ThemeButton;

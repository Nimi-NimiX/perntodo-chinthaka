import styled from "@emotion/styled";
import { Alert, AlertTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledAlert = styled(Alert)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
`;

const WarnAlert = ({ children, setAlert }) => {
    return (
        <StyledAlert
            severity="error"
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setAlert(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
        >
            <AlertTitle>Error</AlertTitle>
            {children}
        </StyledAlert>
    );
};

export default WarnAlert;

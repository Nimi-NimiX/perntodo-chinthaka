import styled from 'styled-components';
import { Typography } from "@mui/material";

const H1 = styled(Typography)`
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-bottom: 1rem;
`;

const Header = ({ children }) => {
    return (
        <H1 variant="h3" fontWeight={600}>
            {children}
        </H1>
    );
};

export default Header;
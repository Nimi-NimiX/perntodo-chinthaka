import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    height: 100vh;
    width: 100vw;
    padding: 5em;
    margin: 0px;
`;

const MainContainer = ({ children, ...props }) => {
    return (
        <StyledBox {...props}>
            {children}
        </StyledBox>
    );
}

export default MainContainer;
import React from "react";
import styled from "styled-components";

import Navigation from "../Navigation";

const StyledLayout = styled.div.attrs({
    className: 'w-full h-screen bg-white'
})``;

const Layout = ({children}) => {
    return (
        <StyledLayout>
            <Navigation/>
            {children}
        </StyledLayout>        
    )
}

export default Layout;
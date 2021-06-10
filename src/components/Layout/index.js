import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div.attrs({
    className: 'w-full h-screen'
})``;

const Layout = ({children}) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>        
    )
}

export default Layout;
import styled from "styled-components";

export const ContentWrapper = styled.main`
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    flex-grow: 1;
`;

export const InnerContent = styled.div`
    height: 100%;
    max-width: ${({theme}) => theme.breakpoints.lg}px;
    margin: 0 auto;
    
    padding: 10px 20px;
    
    @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
        padding: 20px 40px;
    }
`;
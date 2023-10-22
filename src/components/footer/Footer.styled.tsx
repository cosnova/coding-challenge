import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const FooterContent = styled.footer`
    max-width: ${({theme}) => theme.breakpoints.lg}px;
    align-self: flex-end;
    margin: 0 auto;

    text-align: right;
    font-size: 0.8rem;
    color: ${({theme}) => theme.colors.white};
    padding: 10px 20px;
    
    @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
        padding: 20px 40px;
    }
`;
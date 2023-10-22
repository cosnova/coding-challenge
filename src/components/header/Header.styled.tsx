import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
`;

export const HeaderContent = styled.div`
    max-width: ${({theme}) => theme.breakpoints.lg}px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    padding: 10px 20px;
    
    @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
        padding: 20px 40px;
    }
`;

export const StyledLogo = styled.img`
    max-width: 100px;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}px) {
        max-width: 150px;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    gap: 20px;
`;

export const StyledNavLink = styled(Link)`
    color: ${({theme}) => theme.colors.primary};
    font-size: 1rem;

    &:hover {
        color: ${({theme}) => theme.colors.secondary};
    }

    &.active {
        font-weight: bold;
        color: ${({theme}) => theme.colors.secondary};
    }
`;
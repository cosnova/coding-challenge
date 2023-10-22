import styled from "styled-components";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hero = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: ${({theme}) => theme.breakpoints.md}px) {
        flex-direction: row;
    }
`;

export const HeroImage = styled.img`
    border-radius:  20px 0 0 0;
    overflow: hidden;
    max-width: 200px;
`;

export const HeroCaptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const HeroCaption = styled.h1``;

export const HeroCTA = styled(Button)`
    // Override MUI styles
    border-color: ${({theme}) => theme.colors.white} !important;
    color: ${({theme}) => theme.colors.white} !important;
`
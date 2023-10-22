import { FC } from "react";
import { ThemeProvider } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
}

const colors = {
    white: '#ffffff',
    primary: '#AC003E',
    secondary: '#B41A51',
}

const theme = {
    breakpoints,
    colors
}

type Props = {
    children?: React.ReactNode
};

const Theme: FC<Props> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
  
export default Theme;
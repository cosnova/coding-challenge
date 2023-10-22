import { routes } from "../../routes/router";
import { HeaderWrapper, HeaderContent, StyledLogo, StyledNav, StyledNavLink } from "./Header.styled";

const Header = () => {

    return (<HeaderWrapper>
        <HeaderContent>
            <StyledLogo src="/cosnova-logo.svg" alt="Cosnova Logo" />
            <StyledNav>
                {routes.map((route) => (
                    <StyledNavLink key={route.path} to={route.path || "/"}>
                        {route.title}
                    </StyledNavLink>))}
            </StyledNav>
        </HeaderContent>
    </HeaderWrapper>);
};

export default Header;

import { StyledLink, StyledWrap } from "./Navigation.styled";




export const Navigation = () => {

   
    return (
      <StyledWrap >
        <StyledLink  to="/">
        Home
        </StyledLink>
        <StyledLink  to="/catalogue">
        Catalogue
        </StyledLink>
        <StyledLink  to="/favorites">
        Favorites
        </StyledLink>

      </StyledWrap>
    );
  };
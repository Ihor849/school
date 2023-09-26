import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledWrap = styled.div`
    display: flex;
    align-items: center;
    
    gap: 20px;

    @media screen and (max-width: 767px) {
    display: none;
}
`
export const StyledLink = styled(NavLink)`
  height: 34px;
  width: 115px;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border:2px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color) ;
  transition: all 1s ease-in-out;
  font-weight: 600;
  transition: 0.3s ease;

  &.active {
    color: var(--white);
    background-color: var(--blue);
  
  }
`;
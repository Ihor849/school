import { RxCross2 } from 'react-icons/rx';
import { BurgerButton } from '../Button/Button';
import { MenuContent, MenuHeader, MenuWrapp } from './MobileMenu.styled';
import { StyledLink } from '../Navigation/Navigation.styled';


const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <MenuWrapp className={isOpen ? ['menu', 'active'].join(' ') : 'menu'}>
      <MenuHeader>
        <BurgerButton theme className="closeBtn" onClick={onClose}>
          <RxCross2 />
        </BurgerButton>
      </MenuHeader>
      <MenuContent>
        <StyledLink
          to="/"
          onClick={onClose}>
        Home
        </StyledLink>
        <StyledLink 
         to="/catalogue"
         onClick={onClose}>
        Catalogue
        </StyledLink>
        <StyledLink  
        to="/favorites"
        onClick={onClose}>
        Favorites
        </StyledLink>
        </MenuContent>
    </MenuWrapp>
  );
};

export default MobileMenu;

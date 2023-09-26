import { RxHamburgerMenu } from 'react-icons/rx';
import { BurgerButton } from "../Button/Button"
import { Navigation } from '../Navigation/Navigation';

import { Suspense, useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import { Outlet } from 'react-router-dom';
import { iconsLogo } from '../../images/icons';





export const SharedLayout = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return(
    <>
      <MainHeader className="main-header">
        <a href='#'>
          {iconsLogo}
        </a>
        <Navigation/>
        <BurgerButton
           className='mobile-menu'
           onClick={toggleMenu}
           >
           <RxHamburgerMenu />
          </BurgerButton>
      </MainHeader>
      <Suspense >
            <Outlet />
          </Suspense>
      
      <MainFooter>
        2023
      </MainFooter>
      <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
    </>
  )
}
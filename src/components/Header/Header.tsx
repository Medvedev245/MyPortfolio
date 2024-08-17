import React from 'react';
import {
  HeaderContainer,
  HeaderWrap,
  ListNav,
  LogoLink,
  LinkElement,
  // ListLeng,
  // ContainerLeng,
  NavBar,
} from './Header';

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <LogoLink to="/MyPortfolio">MyPortfolio</LogoLink>
        <NavBar>
          <ListNav>
            <li>
              <LinkElement href="#about" title="About me">
                Sum
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#education" title="Education">
                About
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#skills" title="Skills">
                Ski
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#experience" title="Experience">
                Exper
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#projects" title="Projects">
                Proj
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#contacts" title="Contacts">
                Con
              </LinkElement>
            </li>
          </ListNav>
        </NavBar>
        {/* <ContainerLeng>
          <ListLeng>
            <li>cz</li>
            <li>en</li>
            <li>ua</li>
          </ListLeng>
        </ContainerLeng> */}
        {/* <div>
          <ul>
            <li>black</li>
            <li>white</li>
          </ul>
        </div> */}
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

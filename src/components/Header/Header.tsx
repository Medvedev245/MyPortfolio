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
                About
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#education" title="Education">
                Education
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#skills" title="Skills">
                Skills
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#experience" title="Experience">
                Experience
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#projects" title="Projects">
                Projects
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#contacts" title="Contacts">
                Contacts
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

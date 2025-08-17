import React from 'react';
import {
  HeaderContainer,
  HeaderWrap,
  ListNav,
  LogoLink,
  LinkElement,
  NavBar,
} from './Header';
import CustomizedSwitches from 'components/Theme/Theme';
import SelectTextFields from 'components/Language/Language';

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <LogoLink to="/MyPortfolio">MyPortfolio</LogoLink>
        <NavBar>
          <ListNav>
            <li>
              <LinkElement href="#about" title="About me">
                Summary
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#education" title="Education">
                About
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#skills" title="Skills">
                Skills
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
        <SelectTextFields />

        <CustomizedSwitches />
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

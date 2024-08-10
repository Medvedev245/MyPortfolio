import React from 'react';
import {
  HeaderContainer,
  HeaderWrap,
  List,
  LogoLink,
  LinkElement,
} from './Header';

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <LogoLink to="/MyPortfolio">MyPortfolio</LogoLink>
        <nav>
          <List>
            <li>
              <LinkElement href="#about" title="About me">
                About me
              </LinkElement>
            </li>
            <li>
              <a href="#education" title="Education">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" title="Skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#workExperience" title="Work Experience">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#projects" title="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" title="Contacts">
                Contacts
              </a>
            </li>
          </List>
        </nav>
        <div>
          <ul>
            <li>cz</li>
            <li>en</li>
            <li>ua</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>black</li>
            <li>white</li>
          </ul>
        </div>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

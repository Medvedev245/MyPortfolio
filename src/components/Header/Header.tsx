import React from 'react';
import {
  HeaderContainer,
  HeaderWrap,
  ListNav,
  LogoLink,
  LinkElement,
  NavBar,
} from './Header';
// import CustomizedSwitches from 'components/Theme/Theme';
import SelectTextFields from 'components/Language/Language';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderWrap>
      <HeaderContainer>
        <LogoLink to="/MyPortfolio">MyPortfolio</LogoLink>
        <NavBar>
          <ListNav>
            <li>
              <LinkElement href="#about" title="About me">
                {t('menu.summary')}
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#education" title="Education">
                {t('menu.about')}
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#skills" title="Skills">
                {t('menu.skills')}
              </LinkElement>
            </li>

            <li>
              <LinkElement href="#projects" title="Projects">
                {t('menu.projects')}
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#contacts" title="Contacts">
                {t('menu.contacts')}
              </LinkElement>
            </li>
          </ListNav>
        </NavBar>
        <SelectTextFields />

        {/* <CustomizedSwitches /> */}
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

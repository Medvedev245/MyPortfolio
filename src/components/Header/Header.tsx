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
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language).
  // };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <LogoLink to="/MyPortfolio">MyPortfolio</LogoLink>
        <NavBar>
          <ListNav>
            <li>
              <LinkElement href="#about" title="About me">
                {t('summary')}
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#education" title="Education">
                {t('about')}
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#skills" title="Skills">
                {t('skills')}
              </LinkElement>
            </li>

            <li>
              <LinkElement href="#projects" title="Projects">
                {t('projects')}
              </LinkElement>
            </li>
            <li>
              <LinkElement href="#contacts" title="Contacts">
                {t('contacts')}
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

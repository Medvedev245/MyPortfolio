import React from 'react';
import { HeaderContainer } from './Header';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
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
  );
};

export default Header;

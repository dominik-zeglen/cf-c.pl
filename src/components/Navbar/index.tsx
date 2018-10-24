import * as classNames from 'classnames';
import * as React from 'react';

import * as logo from '../../assets/images/logo_wizyt_biel.svg';
import {isScrolledTo} from '../../utils';
import MenuItem, {IMenuItem} from './MenuItem';
import './style.scss';

interface INavbarProps {
  scrollPosition: number;
}

const menuItems: IMenuItem[] = [
  {
    id: 'o-mnie',
    label: 'O mnie',
  },
  {
    id: 'oferta',
    label: 'Oferta',
  },
  {
    id: 'kontakt',
    label: 'Kontakt',
  },
];

export const Navbar: React.SFC<INavbarProps> = ({scrollPosition}) => (
  <div
    className={classNames({
      navbar: true,
      'navbar--floating': scrollPosition > 0,
    })}>
    <div className="container navbar__container">
      <a className="navbar__logo-container" href="#">
        <img className="navbar__logo" src={logo} />
      </a>
      {menuItems.map(menuItem => (
        <MenuItem
          active={isScrolledTo(menuItem.id)}
          href={'#' + menuItem.id}
          key={menuItem.id}
        >
          {menuItem.label}
        </MenuItem>
      ))}
    </div>
  </div>
);
export default Navbar;

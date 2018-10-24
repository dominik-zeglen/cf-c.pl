import * as classNames from 'classnames';
import * as React from 'react';

export interface IMenuItem {
  id: string;
  label: string;
}
export interface IMenuItemProps {
  active: boolean;
  href: string;
}

export const MenuItem: React.SFC<IMenuItemProps> = ({
  active,
  children,
  href,
}) => (
  <a
    href={href}
    className={classNames({
      navbar__menuItem: true,
      'navbar__menuItem--active': !!active,
    })}>
    {children}
  </a>
);
export default MenuItem;

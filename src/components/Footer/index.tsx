import * as React from 'react';

import './style.scss';

export interface IFooterProps {
  text: string;
}

export const Footer: React.SFC<IFooterProps> = ({text}) => (
  <footer className="footer">
    <span className="footer__text">{text}</span>
  </footer>
);
export default Footer;

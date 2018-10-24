import * as React from 'react';

import './style.scss'

export interface IHeroProps {
  text: string;
}

export const Hero: React.SFC<IHeroProps> = ({text}) => (
  <div className="hero">
    <h1 className="hero__text hero__text--shadow">{text}</h1>
    <h1 className="hero__text">{text}</h1>
  </div>
);
export default Hero;

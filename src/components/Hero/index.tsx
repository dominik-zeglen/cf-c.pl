import * as React from 'react';

import './style.scss'

export interface IHeroProps {
  text: string;
}

export const Hero: React.SFC<IHeroProps> = ({text}) => (
  <div className="hero">
    <h1 
      className="hero__text hero__text--shadow"
      dangerouslySetInnerHTML={{
        __html: text.replace(/\\n/, "<br />")
      }} 
    />>
    <h1 
      className="hero__text"
      dangerouslySetInnerHTML={{
        __html: text.replace(/\\n/, "<br />")
      }} 
    />>
  </div>
);
export default Hero;

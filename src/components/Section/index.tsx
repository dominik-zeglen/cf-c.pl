import * as React from 'react';

import './style.scss';

interface ISectionProps {
  id: string;
  title: string;
}

export const Section: React.SFC<ISectionProps> = ({children, id, title}) => (
  <section className="section" id={id}>
    <h2 className="section__header">{title}</h2>
    {children}
  </section>
);
export default Section;

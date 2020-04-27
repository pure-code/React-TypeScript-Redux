import React  from 'react';
import {
  StyledLink,
  AboutUs,
} from './styled';
import { ReactComponent as Arrow } from './img/arrow.svg';
import scrollToAnchor from '../../utils/scrollToAnchor';

interface Link {
  to: string;
  txt: string;
  about?: boolean;
}

const Link: React.FC<Link> = props => {
  const {to, txt, about} = props;

  return (
    about ?
      <AboutUs onClick={ev => scrollToAnchor(ev, '.whatDoAnchor')} to={to}>{txt} <Arrow /> </AboutUs>
      :
      <StyledLink onClick={ev => scrollToAnchor(ev, '.worksAnchor')} to={to}>{txt}</StyledLink>
  )
};

export default Link;

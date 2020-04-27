import React from 'react';
import {
  Container,
  Wrap,
  Carousel,
  Icon,
  Item,
} from './styled';
import vue from './img/vue.svg';
import stylus from './img/stylus.svg';
import reactLogo from './img/react.svg';
import bem from './img/bem.svg';
import web from './img/webpack.svg';
import jest from './img/jest.svg';
import js from './img/js.svg';

const icons = [reactLogo, stylus, vue, web, jest, bem];

interface Animation {

}

const Animation: React.FC<Animation> = () => {
  return (
      <Container>
        <Wrap>
          <Item>
            <Icon src={js} alt="" role="presentation" />
          </Item>
          <Carousel>
            {
              icons.map( (icon, i) =>
                <Item key={icon} index={i + 1}>
                  <Icon src={icon} alt="" role="presentation" />
                </Item>
              )
            }
          </Carousel>
        </Wrap>
      </Container>
  )
};

export default Animation;

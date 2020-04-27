import React  from 'react';
import Animation from '../Animation';
import {
  Container,
  Wrap,
  Heading,
  Description,
} from './styled';

interface WhatDo {

}

const WhatDo: React.FC<WhatDo> = () => {
  return (
      <Container className='whatDoAnchor'>
        <Wrap>
          <Heading>What we do
          </Heading>
          <Description>

            We are writing a code. We create web applications in Javascript, and turning layouts into HTML is our superpower.<br /><br />
            If you need to build a strong and reliable website from a ready design - you have come to right address. We set up web pages, create animation of elements and blocks, make adaptive layout.

            <br/><br/>

            We do it quickly, but don’t forget about the quality, our code is easy to support and scale. The main  development technologies are <b>JavaScript, TypeScript, React.js, MobX, Redux, HTML</b>. Also we use Webpack, CSS / HTML preprocessors, etc.<br />We convert HTML from PSD, Sketch, Figma.
          </Description>
        </Wrap>
        <Animation />
      </Container>
  )
};

export default WhatDo;

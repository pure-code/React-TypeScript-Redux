import React from "react";
import {
  Container,
  Wrap,
  Picture,
  Content,
  Description,
  Heading,
  Img,
  Title,
} from "./styled";
import Link from "../../components/Link";

import {homePage} from "../../translate";
import mainPic from "./img/main-pic.svg";

interface Props {

}

interface StoreProps{

}

const FirstScreen: React.FC<Props & StoreProps> = props => {
  const language = 'EN';

  return (
    <Container>
      <Content>
        <Description>
          <Heading>
            {homePage[language].heading1}
          </Heading>
          <Heading>
            {homePage[language].heading2}
          </Heading>
          <Picture mob>
            <Img src={mainPic} alt='background pic'/>
          </Picture>
          <Title>
            {homePage[language].title1}
          </Title>
          <Title last>
            {homePage[language].title2}
          </Title>

          <Wrap>
            <Link txt={homePage[language].works} to='/works' />
            <Link about txt={homePage[language].about} to='/about'/>
          </Wrap>
        </Description>
        <Picture>
          <Img src={mainPic} alt='background pic' />
        </Picture>
      </Content>
    </Container>
  )
};

export default FirstScreen;

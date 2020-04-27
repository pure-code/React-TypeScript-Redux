import React from 'react';
import Work from "../../components/Work";
import PageAbout from "../PageAbout";
import Form from "../../components/Form";
import FirstScreen from "../../components/FirstScreen";
import Slider from '../../components/Slider';
import info from './info';

interface Props {
}

interface StoreProps{
}

const Landing: React.FC<Props & StoreProps> = props => {

  return (
    <>
      <FirstScreen />
      <Slider sliderId='worksSlider'>
          {
            info.map( item =>
              <Work
                isLanding={true}
                key={item.src}
                src={require( '../../components/WorkList/' + item.src)}
                srcMob={require( '../../components/WorkList/' + item.src)}
                link={item.link}
              />
            )
          }
      </Slider>
      <PageAbout/>
      <Form />
    </>
  );
};


export default Landing;

import React, {useState} from 'react';
import {
  Container,
  SliderContainer,
  SliderWrap,
  Arrow,
} from "./styled";

interface Props {
  sliderId: string;
}

interface StoreProps{
}

const Slider: React.FC<Props & StoreProps> = ({children, sliderId}) => {

  const [transformCount, setTransformCount] = useState(0);
  const lastCount = window.innerWidth > 700 ? 6 : 12;

  let start: number;
  let slidesCount: number;

  const switchSlide = (side: string)=> {
    slidesCount = side === 'next' ? transformCount + 1 : transformCount - 1;
    if(slidesCount >= 0 && slidesCount < lastCount){
      setTransformCount(slidesCount);
    }
  };

  const onTouchStartHandler = (ev: React.TouchEvent) => {
    start = ev.targetTouches[0].pageX;
  };

  const onTouchEndHandler = (ev: React.TouchEvent) => {

    if(ev.changedTouches[0].pageX - start > 50){
      slidesCount = transformCount - 1;
    }

    if(ev.changedTouches[0].pageX - start < -50){
      slidesCount = transformCount + 1;
    }

    if(slidesCount >= 0 && slidesCount < lastCount){
      setTransformCount(slidesCount);
    }

  };

  return (
    <>
      <div className='worksAnchor'>
        <Container>
          <SliderWrap onTouchStart={ev => onTouchStartHandler(ev)}
                      onTouchEnd={ev => onTouchEndHandler(ev)}>
            <SliderContainer id={sliderId} className='sliderContainer' count={transformCount}>
              {children}
            </SliderContainer>
          </SliderWrap>
          <Arrow onClick={ () => switchSlide('prev')} left/>
          <Arrow onClick={ () => switchSlide('next')}  right/>
        </Container>
      </div>
    </>
  );
};


export default Slider;
import styled, { keyframes } from "styled-components";

interface StyledProps {
  reset?: boolean;
  center?: boolean;
  reverse?: boolean;
  index?: number;
}

export const Rotate = keyframes `
  0% {
    transform: rotateX(-30deg) rotateY(0);
  }
  100% {
    transform: rotateX(-30deg) rotateY(360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 1000px){
    display: none;
  }
  
`;

export const Wrap = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  perspective: 1000px;
  transition: 1s;
  margin: 0 -20px 0 0;
`;

export const Carousel = styled.div<StyledProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${Rotate} 30s linear infinite;
  transform: rotateX(-30deg);
  ${({reset}) => reset ? 'animation: Reset .5s linear forwards' : null};
`;

export const Icon = styled.img<StyledProps>`
    height: 70px;

    @media (max-width: 767px){
      height: 50px;
    }
    ${({reverse}) => reverse ? 'transform: rotateY(180deg)' : null};
    ${({center}) => center ?
      `
        height: 60px;
        @media (max-width: 767px){
        height: 40px;
        }
      `
      : null
      };
`;

export const Item = styled.div<StyledProps>`
    position: absolute;
    transition: 1s;
    ${({index}) => index ? (
        `transform: rotateY(-${60 * index}deg) translateZ(250px);
        
        @media (max-width: 1600px){
          transform: rotateY(-${60 * index}deg) translateZ(17vw);
        }
  
        @media (max-width: 1000px){
          transform: rotateY(-${60 * index}deg) translateZ(25vw);
        }
  
        @media (max-width: 767px){
          transform: rotateY(-${60 * index}deg) translateZ(80px);
        }
      `
    )
    : `
      display: flex;
      justify-content: center;
      align-items: center;
    `
    };
`;

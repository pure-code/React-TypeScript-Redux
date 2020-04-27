import styled from 'styled-components';

interface Props {
  left?: boolean;
  right?: boolean;
  count?: number;
}

export const Container = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 1000px){
    margin-right: 0;
    margin-bottom: 70px;
    max-width: 100%;
  }
`;

export const SliderWrap = styled.div<Props>`
    overflow: hidden;
`;

export const SliderContainer = styled.div<Props>`
    display: flex;
    transition: .5s;
    transform: ${({count}) => count ? `translateX(calc(-${count * 100}%))` : null};
`;

export const Arrow = styled.i<Props>`
  position:absolute;
  top: 50%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  ${({right}) => right ? 'right: -80px;' : 'left: -80px;'};
  transform: ${({right}) => right ? 'translateY(-50%) scaleX(-1)' : 'translateY(-50%)'};
  width: 60px;
  height: 100%;
  cursor:pointer;
  
  &:hover{
    &::before, &::after{
      background: #000;
      margin-left: -20px;
    }
  }
  
  @media(max-width: 1024px){
    ${({right}) => right ? 'right: -15px;' : 'left: -15px;'};
    justify-content:center;
    
    &::before, &::after{
      height: 16px;
    }
  
    &:hover{
      &::before, &::after{
        background: #9a9a9a;
        margin-left: 0;
      }
    }
  }
  
  &::before, &::after{
    content: '';
    display:block;
    width: 2px;
    height: 26px;
    background: #9a9a9a;
    border-radius: 4px;
    transition: .3s;
  
    @media(max-width: 1024px){
      height: 16px;
    }
  }
  
  &::before{
    transform: rotate(43deg) translateY(1px);
    transform-origin: right bottom;
  }
  
  &::after{
    transform: rotate(-43deg) translateY(-2px);
    transform-origin: right top;
  }
`;
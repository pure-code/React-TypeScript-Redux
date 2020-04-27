import styled from 'styled-components';

interface StyledProps {
  last?: boolean;
  mob?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;

  @media (max-width: 767px){
    height: calc(90vh - 40px);
    padding-bottom: 30px;
  }
`;

export const Description = styled.div`
  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px){
      margin-top: 60px;
    }

  @media (max-width: 767px){
      margin-top: 30px;
    }

  @media (max-width: 767px){
      flex-grow: 0;
      flex-basis: auto;
    }
`;

export const Heading = styled.span`
  display:block;
  font-size: 64px;
  white-space: nowrap;
  line-height: 74px;
  font-weight: 400;
  color: #333;
  margin: 0;
  font-family: "Roboto slab", serif;

  @media (max-width: 1200px){
      font-size: 5vw;
      line-height: 6vw;
  }

  @media (max-width: 767px){
      font-size: 9vw;
      line-height: 12vw;
  }
`;

export const Title = styled.p<StyledProps>`
  font-family: "Roboto", sans-serif;
  font-size: 19px;
  font-weight: 300;
  line-height: 31px;
  color: #4a4a4a;
  max-width: 490px;
  margin: 20px 0 0 0;
  ${({last}) => last ? 'margin-top: 10px' : null};

  @media (max-width: 1380px){
      font-size: 17px;
      line-height: 27px;
  }

  @media (max-width: 1200px){
      margin: 10px 0 0 0;
  }

  @media (max-width: 767px){
      max-width: 100%;
      font-size: 18px;
      line-height: 30px;
      margin-right: 10px;
      ${({last}) => last ? 'display: none' : null};
  }

  @media (max-width: 400px){
    display: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 40px;

  @media (max-width: 1200px){
      margin-top: 20px;
  }

  @media (max-width: 400px){
      margin-top: 60px;
  }
`;

export const Picture = styled.div<StyledProps>`
  width: 55%;

  ${({mob}) => mob ?
  `
      display: none;
      width: auto;
      margin: 30px 0;
    ` : null};

  @media (max-width: 767px){
    display: none;
    ${({mob}) => mob ? 'display: block' : null};
  }
`;

export const Img = styled.img`
  display: block;
  width: 110%;
  margin-left: -10%;
  object-fit: contain;

  @media (max-width: 767px){
    max-width: 100%;
    margin-left: 0;
    max-height: 30vh;
  }
`;
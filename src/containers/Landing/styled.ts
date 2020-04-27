import styled from 'styled-components';

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

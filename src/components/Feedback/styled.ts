import styled from 'styled-components';

interface Props {
  reverse?: boolean;
}

export const FeedbackLink = styled.a`
  position: relative;
  margin-bottom: 40px;
  width: 48%;
  min-height: 170px;
  padding: 30px;
  box-shadow: 0 4px 20px 0 #e6e6e6;
  outline: none;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 1000px){
    width: 100%;
  }
  
  @media(max-width: 767px){
    padding: 20px;
  }

  &:hover{
    box-shadow: 0 4px 20px 0 #a9a9a9;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content:space-between;
`;

export const Wrap = styled.div<Props>`
  ${({reverse}) => reverse ?
  `
    display: flex; 
    align-items: flex-end;
    flex-direction: column;
  ` : null};
`;

export const Heading = styled.span`
  display:block;
  font-size: 16px;
  font-weight: 500;
  color: #37A000;
  margin: 0 0 20px 0;
  
  @media(max-width: 767px){
    margin-right: 30px;
  }
`;

export const Count = styled.span`
  color: #222;
  font-weight: 500;
  margin: 0 0 0 10px;
  
  @media(max-width: 767px){
    display:block;
    margin: 10px 0;
  }
`;

export const Rating = styled.div`
  & svg{
    margin: 2px 2px 0 0;
  }

`;

export const Date = styled.span`
  font-size: 14px;
  color: #656565;
  margin: 0 0 0 10px;
  
  @media(max-width: 767px){
    display:block;
    margin: 0;
  }
`;

export const Message = styled.p`
  color: #222;
  font-size: 15px;
  font-style: italic;
  margin: 20px 0 0 0;
  max-width: 50%;
  
  @media(max-width: 767px){
    max-width: 100%;
  }
  
`;

export const Total = styled.span`
  display:block;
  font-size: 15px;
  color: #222;
  font-weight: 500;
  margin: 0 0 10px 0;
`;

export const Hours = styled.span`
  display:block;
  color: #656565;
  margin: 0 0 10px 0;
  font-size: 14px;
  white-space: nowrap;
`;

export const Type = styled.span`
  display:block;
  color: #656565;
  font-size: 14px;
  white-space: nowrap;
`;

export const Platform = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 30px;
  bottom: 20px;
  border-radius: 2px;
  
  @media(max-width: 767px){
    right: 10px;
    bottom: 10px;
  }
`;

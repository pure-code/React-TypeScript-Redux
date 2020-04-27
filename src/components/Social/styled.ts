import styled from "styled-components";

interface Props {
  icon: string;
}

export const List = styled.div`
  display: flex;
  align-items: center;
`;


export const Link = styled.a<Props>`
  display: block;
  width: 24px;
  height: 24px;
  background: url(${({icon}) => icon}) no-repeat;
  background-size: contain;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 20px;

  @media (max-width: 767px){
    width: 24px;
    height: 24px;
  }
`;
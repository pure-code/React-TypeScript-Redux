import styled from 'styled-components';

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  width: 100%;
  
  @media(max-width: 1024px){
    padding: 20px 0;
  }
  
  @media(max-width: 767px){
    padding: 20px 0 0 0;
  }
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
`;

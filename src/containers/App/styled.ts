import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  
  @media(max-width: 1600px){
    margin: 0 60px;
  }
  
  @media(max-width: 1024px){
    margin: 0 30px;
  }
  
  @media(max-width: 767px){
    margin: 0 15px;
  }
  
`;
import styled from 'styled-components';

export const Container = styled.div`
   margin-top: 50px;

   @media (max-width: 1000px){
     margin-top: 20px;
   }
`;

export const Heading = styled.span`
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 30px 0;
    color: #333;

    @media (max-width: 1000px){
      font-size: 36px;
    }
`;

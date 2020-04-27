import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  color: #000;
  margin: 60px 0 0 0;

  @media (max-width: 1000px){
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;

export const Wrap = styled.div`
    max-width: 70vw;
    margin-right: 100px;

    @media (max-width: 1200px){
      margin-right: 50px;
    }

    @media (max-width: 1000px){
      margin-right: 0;
      margin-top: 0;
      max-width: 100%;
    }
`;

export const Heading = styled.h2`
    display: inline-block;
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 50px 0;
    //text-decoration: underline;
    //text-decoration-color: #00FA9A;
    padding: 0;
    color: #333;

    @media (max-width: 1000px){
      font-size: 42px;
      margin-bottom: 30px;
    }
`;

export const Description = styled.p`
    font-size: 22px;
    line-height: 32px;
    font-weight: 300;
    color: #4a4a4a;

    @media (max-width: 1200px){
      font-size: 18px;
      line-height: 28px;
    }

    @media (max-width: 1200px){
      font-size: 22px;
      line-height: 32px;
    }

    @media (max-width: 1000px){
      font-size: 20px;
      line-height: 30px;
    }
`;
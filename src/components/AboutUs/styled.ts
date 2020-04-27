import styled from 'styled-components';

export const About = styled.section`
  display: flex;
  margin: 60px 0;
  color: #000;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

export const Description = styled.p`
    margin-left: 100px;
    color: #4a4a4a;
    font-size: 22px;
    font-weight: 300;
    line-height: 32px;
    margin-top: 10px;

    @media (max-width: 1200px){
      font-size: 18px;
      margin-left: 0;
    }

    @media (max-width: 1000px){
      margin-top: 40px;
    }
`;

export const Team = styled.div`
    display: flex;
    width: 100%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    
    @media (max-width: 768px){
      margin-bottom: 40px;
    }

    @media (max-width: 360px){
      margin-right: 0;
    }
`;

export const Face = styled.div`
    display: block;
    border-radius: 4px;
    overflow: hidden;
    width: 230px;
    height: 270px;

    @media (max-width: 767px){
      width: 160px;
      height: 220px;
    }

    @media (max-width: 360px){
      width: 130px;
      height: 200px;
    }
`;

export const Pic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Name = styled.span`
    font-weight: 400;
    margin: 15px 0 10px 10px;
`;

export const Position = styled.span`
    display: flex;
    align-items: center;
    font-weight: 300;
    margin-left: 10px;
`;
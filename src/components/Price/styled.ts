import styled from 'styled-components';

interface Props {
  value?: boolean;
}

export const PriceList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px auto;

  @media (max-width: 1080px){
    display: block;
    margin: 40px auto;
  }
`;

export const Card = styled.div`
    width: 32%;
    min-height: 300px;
    background: rgba(42, 40, 61, 0.05);
    padding: 30px;
    border-radius: 4px;

    @media (max-width: 1080px){
      width: 100%;
      margin-bottom: 30px;
      min-height: auto;
      padding: 20px;
    }
`;

export const Heading = styled.span`
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: #333;
    text-transform: uppercase;

    @media (max-width: 1000px){
      font-size: 18px;
    }
`;

export const Count = styled.span<Props>`
    position: relative;
    display: inline-block;
    font-size: 48px;
    margin: 20px 0 30px;
    padding: 6px 25px;
    color: #333;
    font-weight: 700;
    background: #00FA9A;
    border-radius: 2px;

    @media (max-width: 1000px){
      font-size: 36px;
    }

    &::before{
      position: absolute;
      content: '≈';
      width: 20px;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      font-size: 22px;
    }

    ${({value}) => value ? `
      font-size: 36px;
      font-style: normal;
      margin: 0;
      padding: 0;
      font-weight: 500;

      @media (max-width: 1000px){
        font-size: 24px;
      }

      &::before{
        content: none;
      }
    `
    : null
  };
`;

export const Description = styled.p`
    font-size: 21px;
    line-height: 30px;
    font-weight: 300;
    max-width: 600px;

    @media (max-width: 1000px){
      font-size: 18px;
    line-height: 26px;
    }
`;

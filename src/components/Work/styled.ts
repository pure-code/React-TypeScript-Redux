import styled from 'styled-components';

interface Props {
  isLanding?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  width: ${({isLanding}) => isLanding ? '49%' : '65%'};
  min-width: ${({isLanding}) => isLanding ? '49%' : 'auto'};
  background: rgba(42, 40, 61, 0.05);
  
  &:nth-child(odd){
  ${({isLanding}) => isLanding ? 'margin-right: 2%;' : null};
  }

  @media (max-width: 1000px){
    width: 100%;
    min-width: 100%;
  
    &:nth-child(odd){
    ${({isLanding}) => isLanding ? 'margin-right: 0;' : null};
    }
  }
`;

export const Link = styled.a`
    display: block;
    width: 100%;
`;

export const Picture = styled.picture`
    &:hover{
      & ~ .work__heading{

        &::before{
          right: 0;
        }
      }
      & .work__pic{
        text-decoration: underline;
        text-decoration-color: #00FA9A;
      }
    }
`;

export const Img = styled.img`
    display: block;
    width: 100%;
    object-fit: contain;
`;
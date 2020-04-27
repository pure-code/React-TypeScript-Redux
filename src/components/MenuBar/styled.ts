import styled from 'styled-components';

export const Menu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 370px;
  height: 100vh;
  background: #fff;
  z-index: 9999;
  transition: .5s;
  transform: translateX(100%);

  &::before{
    content: '';
    position: fixed;
    top: 0;
    right: 370px;
    width: 100vw;
    bottom: 0;
    background: rgba(0, 0, 0, .75);
    opacity: 0;
    transition: .5s;

    @media (max-width: 500px){
      right: 100vw;
    }

  }

`;

export const Close = styled.button`
  cursor:pointer;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background: rgba(42,40,61,.05);
`;

// &-enter-active{
//   transform: translateX(0px);
//
// &::before{
//     opacity: 1;
//   }
// }
//
// &-enter-done{
//   transform: translateX(0);
// &::before{
//     opacity: 1;
//   }
// }

import styled from 'styled-components';

interface StyledProps {
    active: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 30px -20px 0;
  padding: 0;
  box-sizing: border-box;

  @media (max-width: 1000px){
    margin: 0 0 10px 0;
  }
`;

export const Item = styled.li`
    margin: 0 20px 20px 0;

    &:last-child{
      margin-right: 0;
    }
`;

export const Button = styled.button<StyledProps>`
    color: #333;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    padding: 11px 18px 9px;
    border-radius: 6px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover{
      background: rgba(42,40,61,.05);
    }
    
    ${({active}) => active ? 
    `
      color: #0076ff;
      cursor: default;
      font-size: 13px;
    ` : null};
    
`;

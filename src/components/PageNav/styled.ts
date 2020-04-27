import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
    height: 50px;
    position: relative;
    cursor: pointer;

    @media (max-width: 767px){
      margin-left: 16px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    padding-left: 30px;

    &:hover{
      text-decoration: underline;
      text-decoration-color: #00FA9A;
    }
`;

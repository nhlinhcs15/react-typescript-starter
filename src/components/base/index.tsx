import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 8px 12px;
  color: #ffffff;
  :focus {
    outline: none;
    border: 1px solid #ffffff22;
  }
  :hover {
    background: #ffffff22;
  }
  :active {
    background: #ffffff33;
  }
`;

export const ButtonLink = styled(Link)`
  background: transparent;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 8px 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  :focus {
    outline: none;
    border: 1px solid #ffffff22;
  }
  :hover {
    background: #ffffff22;
  }
  :active {
    background: #ffffff33;
  }
`;

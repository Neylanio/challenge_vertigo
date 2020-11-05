import styled from "styled-components";
import { Button as Btt } from "react-bootstrap";

export const Container = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #c5c5c5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "RobotoSlab-Medium";
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding-top: 40px;
    justify-content: start;
    align-items: flex-start;
  }
`;

export const Dropdown = styled.div`
  margin: 50px 0px;
  font-size: 8pt;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    padding-left: auto;
  }
`;

export const Button = styled(Btt)`
  border: 0px;
  margin-left: 20px;
  &:hover {
    border-radius: 10px;
  }
`;

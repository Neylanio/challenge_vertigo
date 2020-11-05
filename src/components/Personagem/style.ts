import styled from "styled-components";
import { Row } from "react-bootstrap";

export const Container = styled(Row)`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;

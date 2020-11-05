import React from "react";
import { Container } from "./style";

interface Props {
  Nome: string;
  Cor: string;
}

const Personagem: React.FC<Props> = ({ Nome, Cor, children }) => {
  return (
    <Container style={{ color: Cor }}>
      <div>
        <strong>{Nome}</strong>
      </div>
      {children}
    </Container>
  );
};

export default Personagem;

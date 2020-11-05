import React, { useCallback, useEffect, useState, useMemo } from "react";
import api from "./services/api";

import { FiXCircle } from "react-icons/fi";
import Personagem from "./components/Personagem/index.";

import { Container, Dropdown, Button, DropdownItem } from "./style";

interface PersonagemContent {
  name: string;
  height: number;
  eye_color: string;
}

const App: React.FC = () => {
  const [personagens, setPersonagens] = useState<PersonagemContent[]>([]);
  const [personagensDropItem, setPersonagensDropItem] = useState<
    PersonagemContent[]
  >([]);

  useEffect(() => {
    async function loadPersonagens() {
      const response = await api.get("api/people/");
      setPersonagens(response.data.results);
      setPersonagensDropItem(response.data.results);
    }
    loadPersonagens();
  }, []);

  const removerPersonagem = useCallback((name: string) => {
    setPersonagens(values => values.filter(item => item.name !== name));
  }, []);

  const removerPersonagemDropItem = useCallback((name: string) => {
    setPersonagensDropItem(values => values.filter(item => item.name !== name));
  }, []);

  return (
    <Container>
      <Dropdown className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Personagens
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {personagensDropItem.map(item => (
            <DropdownItem className="dropdown-item" key={item.name}>
              <div>{item.name}</div>

              <div>
                <Button
                  type="button"
                  variant="outline-danger"
                  onClick={() => {
                    removerPersonagemDropItem(item.name);
                  }}
                >
                  <FiXCircle size={20} />
                </Button>
              </div>
            </DropdownItem>
          ))}
        </div>
      </Dropdown>

      <div data-testid="personagem">
        {personagens.map(item => (
          <Personagem key={item.name} Nome={item.name} Cor={item.eye_color}>
            <div>
              <Button
                type="button"
                variant="outline-danger"
                onClick={() => {
                  removerPersonagem(item.name);
                }}
              >
                <FiXCircle size={20} />
              </Button>
            </div>
          </Personagem>
        ))}
      </div>
    </Container>
  );
};

export default App;

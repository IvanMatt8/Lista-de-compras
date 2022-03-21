import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Pão com batata", done: false },
    { id: 2, name: "Presunto e Queijo", done: false },
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Compras </C.Header>

        {/* {***} */}

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;

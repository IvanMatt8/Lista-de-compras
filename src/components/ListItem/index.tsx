import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  return (
    <div>
      <C.Container>{item.name}</C.Container>
    </div>
  );
};

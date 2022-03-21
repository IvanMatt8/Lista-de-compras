import { useState, KeyboardEvent } from "react";

import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  const handleClick = () => {
    onEnter(inputText);
    setInputText("");
  };

  return (
    <C.Container>
      <div className="Image">
        <button onClick={(e) => handleClick()}>➕</button>
      </div>
      <input
        type="text"
        placeholder="Adicione uma nova Compra"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

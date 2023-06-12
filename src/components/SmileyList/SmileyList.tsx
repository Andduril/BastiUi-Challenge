import { useState } from "react";
import Smiley from "../Smiley/Smiley";
import styles from "./SmileyList.module.scss";

export interface SmileyListProps {
  onSmileySelect?: (state: number) => void;
}

const SmileyList: React.FC<SmileyListProps> = ({ onSmileySelect }) => {
  const [selectedNotation, setSelectedNotation] = useState<number | null>(null);

  const handleOnClick = (nb: number) => {
    setSelectedNotation(nb);
    if (onSmileySelect) {
      onSmileySelect(nb);
    }
  }

  return (
    <ul className={styles.smiley_list}>
      <li>
        <Smiley
          color={"#FF603E"}
          state={"angry"}
          onClick={() => handleOnClick(1)}
          selected={selectedNotation === 1}
        />
      </li>
      <li>
        <Smiley
          color={"#FF833E"}
          state={"irritated"}
          onClick={() => handleOnClick(2)}
          selected={selectedNotation === 2}
        />
      </li>
      <li>
        <Smiley
          color={"#FFC061"}
          state={"neutral"}
          onClick={() => handleOnClick(3)}
          selected={selectedNotation === 3}
        />
      </li>
      <li>
        <Smiley
          color={"#FFD43E"}
          state={"content"}
          onClick={() => handleOnClick(4)}
          selected={selectedNotation === 4}
        />
      </li>
      <li>
        <Smiley
          color={"#FFED4E"}
          state={"happy"}
          onClick={() => handleOnClick(5)}
          selected={selectedNotation === 5}
        />
      </li>
    </ul>
  );
};

export default SmileyList;

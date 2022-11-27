import { FiDivideSquare, FiMinus } from "react-icons/fi";
import * as styles from "./styles.css";

interface SidebarItemProps {
  id: string;
  selected: boolean;
  children: React.ReactNode;
  onSelect: (id: string) => void;
}

export default function SidebarItem({
  id,
  selected,
  onSelect,
  children,
}: SidebarItemProps) {
  console.log("selected: ", selected);
  return (
    <div className={styles.container} onClick={() => onSelect(id)}>
      <div className={styles.content} data-selected={selected}>
        <FiMinus />
        <div style={{ width: "50%" }}>{children}</div>
        <div />
      </div>
    </div>
  );
}

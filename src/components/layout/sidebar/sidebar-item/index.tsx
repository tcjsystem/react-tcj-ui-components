import { FiDivideSquare, FiMinus } from "react-icons/fi";
import * as styles from "./styles.css";

interface SidebarItemProps {
  selected: boolean;
  children: React.ReactNode;
}

export default function SidebarItem({ children }: SidebarItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <FiMinus />
        <div style={{ width: "50%" }}>{children}</div>
        <div />
      </div>
    </div>
  );
}

import Button from "../button";
import * as styles from "./styles.css";
export interface ButtonGroupProps {
  children: React.ReactNode;
}

export default function ButtonGroup({ children }: ButtonGroupProps) {
  return <ul className={styles.container}>{children}</ul>;
}

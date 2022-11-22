import { FiEdit3 } from "react-icons/fi";
import Button from "../../../form/buttons/button";
import * as styles from "./styles.css";

export interface CardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export default function Card({
  children,
  title,
  description,
  actions,
}: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        {actions}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

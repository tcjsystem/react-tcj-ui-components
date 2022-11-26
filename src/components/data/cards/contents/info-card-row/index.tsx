import * as styles from "./styles.css";

export interface InfoCardRowProps {
  subject: string;
  children?: string;
}

export default function InfoCardRow({ subject, children }: InfoCardRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.rowKey}>{subject}</div>
      <div className={styles.rowValue}>{children}</div>
    </div>
  );
}

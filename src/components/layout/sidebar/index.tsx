import * as styles from "./styles.css";

interface SidebarContainerProps {
  header?: React.ReactNode;
  items: React.ReactNode;
}

export default function Sidebar({ header, items }: SidebarContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      {items}
    </div>
  );
}

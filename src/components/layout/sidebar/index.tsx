import * as styles from "./styles.css";

interface SidebarContainerProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

export default function Sidebar({ header, children }: SidebarContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      {children}
    </div>
  );
}

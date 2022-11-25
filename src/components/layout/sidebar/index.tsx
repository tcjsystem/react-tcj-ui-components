import { useRef, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import SidebarItem from "./sidebarItem";
import SidebarItemGroup from "./sidebarItemGroup";
import * as styles from "./styles.css";

interface SidebarContainerProps {
  header?: React.ReactNode;
  items: React.ReactNode;
}

export default function Sidebar({ header, items }: SidebarContainerProps) {
  const [openGroups, setOpenGroups] = useState<string[]>([])
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      {/* {items} */}
      <SidebarItemGroup id="test" isOpen={openGroups.includes("test")} toggleFn={() => {
        setOpenGroups((prev) => [...prev, "test"])
      }}
        icon={<FiCalendar />}
        title="test"
      >
        123
      </SidebarItemGroup>
    </div>
  );
}

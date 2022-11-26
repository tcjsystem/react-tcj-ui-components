import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { FiCalendar } from "react-icons/fi";
import SidebarItem from "./sidebar-item";
import SidebarItemGroup from "./sidebar-item-group";
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

import { useTransition, animated, config, useSpring } from "@react-spring/web";
import { useRef, useState } from "react";
import { FiChevronDown, FiDatabase, FiShoppingBag } from "react-icons/fi";
import SidebarItem from "./sidebarItem";
import * as styles from "./styles.css";

interface SidebarContainerProps {
  header?: React.ReactNode;
  items: React.ReactNode;
}

export default function Sidebar({ header, items }: SidebarContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      {/* {items} */}
      <SidebarItem />
      <SidebarItem />
    </div>
  );
}

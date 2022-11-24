import { useSpring, animated } from "@react-spring/web";
import { useRef, useState } from "react";
import { FiChevronDown, FiDatabase, FiShoppingBag } from "react-icons/fi";
import * as styles from "./styles.css";

interface SidebarItemProps {
  selected: boolean;
  collapsed: boolean;
  children: React.ReactNode;
}

export default function SidebarItem() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const spring = useSpring({
    transform: `rotate(${isOpen ? "-180deg" : "0deg"})`,
    height: isOpen ? ref.current?.clientHeight : 0,
    config: {
      tension: 120,
      friction: 16,
      clamp: !isOpen,
    },
  });
  return (
    <div className={styles.sidebarItem}>
      <div
        className={styles.sidebarContent}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FiDatabase />
        <div style={{ width: "50%" }}>대시보드</div>
        <animated.div style={{ transform: spring.transform }}>
          <FiChevronDown />
        </animated.div>
      </div>
      <div className={styles.sidebarChildren}>
        <animated.div style={{ height: spring.height, overflow: "hidden" }}>
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
        </animated.div>
        <div
          ref={ref}
          style={{ overflow: "hidden", opacity: 0, position: "absolute" }}
        >
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
          <div className={styles.sidebarContent}>
            <div style={{ width: "50%" }}>대시보드</div>
          </div>
        </div>
      </div>
    </div>
  );
}

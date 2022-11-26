import { useSpring, animated, useTrail, config } from "@react-spring/web";
import { useContext, useRef, useState, Children } from "react";
import { FiChevronDown, FiDatabase, FiShoppingBag } from "react-icons/fi";
import * as styles from "./styles.css";

interface SidebarItemGroupProps {
  id: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  title: React.ReactNode;
  isOpen: boolean;
  toggleGroup: () => void;
}

export default function SidebarItemGroup({
  icon,
  title,
  children,
  isOpen,
  toggleGroup,
}: SidebarItemGroupProps) {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: {
      tension: 160,
      friction: 18,
      clamp: !isOpen,
    },
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : -10,
    height: isOpen ? 40 : 0,
  });
  const ref = useRef<HTMLDivElement | null>(null);
  const spring = useSpring({
    transform: `rotate(${isOpen ? "-180deg" : "0deg"})`,
    config: {
      tension: 140,
      friction: 12,
    },
  });
  return (
    <div className={styles.container}>
      <div
        data-open={isOpen}
        className={styles.content}
        onClick={() => toggleGroup()}
      >
        {icon}
        <div style={{ width: "50%" }}>{title}</div>
        <animated.div
          className={styles.indicator}
          style={{
            transform: spring.transform,
          }}
        >
          <FiChevronDown />
        </animated.div>
      </div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div
          key={index}
          style={{ ...style, pointerEvents: isOpen ? "all" : "none" }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
      {/* <animated.div
        className={styles.sidebarItems}
        style={{
          height: spring.height,
          overflow: "hidden",
        }}
      >
        {children}
      </animated.div> */}
      <div
        ref={ref}
        style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
      >
        {children}
      </div>
    </div>
  );
}

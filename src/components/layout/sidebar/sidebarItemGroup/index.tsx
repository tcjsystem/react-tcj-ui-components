import { useSpring, animated } from "@react-spring/web";
import { useRef, useState } from "react";
import { FiChevronDown, FiDatabase, FiShoppingBag } from "react-icons/fi";
import * as styles from "./styles.css";

interface SidebarItemGroupProps {
    id: string;
    isOpen: boolean;
    toggleFn: () => void;
    children: React.ReactNode;
    icon: React.ReactNode;
    title: string;
}

export default function SidebarItemGroup({ id, isOpen, toggleFn, icon, title, children }: SidebarItemGroupProps) {
    const ref = useRef<HTMLDivElement | null>(null);
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
                onClick={toggleFn}
            >
                {icon}
                <div style={{ width: "50%" }}>{title}</div>
                <animated.div style={{ transform: spring.transform }}>
                    <FiChevronDown />
                </animated.div>
            </div>
            <animated.div className={styles.sidebarItems} style={{ height: spring.height, overflow: "hidden" }}>
                {children}
            </animated.div>
            <div ref={ref} style={{ opacity: 0 }}>{children}</div>
        </div>
    );
}

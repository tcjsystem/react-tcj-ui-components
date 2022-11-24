import React, { useRef, useEffect } from "react";
import { TabProps } from "../tab";
import * as styles from "./styles.css";
import {
  useSpring,
  animated,
  useTransition,
  useSpringRef,
} from "@react-spring/web";

export interface TabsProps {
  defaultIndex?: number;
  children: React.ReactElement<TabProps>[];
  selectedColor?: string;
}

export default function Tabs({
  defaultIndex = 0,
  children,
  selectedColor,
}: TabsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);
  const [isSlideToRight, setIsSlideToRight] = React.useState(false);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabContainerRef = useRef<HTMLDivElement | null>(null);
  const tabPanelRefs = useSpringRef();
  const [indicatorSpring, indicatorSpringApi] = useSpring(() => ({
    x: 0,
    width: 0,
    config: {
      friction: 16,
      mass: 1,
      tension: 160,
    },
  }));

  const tabPanelTransition = useTransition(selectedIndex, {
    ref: tabPanelRefs,
    from: {
      opacity: 0,
      transform: isSlideToRight ? "translateX(100%)" : "translateX(-100%)",
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: {
      opacity: 0,
      transform: isSlideToRight ? "translateX(-100%)" : "translateX(100%)",
    },
    config: {
      friction: 16,
      mass: 1,
      tension: 160,
    },
  });

  const onClickTab = (index: number) => {
    indicatorSpringApi.start({
      x: tabRefs.current[index]?.offsetLeft,
      width: tabRefs.current[index]?.offsetWidth! - 16,
    });
    setIsSlideToRight(index > selectedIndex);
    setSelectedIndex(index);
    tabContainerRef.current?.scrollTo({
      left:
        tabRefs.current[index]?.offsetLeft! +
        tabRefs.current[index]?.clientWidth! / 2 -
        tabContainerRef.current.clientWidth / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    tabPanelRefs.start();
  }, [selectedIndex]);

  useEffect(() => {
    let checkedDefaultIndex =
      defaultIndex && defaultIndex < children.length - 1 ? defaultIndex : 0;

    setSelectedIndex(checkedDefaultIndex);
    indicatorSpringApi.start({
      x: tabRefs.current[checkedDefaultIndex]?.offsetLeft,
      width: tabRefs.current[checkedDefaultIndex]?.clientWidth! - 16,
    });
  }, [tabRefs]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div ref={tabContainerRef} className={styles.tabs}>
        {children.map((tab, index) => (
          <div
            key={tab.props.title + index}
            ref={(el: HTMLDivElement | null) => {
              if (el && !tabRefs.current.includes(el)) {
                tabRefs.current.push(el);
              }
            }}
            onClick={() => onClickTab(index)}
            className={styles.tabHead({
              selected: index === selectedIndex,
            })}
            style={{
              color:
                selectedColor && index === selectedIndex
                  ? selectedColor
                  : undefined,
            }}
          >
            {tab.props.title}
          </div>
        ))}
        <animated.div
          className={styles.indicator}
          style={{ ...indicatorSpring, borderColor: selectedColor }}
        />
      </div>
      {tabPanelTransition((style, i) => (
        <animated.div
          className={styles.tabBody}
          style={{ ...style, position: "absolute" }}
        >
          {children[i]}
        </animated.div>
      ))}
    </div>
  );
}

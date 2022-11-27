import * as styles from "./styles.css";
import { useTransition, animated, to } from "@react-spring/web";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const transition = useTransition(isOpen, {
    from: { opacity: 0, x: "-100%", backdropFilter: 0 },
    enter: { opacity: 1, x: "0px", backdropFilter: 5 },
    leave: { opacity: 0, x: "-100%", backdropFilter: 0 },
    config: {
      mass: 1,
      tension: 100,
      friction: 16,
      clamp: !isOpen,
    },
  });
  return transition(
    ({ opacity, x, backdropFilter }, item) =>
      item && (
        <div>
          <animated.div
            className={styles.backdrop}
            onClick={onClose}
            style={{
              opacity,
              backdropFilter: to(backdropFilter, (value) => `blur(${value}px)`),
              WebkitBackdropFilter: to(
                backdropFilter,
                (value) => `blur(${value}px)`
              ),
            }}
          />
          <animated.div
            className={styles.drawer}
            style={{
              opacity,
              transform: to(x, (value) => `translateX(${value})`),
            }}
          >
            {children}
          </animated.div>
        </div>
      )
  );
}

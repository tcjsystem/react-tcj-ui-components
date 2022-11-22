import * as styles from "./styles.css";
import { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../../form/buttons/button";

export default function ImageCard() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className={styles.container}>
      <div ref={headerRef} className={styles.header}>
        <div>
          <div>이미지</div>
          <div className={styles.description}>기기에 대한 이미지입니다.</div>
        </div>
        <div>
          <Button leadingIcon={<FiPlus />}>추가</Button>
        </div>
      </div>
      <div
        style={{ height: `calc(100% - ${headerRef.current?.clientHeight}px)` }}
        className={styles.noResult}
      >
        이미지가 없습니다
      </div>
    </div>
  );
}

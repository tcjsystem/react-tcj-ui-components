import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { isDrawerOpenAtom } from "../states/isDrawerOpen";

export const useDrawerZIndex = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);
  const [zIndex, setZIndex] = useState(-1);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDrawerOpen) {
      timeout = setTimeout(() => setZIndex(1), 300);
    }
    if (isDrawerOpen) {
      setZIndex(-1);
    }
    return () => clearTimeout(timeout);
  }, [isDrawerOpen]);

  return { zIndex, setIsDrawerOpen };
};

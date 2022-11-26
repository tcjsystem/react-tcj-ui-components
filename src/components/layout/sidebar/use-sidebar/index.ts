import { useState } from "react";

interface UseSidebarProps {
  defaultSelectedItemId?: string;
  defaultOpenGroups?: string[];
}

export const useSidebar = ({
  defaultOpenGroups,
  defaultSelectedItemId,
}: UseSidebarProps = {}) => {
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(
    defaultSelectedItemId
  );
  const [openGroups, setOpenGroups] = useState<string[]>(
    defaultOpenGroups || []
  );
  const isOpen = (id: string) => {
    return openGroups.includes(id);
  };
  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => {
      if (isOpen(id)) {
        return prev.filter((value) => value != id);
      } else {
        return [...prev, id];
      }
    });
  };
  const isSelected = (id: string) => {
    return selectedItemId === id;
  };

  return {
    isOpen,
    toggleGroup,
    isSelected,
    setSelectedItemId,
  };
};

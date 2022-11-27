import { useEffect, useState } from "react";

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
  useEffect(() => {
    console.log(selectedItemId);
  }, [selectedItemId]);
  const isGroupOpen = (id: string) => {
    return openGroups.includes(id);
  };
  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => {
      if (isGroupOpen(id)) {
        return prev.filter((value) => value != id);
      } else {
        return [...prev, id];
      }
    });
  };
  const isItemSelected = (id: string) => {
    return selectedItemId === id;
  };
  const onSelectItem = (id: string) => {
    console.log(id);
    setSelectedItemId(id);
  };

  return {
    isGroupOpen,
    toggleGroup,
    isItemSelected,
    onSelectItem,
  };
};

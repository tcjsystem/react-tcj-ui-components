import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import Drawer from ".";
import { Button } from "../../form/buttons";
import Sidebar from "../sidebar";
import SidebarItem from "../sidebar/sidebar-item";
import SidebarItemGroup from "../sidebar/sidebar-item-group";
import { useSidebar } from "../sidebar/use-sidebar";
export default {
  component: Sidebar,
  title: "Components/Layout/Drawer/Drawer",
  parameters: {
    componentSubtitle: "",
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isGroupOpen, toggleGroup, isItemSelected, onSelectItem } =
    useSidebar();
  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>오픈</Button>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Sidebar {...args}>
          <SidebarItemGroup
            id="test"
            title="가맹점"
            icon={<FiCalendar />}
            isOpen={isGroupOpen("test")}
            toggleGroup={() => toggleGroup("test")}
          >
            <SidebarItem
              id="code"
              selected={isItemSelected("code")}
              onSelect={onSelectItem}
            >
              코드관리
            </SidebarItem>

            <SidebarItem
              id="code2"
              selected={isItemSelected("code2")}
              onSelect={onSelectItem}
            >
              코드관리
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup
            id="test2"
            title="기기"
            icon={<FiCalendar />}
            isOpen={isGroupOpen("test2")}
            toggleGroup={() => toggleGroup("test2")}
          >
            test
          </SidebarItemGroup>
        </Sidebar>
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});

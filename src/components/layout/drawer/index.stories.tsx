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
  const { isOpen, toggleGroup, isSelected } = useSidebar();
  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>오픈</Button>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Sidebar header={"TCJCMS"}>
          <SidebarItemGroup
            id="test"
            title="가맹점"
            icon={<FiCalendar />}
            isOpen={isOpen("test")}
            toggleGroup={() => toggleGroup("test")}
          >
            <SidebarItem selected={isSelected("code")}>코드관리</SidebarItem>
            <SidebarItem selected={true}>가맹점별관리</SidebarItem>
            <SidebarItem selected={true}>코드관리</SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup
            id="test2"
            title="기기"
            icon={<FiCalendar />}
            isOpen={isOpen("test2")}
            toggleGroup={() => toggleGroup("test2")}
          >
            <SidebarItem selected={true}>코드관리</SidebarItem>
            <SidebarItem selected={true}>가맹점별관리</SidebarItem>
            <SidebarItem selected={true}>코드관리</SidebarItem>
          </SidebarItemGroup>
        </Sidebar>
      </Drawer>
    </>
  );
};

export const Default = Template.bind({});

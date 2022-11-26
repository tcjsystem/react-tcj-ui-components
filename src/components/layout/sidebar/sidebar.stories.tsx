import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import Sidebar from ".";
import SidebarItem from "./sidebar-item";
import SidebarItemGroup from "./sidebar-item-group";
import { useSidebar } from "./use-sidebar";
export default {
  component: Sidebar,
  title: "Components/Layout/Sidebar/Sidebar",
  parameters: {
    componentSubtitle: "",
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
  const { isOpen, toggleGroup, isSelected } = useSidebar();
  return (
    <Sidebar {...args}>
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
  );
};

export const Default = Template.bind({});

Default.args = {
  header: "TCJCMS",
};

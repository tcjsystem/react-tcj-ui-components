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
  const { isGroupOpen, toggleGroup, isItemSelected, onSelectItem } = useSidebar(
    {
      defaultOpenGroups: ["test1", "test2"],
      defaultSelectedItemId: "code3",
    }
  );
  return (
    <Sidebar {...args}>
      <SidebarItemGroup
        id="test1"
        title="가맹점"
        icon={<FiCalendar />}
        isOpen={isGroupOpen("test1")}
        toggleGroup={() => toggleGroup("test1")}
      >
        <SidebarItem
          id="code1"
          selected={isItemSelected("code1")}
          onSelect={onSelectItem}
        >
          코드관리1
        </SidebarItem>
        <SidebarItem
          id="code2"
          selected={isItemSelected("code2")}
          onSelect={onSelectItem}
        >
          코드관리2
        </SidebarItem>
      </SidebarItemGroup>
      <SidebarItemGroup
        id="test2"
        title="기기"
        icon={<FiCalendar />}
        isOpen={isGroupOpen("test2")}
        toggleGroup={() => toggleGroup("test2")}
      >
        <SidebarItem
          id="code3"
          selected={isItemSelected("code3")}
          onSelect={onSelectItem}
        >
          코드관리3
        </SidebarItem>
        <SidebarItem
          id="code4"
          selected={isItemSelected("code4")}
          onSelect={onSelectItem}
        >
          코드관리4
        </SidebarItem>
      </SidebarItemGroup>
    </Sidebar>
  );
};

export const Default = Template.bind({});

Default.args = {
  header: "TCJCMS",
};

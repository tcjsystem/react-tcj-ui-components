import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar from "../../../components/layout/sidebar";
export default {
  component: Sidebar,
  title: "Components/Layout/Sidebar/Sidebar",
  parameters: {
    componentSubtitle: "",
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  header: "TEST",
};

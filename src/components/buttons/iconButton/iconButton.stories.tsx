import IconButton from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiPlus, FiSend } from "react-icons/fi";
export default {
  component: IconButton,
  title: "Components/IconButton",
  parameters: {
    componentSubtitle:
      "심플한 버튼입니다. 아이콘을 추가 할 수 있으며, 임의의 색을 설정할 수 있습니다.",
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary = Template.bind({});

/*
 * More on component Storybook args at
 * https://storybook.js.org/docs/react/writing-stories/args#story-args
 */
Primary.args = {
  variants: {
    color: "primary",
  },
  icon: <FiPlus />,
  color: "",
  backgroundColor: "",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variants: {
    color: "secondary",
  },
  icon: <FiPlus />,
};

import Button from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiPlus } from "react-icons/fi";
export default {
  component: Button,
  title: "Components/Button",
  parameters: {
    componentSubtitle:
      "심플한 버튼입니다. 아이콘을 추가 할 수 있으며, 임의의 색을 설정할 수 있습니다.",
  },
  argTypes: {
    variants: {
      color: {
        options: ["primary", "secondary"],
        control: { type: "select" },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

/*
 * More on component Storybook args at
 * https://storybook.js.org/docs/react/writing-stories/args#story-args
 */
Primary.args = {
  variants: {
    color: "primary",
  },
  children: "버튼",
  color: "",
  backgroundColor: "",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variants: {
    color: "secondary",
  },
  children: "버튼",
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.parameters = {
  docs: {
    storyDescription: "test",
  },
};
ButtonWithIcon.args = {
  variants: {
    color: "primary",
  },
  children: "추가",
  icon: <FiPlus />,
};

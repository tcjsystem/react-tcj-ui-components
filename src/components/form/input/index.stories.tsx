import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiLogIn, FiPlus, FiSend } from "react-icons/fi";
import Input from "./index";
export default {
  component: Input,
  title: "Components/Form/Input/Input",
  parameters: {
    componentSubtitle:
      "기본적인 버튼입니다. 아이콘을 추가 할 수 있으며, 임의의 색을 설정할 수 있습니다.",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "유저코드",
};

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {
  title: "유저코드",
  placeholder: "usercode",
};

export const WithError = Template.bind({});

WithError.args = {
  title: "유저코드",
  error: {
    hasError: true,
    message: "5글자 이상 입력해주세요",
  },
};

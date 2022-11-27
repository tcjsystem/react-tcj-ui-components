import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextArea from "./index";
export default {
  component: TextArea,
  title: "Components/Form/TextArea/TextArea",
  parameters: {
    componentSubtitle:
      "기본적인 버튼입니다. 아이콘을 추가 할 수 있으며, 임의의 색을 설정할 수 있습니다.",
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

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

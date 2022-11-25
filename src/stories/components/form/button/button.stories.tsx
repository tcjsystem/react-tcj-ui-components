import Button from "../../../../components/form/buttons/button/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiLogIn, FiPlus, FiSend } from "react-icons/fi";
import { colorPaletteVars } from "../../../../core/styles/colorPalette.css";
export default {
  component: Button,
  title: "Components/Form/Buttons/Button",
  parameters: {
    componentSubtitle:
      "기본적인 버튼입니다. 아이콘을 추가 할 수 있으며, 임의의 색을 설정할 수 있습니다.",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) =>
  <Button {...args} />

export const Default = Template.bind({});

Default.args = {
  variants: {
    color: "default",
  },
  children: "버튼",
  color: "",
};

export const Primary = Template.bind({});
Primary.parameters = {
  docs: {
    storyDescription:
      "ThemeProviders에 지정된 Primary Palette의 색상으로 설정합니다.",
  },
};
Primary.args = {
  variants: {
    color: "primary",
  },
  children: "버튼",
  color: "",
};

export const Secondary = Template.bind({});
Secondary.parameters = {
  docs: {
    storyDescription:
      "ThemeProviders에 지정된 Secondary Palette의 색상으로 설정합니다.",
  },
};
Secondary.args = {
  variants: {
    color: "secondary",
  },
  children: "버튼",
};

export const CustomColorPalette = Template.bind({});
CustomColorPalette.parameters = {
  docs: {
    storyDescription:
      "임의의 컬러팔레트를 지정할 수 있습니다. variants/color에 custom 속성과 함께, customColorPalette를 제공해야 합니다. " +
      "storybook상에서는 dark mode 지원이 되지 않으나, 프로젝트 모듈에서는 다크모드의 색상도 변경됩니다.",
  },
};
CustomColorPalette.args = {
  variants: {
    color: "custom",
  },
  children: "버튼",
  customColorPalette: colorPaletteVars.rose,
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.parameters = {
  docs: {
    storyDescription: "버튼의 앞 쪽에 아이콘을 추가합니다.",
  },
};
WithLeadingIcon.args = {
  variants: {
    color: "primary",
  },
  children: "추가",
  leadingIcon: <FiPlus />,
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.parameters = {
  docs: {
    storyDescription: "버튼의 뒤 쪽에 아이콘을 추가합니다.",
  },
};
WithTrailingIcon.args = {
  variants: {
    color: "primary",
  },
  children: "전송",
  trailingIcon: <FiSend />,
};

export const WithFullWidth = Template.bind({});
WithFullWidth.parameters = {
  docs: {
    storyDescription: "버튼의 뒤 쪽에 아이콘을 추가합니다.",
  },
};
WithFullWidth.args = {
  variants: {
    color: "primary",
    width: "full"
  },
  children: "로그인",
  leadingIcon: <FiLogIn />,
};


import IconButton from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiPlus, FiSearch, FiSend, FiShare } from "react-icons/fi";
import { colorPaletteVars } from "../../../../core/styles/color-palette.css";
export default {
  component: IconButton,
  title: "Components/Form/Buttons/IconButton",
  parameters: {
    componentSubtitle: "아이콘 버튼입니다. 버튼과 속성은 같습니다.",
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variants: {
    color: "default",
  },
  icon: <FiPlus />,
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
  icon: <FiSend />,
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
  icon: <FiSearch />,
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
  icon: <FiShare />,
  customColorPalette: colorPaletteVars.sky,
};

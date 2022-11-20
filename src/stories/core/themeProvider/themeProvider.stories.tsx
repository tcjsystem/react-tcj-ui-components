import ThemeProvider from "../../../core/providers/themeProvider";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../../components/";
export default {
  component: ThemeProvider,
  title: "Core/ThemeProvider",
  parameters: {
    componentSubtitle:
      "탭 컴포넌트입니다. 탭 헤드와 탭 바디로 구성되어있습니다. 기본 인덱스를 지정할 수 있으며, 지정하지 않을 경우 첫 번째 탭이 기본적으로 선택됩니다.",
  },
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args}>
    <Button>Button</Button>
  </ThemeProvider>
);

export const Basic = Template.bind({});

Basic.args = {};

export const ChangePrimaryColor = Template.bind({});

ChangePrimaryColor.args = {
  primaryColor: "#c41414",
};

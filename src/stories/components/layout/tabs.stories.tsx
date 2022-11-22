import Tabs from "../../../components/layout/tabs/tabs";
import Tab from "../../../components/layout/tabs/tab";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
  component: Tabs,
  title: "Components/Layout/Tabs/Tabs",
  parameters: {
    componentSubtitle:
      "탭 컴포넌트입니다. 탭 헤드와 탭 바디로 구성되어있습니다. 기본 인덱스를 지정할 수 있으며, 지정하지 않을 경우 첫 번째 탭이 기본적으로 선택됩니다.",
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab title={"서비스"}>서비스탭</Tab>
    <Tab title={"기본정보"}>기본정보탭</Tab>
    <Tab title={"상세정보"}>상세정보탭</Tab>
    <Tab title={"부품"}>부품탭</Tab>
    <Tab title={"기기"}>기기탭</Tab>
  </Tabs>
);

export const TabsWithoutDefaultIndex = Template.bind({});

TabsWithoutDefaultIndex.args = {
  defaultIndex: undefined,
  selectedColor: "",
};

export const TabsWithValidDefaultIndex = Template.bind({});
TabsWithValidDefaultIndex.parameters = {
  docs: {
    storyDescription:
      "default index가 있을 경우 해당 탭으로 초기값이 설정됩니다.",
  },
};
TabsWithValidDefaultIndex.args = {
  defaultIndex: 3,
};

export const TabsWithInvalidDefaultIndex = Template.bind({});

TabsWithInvalidDefaultIndex.parameters = {
  docs: {
    storyDescription:
      "유효하지 않은 default index일 경우 첫 번째 탭으로 초기값이 설정됩니다.",
  },
};
TabsWithInvalidDefaultIndex.args = {
  defaultIndex: 10,
};

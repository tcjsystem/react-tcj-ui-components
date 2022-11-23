import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageCard from "../../../../components/data/cards/imageCard";
export default {
  component: ImageCard,
  title: "Components/Data/Card/ImageCard",
  parameters: {
    componentSubtitle:
      "탭 컴포넌트입니다. 탭 헤드와 탭 바디로 구성되어있습니다. 기본 인덱스를 지정할 수 있으며, 지정하지 않을 경우 첫 번째 탭이 기본적으로 선택됩니다.",
  },
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => <ImageCard />;

export const Basic = Template.bind({});
Basic.storyName = "ImageCard";
Basic.args = {};

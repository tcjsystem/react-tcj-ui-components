import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiDelete, FiEdit3, FiPlus, FiTrash } from "react-icons/fi";
import { Button } from "../../../../components";
import ButtonGroup from "../../../../components/form/buttons/buttonGroup";
import { colorPaletteVars } from "../../../../core/styles/colorPalette.css";
export default {
  component: ButtonGroup,
  title: "Components/Form/Buttons/ButtonGroup",
  parameters: {
    componentSubtitle:
      "심플한 버튼입니다. 아이콘을 추가 할 수 있으며, 임의의 색을 설정할 수 있습니다.",
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Button leadingIcon={<FiPlus />}>추가</Button>
      <Button leadingIcon={<FiEdit3 />}>수정</Button>
      <Button leadingIcon={<FiTrash />}>삭제</Button>
    </>
  ),
};

export const WithVariousColors = Template.bind({});

WithVariousColors.args = {
  children: (
    <>
      <Button
        variants={{
          color: "primary",
        }}
        leadingIcon={<FiPlus />}
      >
        추가
      </Button>
      <Button
        variants={{
          color: "primary",
        }}
        leadingIcon={<FiEdit3 />}
      >
        수정
      </Button>
      <Button
        leadingIcon={<FiTrash />}
        variants={{
          color: "custom",
        }}
        customColorPalette={colorPaletteVars.red}
      >
        삭제
      </Button>
    </>
  ),
};

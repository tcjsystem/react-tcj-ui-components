import Button from "../../../../components/form/buttons/button/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiPlus, FiSend } from "react-icons/fi";
import { colorPaletteVars } from "../../../../core/styles/colorPalette.css";
import Select from "../../../../components/form/select";
import { SelectItem } from "@radix-ui/react-select";
export default {
  component: Select,
  title: "Components/Form/Select/Select",
  parameters: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div
    style={{
      height: 100,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Select {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  items: [
    {
      value: "item1",
      label: "item1",
    },
    {
      value: "item2",
      label: "item2",
    },
    {
      value: "item3",
      label: "item3",
    },
    {
      value: "item4",
      label: "item4",
    },
    {
      value: "item5",
      label: "item5",
    },
  ],
};
export const WithGroup = Template.bind({});

WithGroup.args = {
  items: [
    {
      value: "group1",
      label: "group1",
      children: [
        {
          value: "child1",
          label: "child1",
        },
        {
          value: "child2",
          label: "child2",
        },
        {
          value: "child3",
          label: "child3",
        },
      ],
    },
    {
      value: "group2",
      label: "group2",
      children: [
        {
          value: "child4",
          label: "child4",
        },
        {
          value: "child5",
          label: "child5",
        },
        {
          value: "child6",
          label: "child6",
        },
      ],
    },
  ],
};

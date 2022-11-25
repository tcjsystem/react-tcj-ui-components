import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../../../../components/form/input";

export default {
    component: Input,
    title: "Components/Form/Input/Input",
    parameters: {
        componentSubtitle:
            "",
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) =>
    <div style={{ width: "50%" }}>
        <Input {...args} />
    </div>
export const Default = Template.bind({});

Default.args = {
    title: "아이디",
    placeholder: "username"
};

export const WithError = Template.bind({});

WithError.args = {
    title: "아이디",
    error: {
        hasError: true,
        message: "5자 이상 입력해주세요"
    },
    placeholder: "username"
};

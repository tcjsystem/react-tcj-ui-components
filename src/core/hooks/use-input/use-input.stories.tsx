import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../../../components/form/input";
import { useInput } from "./index";
export default {
  component: Input,
  title: "Core/Hooks/useInput",
  parameters: {
    componentSubtitle:
      "input에 사용하는 hook입니다. max length와 정규표현식으로 입력을 제한 할 수 있으며, 에러메시지를 표현할 수 있습니다.",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => {
  const [username, onChangeUsername, error] = useInput({
    max: 10,
    maxErrorMessage: "10글자 이하로 입력해주세요",
    regExp: /^[A-Za-z0-9]*$/,
    regExpErrorMessage: "영어와 숫자만 입력해주세요",
  });
  return (
    <Input
      title="유저명"
      value={username}
      onChange={onChangeUsername}
      error={error}
    />
  );
};

export const Default = Template.bind({});

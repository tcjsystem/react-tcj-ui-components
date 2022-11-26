import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FiPlus } from "react-icons/fi";
import { Button } from "../../../..";
import ButtonGroup from "../../../../form/buttons/button-group";
import Card from "../../base";
import InfoCardRow from ".";
export default {
  component: Card,
  title: "Components/Data/Card/InfoCard",
  parameters: {
    componentSubtitle:
      "정보 카드입니다. Card 컴포넌트 안에 InfoCardRow컴포넌트로 정보를 표시합니다.",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const InfoCard = Template.bind({});

InfoCard.args = {
  title: "상세정보",
  description: "기기에 대한 상세정보입니다.",
  actions: <Button leadingIcon={<FiPlus />}>추가</Button>,
  children: (
    <>
      <InfoCardRow subject="가맹점명">TCJ시스템</InfoCardRow>
      <InfoCardRow subject="기기종류">KIOSK</InfoCardRow>
      <InfoCardRow subject="제조사">나라키오스크</InfoCardRow>
      <InfoCardRow subject="기기코드">TA-2000</InfoCardRow>
      <InfoCardRow subject="납품일">2022.03.01</InfoCardRow>
      <InfoCardRow subject="수정일">2022.05.01</InfoCardRow>
      <InfoCardRow subject="노트">
        국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한
        소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 국회의원은
        현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지
        아니한다.
      </InfoCardRow>
    </>
  ),
};
export const InfoCardWithButtonGroup = Template.bind({});

InfoCardWithButtonGroup.args = {
  title: "상세정보",
  description: "기기에 대한 상세정보입니다.",
  actions: (
    <ButtonGroup>
      <Button leadingIcon={<FiPlus />}>추가</Button>
      <Button leadingIcon={<FiPlus />}>수정</Button>
    </ButtonGroup>
  ),
  children: (
    <>
      <InfoCardRow subject="가맹점명">TCJ시스템</InfoCardRow>
      <InfoCardRow subject="기기종류">KIOSK</InfoCardRow>
      <InfoCardRow subject="제조사">나라키오스크</InfoCardRow>
      <InfoCardRow subject="기기코드">TA-2000</InfoCardRow>
      <InfoCardRow subject="납품일">2022.03.01</InfoCardRow>
      <InfoCardRow subject="수정일">2022.05.01</InfoCardRow>
      <InfoCardRow subject="노트">
        국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한
        소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 국회의원은
        현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지
        아니한다.
      </InfoCardRow>
    </>
  ),
};

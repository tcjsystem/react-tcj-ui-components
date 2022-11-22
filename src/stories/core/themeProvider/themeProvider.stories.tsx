import ThemeProvider from "../../../components/provider/themeProvider";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../../components/";
import { colorPaletteVars } from "../../../core/styles/colorPalette.css";
import Card from "../../../components/data/cards/base";
import InfoCardRow from "../../../components/data/cards/contents/infoCardRow";
import { ThemeType, useTheme } from "../../../core/hooks/useTheme";
import Select from "../../../components/form/select";
export default {
  component: ThemeProvider,
  title: "Core/ThemeProvider",
  parameters: {
    componentSubtitle:
      "탭 컴포넌트입니다. 탭 헤드와 탭 바디로 구성되어있습니다. 기본 인덱스를 지정할 수 있으며, 지정하지 않을 경우 첫 번째 탭이 기본적으로 선택됩니다.",
  },
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args} />
);

export const ThemeSelect = () => {
  const { changeCurrentTheme } = useTheme();
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Select
        onValueChange={(value) => changeCurrentTheme(value as ThemeType)}
        items={[
          {
            value: "light",
            label: "라이트모드",
          },
          {
            value: "dark",
            label: "다크모드",
          },
        ]}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <ThemeSelect />
      </div>
      <Card
        title="기본 테마"
        actions={
          <Button
            variants={{
              color: "primary",
            }}
          >
            추가
          </Button>
        }
      >
        <InfoCardRow subject="기본">테마</InfoCardRow>
      </Card>
    </div>
  ),
};

export const CustomTheme = Template.bind({});

CustomTheme.args = {
  theme: {
    color: {
      background: colorPaletteVars.amber,
      text: colorPaletteVars.red,
      primary: colorPaletteVars.emerald,
      secondary: colorPaletteVars.gray,
      primaryStatus: {
        active: colorPaletteVars.emerald[300],
        default: colorPaletteVars.emerald[500],
        hover: colorPaletteVars.emerald[400],
      },
      secondaryStatus: {
        active: colorPaletteVars.emerald[100],
        default: colorPaletteVars.emerald[200],
        hover: colorPaletteVars.emerald[300],
      },
      shadow: {
        active: colorPaletteVars.emerald[100],
        default: colorPaletteVars.emerald[200],
        hover: colorPaletteVars.emerald[300],
      },
    },
  },
  children: (
    <Card
      title="커스텀 테마"
      actions={
        <Button
          variants={{
            color: "primary",
          }}
        >
          추가
        </Button>
      }
    >
      <InfoCardRow subject="커스텀">테마</InfoCardRow>
    </Card>
  ),
};

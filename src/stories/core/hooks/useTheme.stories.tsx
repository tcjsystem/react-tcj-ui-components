import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select from "../../../components/form/select";
import { ThemeType, useTheme } from "../../../core";
import {
  ColorPalettes,
  colorPaletteVars,
} from "../../../core/styles/colorPalette.css";
import Card from "../../../components/data/cards/base";
import { Button } from "../../../components";
import { setElementVars } from "@vanilla-extract/dynamic";
import { lightThemeVars, themeVars } from "../../../core/styles/theme.css";
import { globalStyle } from "@vanilla-extract/css";
export default {
  component: Select,
  title: "Core/Hooks/useTheme",
  parameters: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const {
    currentTheme,
    changeCurrentTheme,
    changeCustomThemeColorProperty,
    changeCustomFontFamily,
    currentCustomTheme,
    resetCustomTheme,
  } = useTheme();
  return (
    <Card
      title="색상 설정"
      description="커스텀모드를 선택할 경우, 세부적으로 설정이 가능합니다."
      actions={
        <Button
          variants={{
            color: "secondary",
          }}
          onClick={() => resetCustomTheme()}
        >
          초기화
        </Button>
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Select
          onValueChange={(value) => changeCurrentTheme(value as ThemeType)}
          value={currentTheme}
          items={[
            {
              value: "light",
              label: "라이트모드",
            },
            {
              value: "dark",
              label: "다크모드",
            },
            {
              value: "custom",
              label: "커스텀모드",
            },
          ]}
        />
        {currentTheme === "custom" && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  minWidth: "8rem",
                }}
              >
                primary color
              </div>
              <Select
                onValueChange={(value) => {
                  changeCustomThemeColorProperty(
                    "primary",
                    value as ColorPalettes
                  );
                }}
                value={currentCustomTheme?.color.primary[50].split("-")[2]}
                items={Object.keys(colorPaletteVars).map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  minWidth: "8rem",
                }}
              >
                secondary color
              </div>
              <Select
                onValueChange={(value) => {
                  changeCustomThemeColorProperty(
                    "secondary",
                    value as ColorPalettes
                  );
                }}
                value={currentCustomTheme?.color.secondary[50].split("-")[2]}
                items={Object.keys(colorPaletteVars).map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  minWidth: "8rem",
                }}
              >
                background color
              </div>
              <Select
                onValueChange={(value) => {
                  changeCustomThemeColorProperty(
                    "background",
                    value as ColorPalettes
                  );
                }}
                value={currentCustomTheme?.color.background[50].split("-")[2]}
                items={Object.keys(colorPaletteVars).map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  minWidth: "8rem",
                }}
              >
                text color
              </div>
              <Select
                onValueChange={(value) => {
                  changeCustomThemeColorProperty(
                    "text",
                    value as ColorPalettes
                  );
                }}
                value={currentCustomTheme?.color.text[50].split("-")[2]}
                items={Object.keys(colorPaletteVars).map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  minWidth: "8rem",
                }}
              >
                shadow color
              </div>
              <Select
                onValueChange={(value) => {
                  changeCustomThemeColorProperty(
                    "shadow",
                    value as ColorPalettes
                  );
                }}
                value={currentCustomTheme?.color.shadow[50].split("-")[2]}
                items={Object.keys(colorPaletteVars).map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  boxSizing: "border-box",
                  minWidth: "8rem",
                }}
              >
                font family
              </div>
              <Select
                onValueChange={(value) => {
                  changeCustomFontFamily(value);
                }}
                value={currentCustomTheme?.font}
                items={[
                  {
                    label: "Pretendard",
                    value: "Pretendard",
                  },
                  {
                    label: "Noto Sans KR",
                    value: "Noto Sans KR",
                  },
                  {
                    label: "Roboto Mono",
                    value: "Roboto Mono",
                  },
                ]}
              />
            </div>
          </>
        )}
      </div>
    </Card>
  );
};
export const Default = Template.bind({});
Default.args = {};

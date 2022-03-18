import React, { ReactChild } from "react";
import { Text, TextProps } from "react-native";
import { THEME } from "../../utils/theme";

interface Props extends TextProps {
  children: ReactChild | undefined;
  bold?: boolean;
  Regular?: boolean;
  Medium?: boolean;
  semiBold?: boolean;
  light?: boolean;
}

const AppText = (props: Props) => {
  const { children, bold, Medium, semiBold, light } = props;

  let fontFamily = THEME.FONTS.TYPE.REGULAR;

  if (bold) {
    fontFamily = THEME.FONTS.TYPE.BOLD;
  }
  if (light) {
    fontFamily = THEME.FONTS.TYPE.LIGHT;
  }
  if (Medium) {
    fontFamily = THEME.FONTS.TYPE.MEDIUM;
  }
  if (semiBold) {
    fontFamily = THEME.FONTS.TYPE.SEMIBOLD;
  }

  return (
    <Text
      style={{
        fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
        color: THEME.COLORS.black,
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;

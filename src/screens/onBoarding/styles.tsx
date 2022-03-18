import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: THEME.COLORS.primaryLightBackground,
  },
  sliderDoneButton: {
    color: THEME.COLORS.textLight,
    // fontFamily: THEME.FONTS.TYPE.REGULAR,
    fontSize: THEME.FONTS.SIZE.SMALL,
    marginVertical: THEME.MARGIN.NORMAL,
    alignSelf: "center",
  },
});

export default styles;

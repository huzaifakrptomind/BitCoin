import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
  },
  sliderDoneButton: {
    color: THEME.COLORS.yellow,
    fontSize: THEME.FONTS.SIZE.SMALL,
    marginVertical: THEME.MARGIN.NORMAL,
    alignSelf: "center",
  },
  Title: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.disabledTextLight,
  },
  subTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.MEDIUM,
    color: THEME.COLORS.disabledTextLight,
    fontWeight: "bold",
  },
});

export default styles;

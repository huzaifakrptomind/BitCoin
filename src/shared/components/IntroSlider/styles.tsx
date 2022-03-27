import { StyleSheet } from "react-native";
import { THEME } from "../../utils/theme";
import { RF } from "../../utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: THEME.PADDING.HIGH,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: props.item.color,
  },
  slideTitle: {
    fontSize: THEME.FONTS.SIZE.LARGE,
    textAlign: "center",
    marginTop: THEME.MARGIN.HIGH,
    marginBottom: THEME.MARGIN.NORMAL,
    color: THEME.COLORS.textDark,
  },
  slideImage: { width: RF(370), height: RF(300), alignSelf: "center" },
  slideSubTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XSMALL,
    color: THEME.COLORS.disabledTextLight,
  },
});

export default styles;

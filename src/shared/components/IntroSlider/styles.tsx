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
    // fontFamily: THEME.FONTS.TYPE.REGULAR,
    textAlign: "center",
    marginTop: THEME.MARGIN.HIGH,
    marginBottom: THEME.MARGIN.NORMAL,
    color: THEME.COLORS.textDark,
  },
  slideImage: { width: RF(350), height: RF(300), alignSelf: "center" },
  slideSubTitle: {
    // fontFamily: THEME.FONTS.TYPE.REGULAR,
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XSMALL,
    color: THEME.COLORS.disabledTextLight,
    // lineHeight: THEME.FONTS.SIZE.XLARGE,
    // 707070
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.secondaryDarkBackground,
  },
  slideTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    textAlign: "center",
    marginTop: THEME.MARGIN.HIGH,
    marginBottom: THEME.MARGIN.NORMAL,
  },
  slideImage: { width: RF(220), height: RF(220), alignSelf: "center" },
  slideSubTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.white,
    margin: RF(30),
  },
  actionContainer: {
    position: "absolute",
    bottom: RF(75),
    alignSelf: "center",
    flexDirection: "row",
  },
});

export default styles;

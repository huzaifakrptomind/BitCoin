import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.lightGray,
  },
  slideTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    textAlign: "center",
    marginTop: THEME.MARGIN.HIGH,
    marginBottom: THEME.MARGIN.NORMAL,
  },
  slideImage: { width: RF(120), height: RF(120), alignSelf: "center" },
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
  tagTitle: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.white,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: RF(10),
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.secondaryBackground,
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
    maxWidth: RF(200),
  },
  actionContainer: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tagTitle: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.white,
  },
  upperContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  midContainer: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: RF(10),
  },
});

export default styles;

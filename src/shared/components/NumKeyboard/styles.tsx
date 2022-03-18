import { StyleSheet } from "react-native";
import { THEME } from "../../utils/theme";
import { RF } from "../../utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: RF(30),
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1,
  },
  numberText: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XXLARGE,
    // fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontWeight: "500",
    color: THEME.COLORS.black,
  },
  numberContainer: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },

  backIcon: {
    height: RF(25),
    width: RF(25),
  },
  confirmText: {
    backgroundColor: THEME.COLORS.black,
    color: THEME.COLORS.white,
    paddingVertical: RF(4),
    paddingHorizontal: RF(4),
  },
});

export default styles;

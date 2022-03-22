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
    fontWeight: "bold",
    color: THEME.COLORS.blacklight,
  },
  slideSubTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.disabledTextLight,
    margin: RF(20),
    lineHeight: THEME.FONTS.SIZE.LARGE,
  },
  slideImage: {
    width: RF(180),
    height: RF(180),
  },
  topView: {
    flex: 2.5,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "gray",
  },
  middleView: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  bottomView: {
    flex: 1.5,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  bottombtn: {
    width: RF(290),
    height: RF(45),
    borderRadius: RF(7),
  },
});

export default styles;

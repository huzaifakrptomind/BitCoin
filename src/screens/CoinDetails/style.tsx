import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
  },
  slideImage: { width: RF(90), height: RF(90), margin: RF(20) },
  slideSubTitle: {
    flex: 1.5,
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.disabledTextLight,
    marginTop: RF(70),
    marginHorizontal: RF(30),
    lineHeight: THEME.FONTS.SIZE.LARGE,
    // fontFamily: "Regular",
  },
  flatView: {
    flex: 2.5,
    //  backgroundColor: "blue".
  },
  slideCopytitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.disabledTextLight,
    paddingLeft: RF(10),
  },
  copyView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottomView: {
    flex: 1.5,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  item: {
    justifyContent: "center",
    marginHorizontal: RF(10),
    marginTop: RF(10),
  },
  titleItem: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.white,
  },
  innerItemText: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    color: THEME.COLORS.disabledTextLight,
  },
  outerView: {
    width: RF(150),
    height: RF(27),
    backgroundColor: THEME.COLORS.buttonGray,
    borderRadius: RF(20),
    flexDirection: "row",
    alignItems: "center",
  },
  leftView: {
    width: RF(22),
    height: RF(22),
    backgroundColor: THEME.COLORS.skyBlue,
    borderRadius: RF(20),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: RF(3),
  },
  rightView: { paddingLeft: RF(20) },
  bottombtn: {
    width: RF(290),
    borderRadius: RF(7),
  },
});

export default styles;

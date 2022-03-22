import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.secondaryDarkBackground,
  },
  slideImage: { width: RF(25), height: RF(25) },
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
  bottomBar: {
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  middleIcon: {
    bottom: 18,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: THEME.COLORS.skyBlue,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8,
  },
});

export default styles;

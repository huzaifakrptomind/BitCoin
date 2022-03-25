import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
  },
  upperContainer: {
    flex: 5,
  },
  upperTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: RF(20),
    marginTop: RF(70),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: RF(10),
  },
  slideImage: { width: RF(37), height: RF(37) },
  questionImage: { width: RF(20), height: RF(20), alignSelf: "center" },
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
  titleCoin: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    color: THEME.COLORS.black,
    fontWeight: "500",
  },
  innerItemText: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    color: THEME.COLORS.disabledTextLight,
    margin: RF(5),
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
    backgroundColor: THEME.COLORS.secondaryDarkBackground,
  },
});

export default styles;

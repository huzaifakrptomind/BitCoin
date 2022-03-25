import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
    // margin: RF(20),
  },
  slideImage: { width: RF(40), height: RF(40) },
  coinImage: { width: RF(80), height: RF(80) },
  slideSubTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    color: THEME.COLORS.black,
    textAlign: "center",
    marginTop: RF(20),
  },
  amountTitle: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
  },
  dateTitle: {
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    color: THEME.COLORS.disabledTextLight,
  },
  statusTitle: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    fontWeight: "500",
  },
  rateTitle: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.disabledTextLight,
    margin: RF(3),
  },
  flatView: {
    flex: 2.5,
    //  backgroundColor: "blue".
  },
  slideCopytitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.black,
    fontWeight: "600",
    // paddingLeft: RF(10),
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
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.black,
    marginLeft: RF(10),
  },
  questionImage: {
    width: RF(20),
    height: RF(20),
    // alignSelf: "center",
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

import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.secondaryBackground,
  },
  firstContainer: {
    flex: 1.8,
    // backgroundColor: THEME.COLORS.secondaryDarkBackground,
    justifyContent: "flex-end",
    alignItems: "center",
    // zIndex: -999999,
  },
  secondContainer: {
    flex: 4.2,
    backgroundColor: "#F7F7F7",
    // margin:RF(10)
    justifyContent: "center",
    alignItems: "center",
  },
  firstUpperView: {
    flexDirection: "row",
  },
  firstBottomView: {
    flexDirection: "row",
    margin: RF(20),
  },
  firstBottomRightView: {
    flexDirection: "row",
  },
  firstBottomLeftView: {
    flexDirection: "row",
    paddingRight: RF(15),
  },
  firstBottomInerRightView: {
    flexDirection: "column",
    paddingLeft: RF(10),
  },
  slideImage: { width: RF(18), height: RF(18), alignSelf: "center" },
  coinImage: {
    width: RF(45),
    height: RF(45),

    // marginTop: RF(15),
  },
  slideSubTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XXXSMALL,
    // color: THEME.COLORS.disabledTextLight,
  },
  rateTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
  },
  coinTitle: {
    fontSize: THEME.FONTS.SIZE.XSMALL,
    // color: THEME.COLORS.bitcoinColor,
    fontWeight: "bold",
  },
  coinSubTitle: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.disabledTextLight,
  },
  coinUsd: {
    alignSelf: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.black,
    fontWeight: "700",
    paddingTop: THEME.PADDING.LOW,
  },
  slideTitle: {
    fontSize: THEME.FONTS.SIZE.XXXXXLARGE,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    alignSelf: "flex-end",
  },
  dollerTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    paddingTop: THEME.FONTS.SIZE.SMALL,
  },
  decimalTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    paddingTop: THEME.FONTS.SIZE.SMALL,
  },
  incomeTitle: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    textAlign: "center",
    fontWeight: "bold",
    color: THEME.COLORS.white,
    // paddingTop: THEME.FONTS.SIZE.XSMALL,
  },
  bottomView: {
    flex: 1.5,
    // backgroundColor: "green",
    justifyContent: "center",
  },
  cardView: {
    backgroundColor: THEME.COLORS.white,
    width: RF(300),
    height: RF(65),
    borderRadius: RF(12),
    elevation: 1,
    marginHorizontal: RF(10),
    marginTop: RF(10),
    flexDirection: "row",
    // top: RF(-20),
    // zIndex: 99999,
  },
  amountTitle: {
    // textAlign: "center",
    fontSize: THEME.FONTS.SIZE.SMALL,
    color: THEME.COLORS.disabledTextLight,
    alignSelf: "center",
    paddingTop: RF(7),
  },
  cardDownView: {
    borderBottomLeftRadius: RF(15),
    borderBottomRightRadius: RF(15),
    height: RF(30),
  },
  lefView: {
    flex: 1.3,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  middleView: {
    flex: 3,
    // backgroundColor: "yellow",
    justifyContent: "center",
  },
  rightView: {
    flex: 1.7,
    // backgroundColor: "orange",
    justifyContent: "center",
    // alignItems: "flex-end",
    alignItems: "center",
  },
});

export default styles;

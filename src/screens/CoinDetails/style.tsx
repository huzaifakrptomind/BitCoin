import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
  },
  flatContiner: {
    flex: 2,
    marginTop: RF(60),
  },
  flatUpperContainer: {
    flex: 4,
    alignItems: "center",
  },
  flatMiddleContainer: {
    width: RF(290),
    height: RF(140),
    borderRadius: THEME.RADIUS.BOX,
    marginTop: RF(20),
    elevation: RF(10),
    shadowColor: "#000",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  flatBottomContainer: {
    flexDirection: "row",
    marginVertical: RF(10),
    justifyContent: "space-between",
  },
  midView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: RF(15),
  },
  bottomView: {
    flexDirection: "row",
    marginHorizontal: RF(15),
    marginVertical: RF(10),
  },
  slideImage: { width: RF(40), height: RF(40) },
  coinImage: { width: RF(80), height: RF(80) },
  slideSubTitle: {
    fontSize: THEME.FONTS.SIZE.XLARGE,
    color: THEME.COLORS.black,
    textAlign: "center",
    marginTop: RF(10),
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

  itemContainer: {
    flexDirection: "row",
    flex: 1,
    height: RF(55),
    alignItems: "center",
    marginVertical: RF(2),
  },
  itemLeftView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  itemRightView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemMideView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  itemRightInnerView: {
    width: RF(90),
    height: RF(30),
    borderWidth: RF(1),
    borderRadius: THEME.RADIUS.OVAL,
    justifyContent: "center",
    alignItems: "center",
  },
  itemMidInerView: {
    flexDirection: "row",
    margin: RF(3),
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
    width: RF(140),
    borderRadius: RF(7),
  },
});

export default styles;

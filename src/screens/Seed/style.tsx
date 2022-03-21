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
  slideImage: { width: RF(220), height: RF(220), alignSelf: "center" },
  slideSubTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XSMALL,
    color: THEME.COLORS.disabledTextLight,
    marginTop: RF(70),
    marginHorizontal: RF(30),
    flex: 1,
    backgroundColor: "yellow",
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
  item: {
    flex: 2,
    margin: RF(10),
    // marginVertical: 8,
    // marginHorizontal: 16,
    // flex:!z
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  title: {
    fontSize: 32,
  },
});

export default styles;

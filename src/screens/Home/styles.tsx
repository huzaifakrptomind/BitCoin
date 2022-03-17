import { StyleSheet } from "react-native";
import { THEME } from "../../../shared/theme";
import { RF } from "../../../shared/theme/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: THEME.PADDING.LOW,
  },
  coinIcon: { height: RF(75), width: RF(75), marginTop: THEME.MARGIN.VERYHIGH },
  title: {
    fontSize: THEME.FONTS.SIZE.LARGE,
    marginVertical: THEME.MARGIN.HIGH,
  },
  subTitle: { textAlign: "center" },
  actionContainer: {
    position: "absolute",
    bottom: RF(75),
    alignSelf: "center",
  },
});

export default styles;

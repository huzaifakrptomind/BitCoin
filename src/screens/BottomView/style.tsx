import { StyleSheet } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";

const styles = StyleSheet.create({
  bottomTabView: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabInerView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: THEME.COLORS.skyBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTitle: {
    color: THEME.COLORS.white,
    fontWeight: "bold",
  },
});

export default styles;

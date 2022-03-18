import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  View,
  TextStyle,
} from "react-native";
import { THEME } from "../../utils/theme";
import GLOBAL_STYLE from "../../utils/theme/global";
import { RF } from "../../utils/theme/responsive";
// import { THEME, secondaryBackgroundColorProperty } from "../../theme";
// import GLOBAL_STYLE from "../../theme/global";
// import { HP, RF } from "../../theme/responsive";
import Icon from "react-native-vector-icons/Entypo";

interface Props extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: string;
  loading?: boolean;
  small?: boolean;
  disabled?: boolean;
  disabledMessage?: string;
}

const PrimaryButton = (props: Props) => {
  let titleColorProp = {
    color: props.disabled ? THEME.COLORS.textLight : THEME.COLORS.white,
  };

  let shadowColorProp = {
    shadowColor: props.disabled ? THEME.COLORS.black : THEME.COLORS.yellow,
  };

  let buttonBackgroundColor = () => {
    if (props.disabled) {
      return { backgroundColor: THEME.COLORS.white };
    } else {
      return { backgroundColor: THEME.COLORS.lightBlue };
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[
        shadowColorProp,
        buttonBackgroundColor(),
        props.small ? styles.smallContainer : styles.container,
        props.buttonStyle,
      ]}
      disabled={props.loading || props.disabled}
      activeOpacity={0.7}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {props.icon && <Icon name={props.icon} style={styles.icon} />}
        {props.loading ? (
          <ActivityIndicator color={THEME.COLORS.white} />
        ) : (
          <Text style={[styles.buttonText, titleColorProp, props.textStyle]}>
            {props.title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: "42%",
    height: RF(40),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    // marginBottom: THEME.MARGIN.NORMAL,
    flexDirection: "row",
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  smallContainer: {
    width: "60%",
    height: RF(40),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    // marginBottom: THEME.MARGIN.NORMAL,
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  icon: {
    fontSize: 20,
    color: THEME.COLORS.white,
    marginRight: THEME.MARGIN.LOW,
  },
  buttonText: {
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.SMALL,
  },
});

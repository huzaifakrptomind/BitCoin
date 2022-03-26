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
import Icon from "react-native-vector-icons/Feather";
import { IconProps } from "react-native-vector-icons/Icon";

interface Props extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: string;
  loading?: boolean;
  large?: boolean;
  disabled?: boolean;
  disabledMessage?: boolean;
  titleColorProp?:string
  // iconStyle?:StyleProp<IconProps>
}

const PrimaryButton = (props: Props) => {
  let titleColorProp = {
    color: props.disabledMessage ? THEME.COLORS.blacklight : THEME.COLORS.white,
  };

  let shadowColorProp = {
    shadowColor: props.disabledMessage ? THEME.COLORS.black : THEME.COLORS.yellow,
  };

  let buttonBackgroundColor = () => {
    if (props.disabledMessage) {
      return { backgroundColor: THEME.COLORS.white };
    } else {
      return { backgroundColor: THEME.COLORS.secondaryLightBackground };
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[
        shadowColorProp,
        buttonBackgroundColor(),
        props.large ? styles.largeContainer : styles.container,
        props.buttonStyle,
      ]}
      // disabled={props.loading || props.disabled}
      activeOpacity={0.7}
    
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* {props.loading ? (
          <ActivityIndicator color={THEME.COLORS.white} />
        ) : ( */}
          <Text style={[styles.buttonText, titleColorProp, props.textStyle]}>
            {props.title}
          </Text>
        {/* )} */}
        {props.icon && <Icon name={props.icon} style={[styles.icon,]}  />}
      
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: "42%",
    height: RF(52),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
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
  largeContainer: {
    // width: "60%",
    width: RF(290),
    // borderRadius: RF(7),
    height: RF(52),
    alignSelf: "center",
    borderRadius: THEME.RADIUS.BOX,
    ...GLOBAL_STYLE.CENTER,
    marginBottom: THEME.MARGIN.NORMAL,

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
    fontSize: 25,
    color: THEME.COLORS.white,
    marginLeft:RF(55)
  },
  buttonText: {
    fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
    fontSize: THEME.FONTS.SIZE.SMALL,
  },
});

import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ICONS } from "../../../asset";
import { THEME } from "../../utils/theme";
import GLOBAL_STYLE from "../../utils/theme/global";
import { RF } from "../../utils/theme/responsive";

interface Props {
  title?: string;
  rightIcon?: Source | number;
  onPressBack?: () => void;
  onPressQR?: () => void;
  theme?: "dark" | "light";
  absolute?: boolean;
  showLogo?: boolean;
  showBack?: boolean;
  showLeft?: boolean;
  showQR?: boolean;
  onPressLogo?: () => void;

  showShadow?: boolean;
}

const AppHeader = (props: Props) => {
  const {
    title,
    rightIcon = ICONS.crossCircle,
    onPressBack,
    onPressQR,
    theme = "light",
    absolute,
    showShadow,
  } = props;

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle={theme == "light" ? "dark-content" : "light-content"}
        backgroundColor={THEME.COLORS.lightGray}
      />
      <View
        style={[
          styles.container,
          {
            paddingTop:
              Platform.OS == "android"
                ? StatusBar.currentHeight
                : insets.top * 1.3,
          },
          {
            backgroundColor: THEME.COLORS.lightGray,
          },
          absolute && {
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: 999,
          },
          props.showShadow && {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            ...GLOBAL_STYLE.CENTER,
            width: "80%",
          }}
        >
          {props.showLogo && (
            <TouchableOpacity onPress={props.onPressLogo}>
              <FastImage
                source={ICONS.backArrow}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>

        {props.showBack && (
          <TouchableOpacity
            style={styles.backIcon}
            onPress={onPressBack ? onPressBack : navigation.goBack}
          >
            <FastImage
              source={rightIcon}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              // tintColor={THEME.COLORS.black}
            />
          </TouchableOpacity>
        )}
        {props.showLeft && (
          <TouchableOpacity
            style={styles.backArrow}
            onPress={onPressBack ? onPressBack : navigation.goBack}
          >
            <FastImage
              // style={styles.backArrow}
              source={rightIcon}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              // tintColor={THEME.COLORS.black}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: THEME.PADDING.NORMAL,
    // paddingBottom: RF(15),
    backgroundColor: "red",
    justifyContent: "space-between",
  },
  rightButton: {
    alignItems: "center",
    marginRight: THEME.MARGIN.LOW,
  },
  backIcon: {
    // flex: 1,
    height: RF(25),
    width: RF(35),
    alignSelf: "flex-end",
    color: THEME.COLORS.white,
  },
  backArrow: {
    // flex: 1,
    height: RF(25),
    width: RF(25),
  },
  logo: {
    height: RF(25),
    width: RF(40),
    // marginRight: "-2%",
  },
  title: {
    flex: 1,
    fontSize: THEME.FONTS.SIZE.LARGE,
    fontFamily: THEME.FONTS.TYPE.BOLD,
    color: THEME.COLORS.black,
    textAlign: "center",
  },
});

export default AppHeader;

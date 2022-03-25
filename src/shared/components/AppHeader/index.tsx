import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
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
  showAdd?: boolean;
  showDetails?: boolean;
  showEye?: boolean;
  showReload?: boolean;
  showCross?: boolean;
  swapAction?: () => void;
  reloadAction?: () => void;
  detailAction?: () => void;
  backAction?: () => void;
  onPressAddToken?: () => void;
  headerStyle?: StyleProp<ViewStyle>;
  showSearchBar?: boolean;
  onPressLogo?: () => void;
  statusbarColor: string;
  showShadow?: boolean;
  headerBackgroundColor: string;
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
    statusbarColor,
    headerBackgroundColor,
  } = props;

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle={theme == "light" ? "dark-content" : "light-content"}
        backgroundColor={props.statusbarColor}
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
            backgroundColor: props.headerBackgroundColor,
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
        {/* <View style={styles.left}>
          {props.showBack ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.backAction ? props.backAction : navigation.goBack}
              style={styles.backView}
            >
              <FastImage
                source={ICONS.ARROW_BACK}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon}
                // tintColor={fontColor()}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
        <View style={styles.right}>
          {props.showReload ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.reloadAction}
              style={styles.rightButton}
            >
              <FastImage
                source={ICONS.AUTO_HIDE}
                resizeMode={FastImage.resizeMode.contain}
                style={{ width: RF(32), height: RF(32) }}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
          {props.showEye ? (
            <TouchableOpacity
              activeOpacity={1}
              // onPress={toggleEye}
              style={styles.rightButton}
            >
              <FastImage
                source={ICONS.EYE}
                resizeMode={FastImage.resizeMode.contain}
                style={{ width: RF(32), height: RF(32) }}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
          {props.showAdd ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.onPressAddToken}
              style={styles.rightButton}
            >
              <FastImage
                source={ICONS.HEADER_CROSS}
                resizeMode={FastImage.resizeMode.contain}
                style={{ width: RF(32), height: RF(32) }}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
          {props.showDetails ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.detailAction}
              style={styles.rightButton}
            >
              <FastImage
                source={ICONS.HEADER_CROSS}
                resizeMode={FastImage.resizeMode.contain}
                style={{ width: RF(32), height: RF(32) }}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}

          {props.showCross ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.backAction}
              style={styles.rightButton}
            >
              <FastImage
                tintColor={THEME.COLORS.biometryCircleButtonColor}
                source={ICONS.cross}
                resizeMode={FastImage.resizeMode.contain}
                style={{ width: RF(22), height: RF(22) }}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View> */}
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
                source={ICONS.scannerBar}
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
        {props.showReload && (
          <TouchableOpacity
            style={styles.backleft}
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
  right: {
    flexDirection: "row",
  },
  icon: {
    width: RF(22),
    height: RF(22),
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
  backleft: {
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
  backView: {
    alignSelf: "center",
    height: "100%",
    width: "15%",
  },
  left: {
    flexDirection: "row",
    width: "80%",
    // height: '100%',
  },
});

export default AppHeader;

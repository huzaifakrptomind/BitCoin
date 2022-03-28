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
import AppText from "../AppText";

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
        // barStyle={theme == "light" ? "dark-content" : "light-content"}
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
         <View style={styles.left}>
          {props.showBack ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.backAction ? props.backAction : navigation.goBack}
              style={styles.backView}
            >
              <FastImage
                source={ICONS.backArrow}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.icon}
                // tintColor={fontColor()}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <AppText style={styles.title}>{title}</AppText>
       </View>
        <View style={styles.right}>
          {props.showReload ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.reloadAction}
              style={styles.rightButton}
            >
              <FastImage
                source={ICONS.reload}
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
                source={ICONS.eye}
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
                source={ICONS.plusCircle}
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
                source={ICONS.QR_CODE}
                resizeMode={FastImage.resizeMode.contain}
                style={{ width: RF(20), height: RF(20) }}
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
                source={ICONS.crossCircle}
                resizeMode={FastImage.resizeMode.contain}
                style={{ width: RF(22), height: RF(22) }}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
     
       
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: THEME.PADDING.NORMAL,
    backgroundColor: "red",
  },
  rightButton: {
    alignItems: "center",
    marginRight: THEME.MARGIN.LOW,
  },
  right: {
    flexDirection: "row",
    flex:1,
    // backgroundColor:'gray',
    justifyContent:'flex-end'

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
    height: RF(25),
    width: RF(25),
  },
  logo: {
    height: RF(25),
    width: RF(40),
  },
  title: {
    flex: 1,
    fontSize: THEME.FONTS.SIZE.LARGE,
    fontFamily: THEME.FONTS.TYPE.BOLD,
    color: THEME.COLORS.black,
    textAlign: "center",
  },
  backView: {

  },
  left: {
    // backgroundColor:'green',
    flex:1
  },
});

export default AppHeader;

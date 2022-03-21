import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import SplashScreen from "react-native-splash-screen";
import { ICONS } from "../../asset";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";
import styles from "./style";
// interface Props {
//   item: IntroSlide;
// }
interface Props extends GenericNavigation {}

const Biometry = (props: Props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.lightGray} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader
          showBack
          // rightIcon={ICONS.backArrow}
          title="Biometry"
          // theme="dark"
          absolute
        />
        {/* <AppHeader title="Security Settings" showShadow showBack /> */}

        <View
          // key={props.item.key}
          style={[styles.container]}
        >
          <View
            style={{
              flex: 1,
              // justifyContent: "center",
            }}
          >
            <FastImage
              source={ICONS.scanner}
              style={styles.slideImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <AppText style={[styles.slideSubTitle]}>
              Your finances and tokens are always under control, use them safely
              and comfortably
            </AppText>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Biometry;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sliderDoneButton: {
//     color: THEME.COLORS.yellow,
//     // fontFamily: THEME.FONTS.TYPE.REGULAR,
//     fontSize: THEME.FONTS.SIZE.SMALL,
//     marginVertical: THEME.MARGIN.NORMAL,
//     alignSelf: "center",
//   },
// });

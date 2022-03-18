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
import AppText from "../../shared/components/AppText";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { THEME } from "../../shared/utils/theme";
import styles from "./style";
// interface Props {
//   item: IntroSlide;
// }

const Home = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.secondaryDarkBackground} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <View
          // key={props.item.key}
          style={[styles.container]}
        >
          <View
            style={{ flex: 5, justifyContent: "center", alignItems: "center" }}
          >
            <FastImage
              source={ICONS.logo}
              style={styles.slideImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <AppText style={[styles.slideSubTitle]}>
              Your finances and tokens are always under control, use them safely
              and comfortably
            </AppText>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.actionContainer}>
              <PrimaryButton
                disabled={false}
                textStyle={{ fontSize: THEME.FONTS.SIZE.XSMALL }}
                title="Create Wallet "
                // onPress={onEnableBiometry}
              />
              <PrimaryButton
                disabled={true}
                textStyle={{ fontSize: THEME.FONTS.SIZE.XSMALL }}
                title="Restore Wallet "
                // onPress={onEnableBiometry}
              />
            </View>
          </View>
          <AppText style={[styles.slideSubTitle]}>Powerd By EgonSwap</AppText>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

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

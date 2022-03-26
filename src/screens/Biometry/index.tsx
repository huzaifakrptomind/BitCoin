import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
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

interface Props extends GenericNavigation {}

const Biometry = (props: Props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.lightGray} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader title="Biometry" absolute />
        <View style={[styles.container]}>
          <View style={styles.topView}>
            <FastImage
              source={ICONS.scanner}
              style={styles.slideImage}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.middleView}>
            <AppText style={styles.slideTitle}>Increase Your Security </AppText>
            <AppText style={styles.slideSubTitle}>
              Activate biometrics in your wallet to make it even more secure
            </AppText>
          </View>
          <View style={styles.bottomView}>
            <PrimaryButton
            large
              // buttonStyle={styles.bottombtn}
              title="Enable Biometry Now"
              onPress={() => props.navigation?.navigate("BottomView")}
            />
            <PrimaryButton
            large
            disabledMessage
              buttonStyle={[
                { borderWidth: RF(1), borderColor: THEME.COLORS.blacklight, },
              ]}
              title="Skip"
              onPress={() => props.navigation?.goBack()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Biometry;

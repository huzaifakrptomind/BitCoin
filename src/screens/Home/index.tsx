import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import SplashScreen from "react-native-splash-screen";
import IntroSlider from "../../shared/components/IntroSlider";
import {
  INTRO_SLIDES,
  IOS_INTRO_SLIDES,
} from "../../shared/utils/AppConstants";
import { IntroSlide } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
const Home = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppIntroSlider
          bottomButton={true}
          showDoneButton={true}
          showSkipButton={true}
          showNextButton={false}
          renderItem={({ item }: { item: IntroSlide }) => (
            <IntroSlider item={item} />
          )}
          data={Platform.OS === "android" ? INTRO_SLIDES : IOS_INTRO_SLIDES}
          //   onSkip={onDone}
          //   onDone={onDone}
          dotStyle={{ backgroundColor: THEME.COLORS.textLight }}
          activeDotStyle={{ backgroundColor: THEME.COLORS.yellow }}
          renderDoneButton={() => (
            <Text style={styles.sliderDoneButton}>Skip</Text>
          )}
          renderSkipButton={() => (
            <Text style={styles.sliderDoneButton}>Skip</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderDoneButton: {
    color: THEME.COLORS.yellow,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    fontSize: THEME.FONTS.SIZE.SMALL,
    marginVertical: THEME.MARGIN.NORMAL,
    alignSelf: "center",
  },
});

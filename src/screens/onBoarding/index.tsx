import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import { GenericNavigation } from "../../shared/utils/models/types";
import styles from "./styles";
interface Props extends GenericNavigation {}

const onBoarding = (props: Props) => {
  console.log("---props---", props);

  const [onDone, setonDone] = useState(false);
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
          data={INTRO_SLIDES}
          //  onSkip={}
          //  onDone={onDone}
          // dotStyle={{ backgroundColor: THEME.COLORS.dotColor }}
          activeDotStyle={{ backgroundColor: THEME.COLORS.dotColor }}
          renderDoneButton={() => (
            <TouchableOpacity
              onPress={() => props.navigation?.navigate("Home")}
            >
              <Text style={styles.sliderDoneButton}>Skip</Text>
            </TouchableOpacity>
          )}
          renderSkipButton={() => (
            <Text style={styles.sliderDoneButton}>Skip</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default onBoarding;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sliderDoneButton: {
//     color: THEME.COLORS.textLight,
//     // fontFamily: THEME.FONTS.TYPE.REGULAR,
//     fontSize: THEME.FONTS.SIZE.SMALL,
//     marginVertical: THEME.MARGIN.NORMAL,
//     alignSelf: "center",
//   },
// });

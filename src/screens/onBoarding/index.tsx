import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import IntroSlider from "../../shared/components/IntroSlider";
import { INTRO_SLIDES } from "../../shared/utils/AppConstants";
import { IntroSlide } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { GenericNavigation } from "../../shared/utils/models/types";
import styles from "./styles";
interface Props extends GenericNavigation {}

const onBoarding = (props: Props) => {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={THEME.COLORS.intro1Color} />
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

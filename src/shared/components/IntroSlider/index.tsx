import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { IntroSlide } from "../../utils/models/types";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import AppText from "../AppText";
interface Props {
  item: IntroSlide;
}

const IntroSlider = (props: Props) => {
  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        translucent
        backgroundColor="transparent"
      />
      <View
        key={props.item.key}
        style={[styles.container, { backgroundColor: props.item.color }]}
      >
        <FastImage
          source={props.item.image}
          style={styles.slideImage}
          resizeMode={FastImage.resizeMode.contain}
        />
        <AppText style={[styles.slideTitle]}>{props.item.title}</AppText>
        <Text style={[styles.slideSubTitle]}>{props.item.text}</Text>
      </View>
    </>
  );
};

export default IntroSlider;

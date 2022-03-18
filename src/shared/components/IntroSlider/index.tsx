import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IntroSlide } from "../../utils/models/types";
import {
  backgroundColorProperty,
  fontColorPropery,
  THEME,
} from "../../utils/theme";
import FastImage from "react-native-fast-image";
import { RF } from "../../utils/theme/responsive";
import styles from "./styles";
import AppText from "../AppText";
interface Props {
  item: IntroSlide;
}

const IntroSlider = (props: Props) => {
  console.log("---colors---", props);
  // {[styles.container, {paddingBottom: insets.bottom}]}
  return (
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
  );
};

export default IntroSlider;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: THEME.PADDING.HIGH,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: props.item.color,
//   },
//   slideTitle: {
//     fontSize: THEME.FONTS.SIZE.XLARGE,
//     // fontFamily: THEME.FONTS.TYPE.REGULAR,
//     textAlign: "center",
//     marginTop: THEME.MARGIN.HIGH,
//     marginBottom: THEME.MARGIN.NORMAL,
//   },
//   slideImage: { width: RF(220), height: RF(220), alignSelf: "center" },
//   slideSubTitle: {
//     // fontFamily: THEME.FONTS.TYPE.REGULAR,
//     textAlign: "center",
//     fontSize: THEME.FONTS.SIZE.SMALL,
//     // lineHeight: THEME.FONTS.SIZE.XLARGE,
//   },
// });

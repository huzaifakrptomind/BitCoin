import React, { useEffect, useState } from "react";
import {
  FlatList,
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
interface Props extends GenericNavigation {}

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Seed = (props: Props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.lightGray} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader showBack showLogo title="Seed" absolute />
        <View style={[styles.container]}>
          <AppText style={[styles.slideSubTitle]}>
            Sed porta nisl orci. Nullam ex magna, tristique ut ligula a,
            eleifend sodales tellus. Nunc sed molestie nisl. Sed porta nisl
            orci. Nullam ex magna, tristique ut ligula a, eleifend sodales
            tellus. Nunc sed molestie nisl.
          </AppText>
          <View style={{ flex: 3, backgroundColor: "gray" }}>
            <FlatList
              contentContainerStyle={{}}
              data={DATA}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: "green",
              justifyContent: "center",
            }}
          >
            <PrimaryButton
              buttonStyle={{ width: RF(290), borderRadius: RF(10) }}
              title="Send"

              // onPress={() => navigation?.navigate('signup')}
            />
            <PrimaryButton
              buttonStyle={{ width: RF(290), borderRadius: RF(10) }}
              title="Send"

              // onPress={() => navigation?.navigate('signup')}
            />
          </View>

          {/* <View style={{ backgroundColor: "green" }}>
            <Text>dsdsd</Text>
          </View>
          <View style={{ backgroundColor: "green" }}>
            <Text>dsdsd</Text>
          </View> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Seed;

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

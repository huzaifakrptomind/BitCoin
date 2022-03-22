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
    title: "Reality",
  },
  {
    id: "2",
    title: "Realitys",
  },
  {
    id: "3",
    title: "Third",
  },
  {
    id: "4",
    title: "Reality",
  },
  {
    id: "5",
    title: "Realitys",
  },
  {
    id: "6",
    title: "Third",
  },
  {
    id: "7",
    title: "Reality",
  },
  {
    id: "8",
    title: "Realitys",
  },
  {
    id: "9",
    title: "Third",
  },
  {
    id: "10",
    title: "Realitys",
  },
  {
    id: "11",
    title: "Third",
  },
];
const Item = ({ title, id }) => (
  <View style={styles.item}>
    <View style={styles.outerView}>
      <View style={styles.leftView}>
        <AppText style={styles.titleItem}>{id}</AppText>
      </View>
      <View style={styles.rightView}>
        <AppText style={styles.innerItemText}>{title}</AppText>
      </View>
    </View>
  </View>
);

const WalletMain = (props: Props) => {
  const renderItem = ({ item }) => <Item title={item.title} id={item.id} />;

  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.secondaryDarkBackground} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader title="WalletMain" showBack showLeft absolute />
        <View style={[styles.container]}>
          <View
            style={{
              flex: 2,
              backgroundColor: THEME.COLORS.secondaryDarkBackground,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <AppText style={styles.dollerTitle}>$</AppText>
              <AppText style={styles.slideTitle}>3,561. </AppText>
              <AppText style={styles.decimalTitle}>32</AppText>
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <Text>Income</Text>
              <Text>Income</Text> */}
              <View style={{ flexDirection: "row" }}></View>
            </View>
          </View>
          <View
            style={{ flex: 4, backgroundColor: THEME.COLORS.lightGray }}
          ></View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WalletMain;

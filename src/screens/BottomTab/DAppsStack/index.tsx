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
import { ICONS } from "../../../asset";
import AppHeader from "../../../shared/components/AppHeader";
import AppText from "../../../shared/components/AppText";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import { GenericNavigation } from "../../../shared/utils/models/types";
import { THEME } from "../../../shared/utils/theme";
import { RF } from "../../../shared/utils/theme/responsive";

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

const DAppsStack = (props: Props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const renderItem = ({ item }) => <Item title={item.title} id={item.id} />;

  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.lightGray} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader showBack showLogo title="DAppsStack" absolute />
        <View style={[styles.container]}></View>
      </SafeAreaView>
    </>
  );
};

export default DAppsStack;

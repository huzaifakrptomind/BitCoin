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
import AppHeader from "../../../shared/components/AppHeader";
import AppText from "../../../shared/components/AppText";
import { GenericNavigation } from "../../../shared/utils/models/types";
import { THEME } from "../../../shared/utils/theme";

import styles from "./style";
interface Props extends GenericNavigation {}

const NewsStack = (props: Props) => {
  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.lightGray} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader showBack showLogo title="Seed" absolute />
        <View style={[styles.container]}></View>
      </SafeAreaView>
    </>
  );
};

export default NewsStack;

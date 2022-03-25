import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import FastImage from "react-native-fast-image";
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

const Seed = (props: Props) => {
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
          <View style={styles.flatView}>
            <FlatList
              contentContainerStyle={{}}
              data={DATA}
              numColumns={2}
              renderItem={({ item, index }) => {
                return <Item title={item.title} id={item.id} />;
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.copyView}>
            <FastImage
              source={ICONS.copy}
              style={styles.slideImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <AppText style={styles.slideCopytitle}>Copy</AppText>
          </View>
          <View style={styles.bottomView}>
            <PrimaryButton
              buttonStyle={styles.bottombtn}
              title="I've Written It Down"
              onPress={() => props.navigation?.navigate("Biometry")}
            />
            <PrimaryButton
              buttonStyle={[
                styles.bottombtn,
                { borderWidth: RF(1), borderColor: THEME.COLORS.blacklight },
              ]}
              title="Get New Seed"
              disabled={true}
              onPress={() => props.navigation?.navigate("Biometry")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Seed;

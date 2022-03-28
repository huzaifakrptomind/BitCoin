import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../asset";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";

import styles from "./style";
interface Props extends GenericNavigation {}

const DATA = [
  {
    id: "1",
    title: "Reality",
    image: ICONS.bitcoin,
    color: THEME.COLORS.bitcoinColor,
    rateColor: THEME.COLORS.red,
  },
  {
    id: "2",
    title: "Realitys",
    image: ICONS.etherum,
    color: THEME.COLORS.etherumColor,
    rateColor: THEME.COLORS.red,
  },
  {
    id: "3",
    title: "Third",
    image: ICONS.dash,
    color: THEME.COLORS.dashColor,
    rateColor: THEME.COLORS.dashRateColor,
  },
  {
    id: "4",
    title: "Reality",
    image: ICONS.doge,
    color: THEME.COLORS.dogeCOlor,
    rateColor: THEME.COLORS.red,
  },
  {
    id: "5",
    title: "Third",
    image: ICONS.dash,
    color: THEME.COLORS.dashColor,
    rateColor: THEME.COLORS.dashRateColor,
  },
  {
    id: "6",
    title: "Reality",
    image: ICONS.doge,
    color: THEME.COLORS.dogeCOlor,
    rateColor: THEME.COLORS.red,
  },
];
const Item = ({ title, id, image, color, rate, props }) => (
  <TouchableOpacity
    style={{}}
    onPress={() => props.navigation.navigate("Receive")}
  >
    <View style={styles.cardView}>
      <View style={styles.lefView}>
        <FastImage
          source={image}
          style={styles.coinImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.middleView}>
        <View style={{}}>
          <AppText style={[styles.coinTitle, { color: color }]}>
            {title}
          </AppText>
          <View style={{ flexDirection: "row" }}>
            <AppText style={styles.coinSubTitle}>$51206.00 </AppText>
            <AppText style={[styles.coinSubTitle, { color: rate }]}>
              -1.01%
            </AppText>
          </View>
          {/* <AppText style={styles.coinUsd}>{"0.00"}</AppText> */}
        </View>
      </View>
      <View style={styles.rightView}>
        <AppText style={styles.amountTitle}>12.330</AppText>
        <AppText
          style={[styles.rateTitle, { color: THEME.COLORS.disabledTextLight }]}
        >
          0.00 USD
        </AppText>
      </View>
    </View>
  </TouchableOpacity>
);

const WalletMain = (props: Props) => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      id={item.id}
      image={item.image}
      color={item.color}
      rate={item.rateColor}
      props={props}
      // pro
    />
  );

  return (
    <>
      <SafeAreaView style={[{ flex: 1 }]}>
      <AppHeader
          // title="WalletMain"
               showReload showEye showAdd  
          statusbarColor={THEME.COLORS.secondaryBackground}
          headerBackgroundColor={THEME.COLORS.secondaryBackground}
         
          absolute
        />
        <View style={[styles.container]}>
          <View style={styles.firstContainer}>
            <View style={styles.firstUpperView}>
              <AppText style={styles.dollerTitle}>$</AppText>
              <AppText style={styles.slideTitle}>3,561.</AppText>
              <AppText style={styles.decimalTitle}>32</AppText>
            </View>
            <View style={styles.firstBottomView}>
              <View style={styles.firstBottomLeftView}>
                <FastImage
                  source={ICONS.downIncome}
                  style={styles.slideImage}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.firstBottomInerRightView}>
                  <View>
                    <AppText
                      style={[
                        styles.slideSubTitle,
                        { color: THEME.COLORS.white },
                      ]}
                    >
                      Income
                    </AppText>
                  </View>
                  <AppText style={styles.incomeTitle}>$300.67</AppText>
                </View>
              </View>
              <View style={styles.firstBottomRightView}>
                <FastImage
                  source={ICONS.downIncome}
                  style={styles.slideImage}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <View style={styles.firstBottomInerRightView}>
                  <View>
                    <AppText
                      style={[
                        styles.slideSubTitle,
                        { color: THEME.COLORS.white },
                      ]}
                    >
                      Expance
                    </AppText>
                  </View>
                  <AppText style={styles.incomeTitle}>$300.67</AppText>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{}}
              data={DATA}
              numColumns={1}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WalletMain;

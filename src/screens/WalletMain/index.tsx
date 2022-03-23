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
    image:ICONS.bitcoin,
    color:THEME.COLORS.bitcoinColor,
    

  },
  {
    id: "2",
    title: "Realitys",
    image:ICONS.etherum,
    color:THEME.COLORS.etherumColor


  },
  {
    id: "3",
    title: "Third",
    image:ICONS.dash,
    color:THEME.COLORS.dashColor,
    rateColor:THEME.COLORS.dashRateColor


  },
  {
    id: "4",
    title: "Reality",
    image:ICONS.doge,
    color:THEME.COLORS.dogeCOlor


  },
 
];
const Item = ({ title, id,image,color,rate }) => (
  <View style={{}}>
    <View style={{}}>
      <View style={{backgroundColor:THEME.COLORS.white,width:RF(135),height:RF(187),borderRadius:RF(15),elevation:RF(3),margin:RF(12),}}>
      <FastImage
        source={image}
        style={styles.coinImage}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={{padding:THEME.PADDING.LOW}}>
       <AppText style={[styles.coinTitle,{color:color}]} >{title}</AppText>
        <View style={{flexDirection:'row'}}>
        <AppText style={styles.coinSubTitle} >$51206.00  </AppText>
        <AppText style={[styles.coinSubTitle,{color:rate}]} >-1.01%</AppText>
        </View>
      <AppText style={styles.coinUsd} >{'0.00'}</AppText>
      </View>
      <View style={{backgroundColor:color,borderBottomLeftRadius:RF(15),flex:1,borderBottomRightRadius:RF(15)}}>
      <Text>asas</Text>
      </View>
     
      </View>
      {/* <View style={{}}>
        <AppText style={{}}>{title}</AppText> $51206.00 -1.01%
      </View> */}
    </View>
  </View>
);

const WalletMain = (props: Props) => {
  const renderItem = ({ item }) => <Item title={item.title} id={item.id} image={item.image} color={item.color} rate={item.rateColor} />;

  
  return (
    <>
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader title="WalletMain" statusbarColor={THEME.COLORS.secondaryDarkBackground} headerBackgroundColor={THEME.COLORS.secondaryDarkBackground} showBack showLeft absolute />
        <View style={[styles.container]}>
          <View
            style={styles.firstContainer}
          >
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
                <View><AppText style={styles.slideSubTitle}>Income</AppText></View>
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
                <View><AppText style={styles.slideSubTitle}>Expance</AppText></View>
                <AppText style={styles.incomeTitle}>$300.67</AppText>
               
                </View>
               
              </View>
              
            </View>
          </View>
          <View
            style={styles.secondContainer}
          >
             <FlatList
              contentContainerStyle={{}}
              data={DATA}
              numColumns={2}
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

import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import SplashScreen from "react-native-splash-screen";
import { ICONS } from "../../asset";
import AddressInput from "../../shared/components/AddressInput";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";
import styles from "./style";

import faker from "faker";
interface Props extends GenericNavigation {}

const historyData = [...Array(10).keys()].map((_, i) => {
  return {
    coinName: faker.name.jobTitle(),
    price: faker.finance.amount(),
    date: faker.date.soon(),
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    description: faker.lorem.sentences(),
    coinImage: faker.image.avatar(),
  };
});
const DATA = [
  {
    id: "1",
    title: "Reality",
    image: ICONS.pending,
    color: THEME.COLORS.bitcoinColor,
    amount: 0.024,
    symbol: "BTC",
    date: "Oct 19, 2019, 5:42:44 AM",
    status: "Pending",
  },
  {
    id: "2",
    title: "Reality",
    image: ICONS.pending,
    color: THEME.COLORS.bitcoinColor,
    amount: 0.024,
    symbol: "BTC",
    date: "Oct 19, 2019, 5:42:44 AM",
    status: "Pending",
  },
  {
    id: "3",
    title: "Reality",
    image: ICONS.pending,
    color: THEME.COLORS.bitcoinColor,
    amount: 0.024,
    symbol: "BTC",
    date: "Oct 19, 2019, 5:42:44 AM",
    status: "Pending",
  },
  // {
  //   id: "4",
  //   title: "Reality",
  //   image: ICONS.doge,
  //   color: THEME.COLORS.dogeCOlor,
  // },
];
const Item = ({ title, image, amount, symbol, date, status }) => (
  <TouchableOpacity
    style={{}}
    // onPress={() => props.navigation.navigate("CoinDetails")}
  >
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        height: RF(55),
        // justifyContent: "center",
        backgroundColor: "#E6E6E6",
        // width: RF(200),
        alignItems: "center",
        marginVertical: RF(2),
      }}
    >
      <View
        style={{
          // backgroundColor: "gray",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FastImage
          source={image}
          style={styles.slideImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View
        style={{
          // backgroundColor: "green",
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <View style={{ flexDirection: "row", margin: RF(3) }}>
          <AppText style={styles.amountTitle}>{amount}</AppText>
          <AppText
            style={[styles.amountTitle, { marginLeft: THEME.MARGIN.MID_LOW }]}
          >
            {symbol}
          </AppText>
        </View>
        <AppText style={styles.dateTitle}>{date}</AppText>
      </View>
      <View
        style={{
          // backgroundColor: "gray",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: RF(90),
            height: RF(30),
            borderWidth: RF(1),
            borderRadius: THEME.RADIUS.OVAL,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText style={[styles.statusTitle]}>{status}</AppText>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const CoinDetails = (props: Props) => {
  console.log(historyData);

  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.lightGray} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader showBack showLogo title="Coin Deatils" absolute />
        <View style={[styles.container]}>
          <View
            style={{
              flex: 4,
              alignItems: "center",
              marginTop: RF(60),
            }}
          >
            <View>
              <FastImage
                source={ICONS.bitcoin}
                style={styles.coinImage}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <AppText style={styles.slideSubTitle}> Bitcoin</AppText>
            <View
              style={{
                width: RF(290),
                height: RF(140),
                borderRadius: THEME.RADIUS.BOX,
                marginTop: RF(20),
                elevation: RF(10),
                // backgroundColor: "orange",
                shadowColor: "#000",
                backgroundColor: "white",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
              }}
            >
              <View style={{ marginHorizontal: RF(10) }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: RF(10),
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <FastImage
                      source={ICONS.question}
                      style={styles.questionImage}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <AppText style={styles.innerItemText}>Total</AppText>
                  </View>
                  <FastImage
                    source={ICONS.question}
                    style={styles.questionImage}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
                <AppText
                  style={{
                    fontSize: THEME.FONTS.SIZE.XLARGE,
                    color: THEME.COLORS.secondaryDarkBackground,
                    fontWeight: "600",
                  }}
                >
                  $ 31,000 BTC
                </AppText>
                <View style={{ margin: RF(10) }}>
                  <AppText style={styles.rateTitle}>112,000 USD</AppText>
                  <AppText style={styles.rateTitle}>574,130 RMB</AppText>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: RF(10),
              }}
            >
              {/* <AddressInput
                inputStyle={{
                  borderWidth: RF(1),
                  backgroundColor: THEME.COLORS.blueLightShadow,
                  borderColor: THEME.COLORS.lightBlue,
                  width: RF(140),
                }}
                // value={address}
                noContacts
                placeholder="Send"
                // onChangeText={setAddress}
                // onChangeAddress={onChangeAddress}
                // toggleModal={toggleContactModal}
              />
              <AddressInput
                noContacts
                editable
                inputStyle={{
                  borderWidth: RF(1),
                  backgroundColor: THEME.COLORS.blueLightShadow,
                  borderColor: THEME.COLORS.lightBlue,
                  width: RF(140),
                  marginHorizontal: RF(10),
                }}
                // value={address}
                placeholder="Receive"
                // onChangeText={setAddress}
                // onChangeAddress={onChangeAddress}
                // toggleModal={toggleContactModal}
              /> */}
            </View>
            <PrimaryButton
              buttonStyle={styles.bottombtn}
              title="I've Written It Down"
              onPress={() => props.navigation?.navigate("Biometry")}
            />
            <PrimaryButton
              buttonStyle={styles.bottombtn}
              title="I've Written It Down"
              onPress={() => props.navigation?.navigate("Biometry")}
            />
          </View>
          <View style={{ flex: 2 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: RF(15),
              }}
            >
              <AppText style={styles.slideCopytitle}>Transaction</AppText>
              <Text>24 March, 2021</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: RF(15),
                marginVertical: RF(10),
              }}
            >
              <Text style={{ marginRight: RF(10) }}>All</Text>
              <Text style={{ marginRight: RF(10) }}>Received</Text>
              <Text style={{ marginRight: RF(10) }}>Sent</Text>
            </View>
            <FlatList
              contentContainerStyle={{}}
              showsVerticalScrollIndicator={false}
              data={DATA}
              numColumns={1}
              renderItem={({ item }) => {
                return (
                  <Item
                    title={item.title}
                    // id={item.id}
                    image={item.image}
                    amount={item.amount}
                    symbol={item.symbol}
                    date={item.date}
                    status={item.status}
                    // color={item.color}
                    // // rate={item.rateColor}
                    // props={props}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CoinDetails;

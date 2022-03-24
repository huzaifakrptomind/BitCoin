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
import AddressInput from "../../shared/components/AddressInput";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";
import styles from "./style";
interface Props extends GenericNavigation {}

const CoinDetails = (props: Props) => {
  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.lightGray} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader showBack showLogo title="Coin Deatils" absolute />
        <View style={[styles.container]}>
          <View
            style={{
              flex: 4,
              margin: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginTop: RF(35),
              }}
            >
              <FastImage
                source={ICONS.bitcoin}
                style={styles.slideImage}
                resizeMode={FastImage.resizeMode.contain}
              />
              <AppText style={styles.slideSubTitle}> Bitcoin</AppText>
            </View>
            <View
              style={{
                width: RF(290),
                height: RF(130),
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
                <AppText style={styles.amountTitle}>$ 31,000 BTC</AppText>
                <View style={{ margin: RF(10) }}>
                  <AppText style={styles.rateTitle}>$ 112,000 USD</AppText>
                  <AppText style={styles.rateTitle}>$ 574,130 RMB</AppText>
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
          <View style={{ flex: 2, backgroundColor: "orange" }}>
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
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CoinDetails;

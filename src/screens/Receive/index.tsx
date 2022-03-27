import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import FastImage from "react-native-fast-image";
import SplashScreen from "react-native-splash-screen";
import { ICONS } from "../../asset";
import AddressInput from "../../shared/components/AddressInput";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import PinModal from "../../shared/components/PinModal";
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

const Receive = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={[{ flex: 1 }]}>
        <AppHeader showBack showLogo title="Receive" absolute />
        <View style={[styles.container]}>
          <View style={styles.upperContainer}>
            <View style={styles.upperTitleContainer}>
              <AppText style={styles.titleCoin}>BTC</AppText>
              <FastImage
                source={ICONS.bitcoin}
                style={styles.slideImage}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <View style={{ margin: RF(10) }}>
              <AddressInput
                inputStyle={{ borderColor: "black" }}
                noContacts
                placeholder="Recieving Address"
              />
              <AddressInput
                inputStyle={{
                  borderWidth: RF(1),
                  backgroundColor: THEME.COLORS.blueLightShadow,
                  borderColor: THEME.COLORS.lightBlue,
                }}
                // value={address}
                placeholder="Address"
                // onChangeText={setAddress}
                // onChangeAddress={onChangeAddress}
                // toggleModal={toggleContactModal}
              />
              <View style={{ flexDirection: "row" }}>
                <FastImage
                  source={ICONS.question}
                  style={styles.questionImage}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <AppText style={styles.innerItemText}>
                  Spendable: 31,3999 BTC
                </AppText>
              </View>
              <AddressInput
                inputStyle={{ borderColor: "black" }}
                // value={address}
                placeholder="MEMO"
                // onChangeText={setAddress}
                // onChangeAddress={onChangeAddress}
                // toggleModal={toggleContactModal}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <PrimaryButton
              buttonStyle={styles.bottombtn}
              title="Enable Biometry Now"
              onPress={() => props.navigation?.navigate("Biometry")}
            />
          </View>
          <PinModal
            visible={modalVisible}
            title="Security Check"
            subTitle="Enter New Pin"
            onConfirm={() => {
              setModalVisible(false);
              props.navigation?.navigate("Seed");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Receive;

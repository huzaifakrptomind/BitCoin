import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../asset";
import AddressInput from "../../shared/components/AddressInput";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import PinModal from "../../shared/components/PinModal";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";
import styles from "./style";
interface Props extends GenericNavigation {}

const Receive = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {/* <SafeAreaView style={[{ flex: 1 }]}> */}
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
                backgroundColor: THEME.COLORS.blueLight,
                borderColor: THEME.COLORS.lightBlue,
              }}
              placeholder="Address"
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
      {/* </SafeAreaView> */}
    </>
  );
};

export default Receive;

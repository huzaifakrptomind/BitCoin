import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ICONS } from "../../asset";
import AppText from "../../shared/components/AppText";
import PinModal from "../../shared/components/PinModal";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import styles from "./style";
interface Props extends GenericNavigation {}
const Home = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <>
      {/* <StatusBar
        backgroundColor={THEME.COLORS.secondaryBackground}
        barStyle="light-content"
      /> */}
      {/* <SafeAreaView style={[{ backgroundColor: "red" }]} /> */}
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <View style={[styles.upperContainer, { flex: 5 }]}>
          <FastImage
            source={ICONS.logo}
            style={styles.slideImage}
            resizeMode={FastImage.resizeMode.contain}
          />
          <AppText style={[styles.slideSubTitle]}>
            Your finances and tokens are always under control, use them safely
            and comfortably
          </AppText>
        </View>
        <View style={styles.midContainer}>
          <View style={styles.actionContainer}>
            <PrimaryButton
              textStyle={{ fontSize: THEME.FONTS.SIZE.SMALL }}
              title="Create Wallet "
              onPress={() => setModalVisible(true)}
            />
            <PrimaryButton
              disabledMessage
              textStyle={{ fontSize: THEME.FONTS.SIZE.SMALL }}
              title="Restore Wallet "
              onPress={() => props.navigation?.goBack()}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <AppText style={[styles.tagTitle]}>{"Powerd By "}</AppText>
          <AppText style={[styles.tagTitle, { fontWeight: "bold" }]}>
            {"EgonSwap"}
          </AppText>
        </View>
        <PinModal
          visible={modalVisible}
          title="Security Check"
          subTitle="Enter New Pin"
          onConfirm={() => {
            console.log("---confirm---");
            setModalVisible(false);
            // props.navigation?.navigate("Biometry");
            props.navigation?.navigate("Seed");
          }}
        />
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

export default Home;

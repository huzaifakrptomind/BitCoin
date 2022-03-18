import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  Modal,
  StatusBar,
} from "react-native";
import TouchID from "react-native-touch-id";

// import Modal from 'react-native-modal';
import FastImage from "react-native-fast-image";
// import ICONS from "../../../assets";
import { useNavigation } from "@react-navigation/core";
import NumKeyboard from "../NumKeyboard";
import AppText from "../AppText";
import { THEME } from "../../utils/theme";
import { RF } from "../../utils/theme/responsive";
import { ICONS } from "../../../asset";
const PinModal = ({
  visible,
  onClose,
  title,
  subTitle,
}: {
  visible: boolean;
  onClose: () => void;
  title: string;
  subTitle: string;
}) => {
  const [code, setCode] = useState("");

  const [error, setError] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <AppHeader showQR /> */}
      <Modal
        // onBackButtonPress={() => null}
        visible={visible}
        animationType="slide"
      >
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <View style={{ margin: RF(30) }}>
              <AppText style={styles.Title}>{title}</AppText>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

            {/* {true && (
              <TouchableOpacity
                style={styles.crossContainer}
                // onPress={authenticate}
              >
                <FastImage
                  source={ICONS.BIO_SET}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.cross}
                />
              </TouchableOpacity>
            )} */}

            <View style={styles.keyboardView}>
              <View style={styles.numberInput}>
                {["•", "•", "•", "•", "•", "•"].map((item, index) => {
                  return (
                    <AppText key={index} style={styles.codeItem}>
                      {code[index] ? item : "_"}
                    </AppText>
                  );
                })}
              </View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <Text
                  style={{
                    // fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
                    fontSize: THEME.FONTS.SIZE.XXSMALL,
                    color: THEME.COLORS.black,
                  }}
                >
                  Forget your PIN?
                </Text>
              </TouchableOpacity>
              <NumKeyboard
                showOkay
                onPressOkay={() => getPin(code)}
                buttonText={"OK"}
                value={code}
                onChangeText={setCode}
                height={RF(330)}
                maxLength={6}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.white,
    // borderWidth: 1,

    // ...StyleSheet.absoluteFillObject,
    // height: '100%',
    // width: '100%',
  },
  heading: {
    marginBottom: THEME.MARGIN.HIGH,
    marginTop: THEME.MARGIN.MID_LOW,
    color: THEME.COLORS.black,
  },
  addressIcon: {
    height: RF(18),
    width: RF(18),
  },
  numberInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: RF(20),
  },
  phoneNumber: {
    fontWeight: "600",
    fontSize: THEME.FONTS.SIZE.MEDIUM,
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    justifyContent: "center",
    // marginTop: RF(30),
    // marginBottom: RF(20),
  },
  codeItem: {
    marginHorizontal: RF(5),
    color: THEME.COLORS.black,
    fontSize: RF(60),
  },
  crossContainer: {
    width: RF(30),
    height: RF(30),
    alignSelf: "flex-end",
    marginTop: RF(25),
    marginRight: RF(20),
  },
  cross: {
    width: "100%",
    height: "100%",
  },
});

export default PinModal;

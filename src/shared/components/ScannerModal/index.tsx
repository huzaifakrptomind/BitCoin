import React, { useState } from "react";
import { Modal, StatusBar, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../../asset";
import { THEME } from "../../utils/theme";
import { RF } from "../../utils/theme/responsive";
import AppText from "../AppText";
import PrimaryButton from "../PrimaryButton";

const ScannerModal = ({
  visible,
  title,
  subTitle,
  onConfirm,
  onClose,
}: {
  visible?: boolean;
  title?: string;
  subTitle?: string;
  onConfirm?: any;
  onClose?: any;
}) => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.container}>
          <View style={styles.modal}>
            <FastImage
              source={ICONS.bitcoin}
              style={styles.slideImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View
              style={{
                alignItems: "center",
                marginTop: RF(50),
              }}
            >
              <View style={{ marginTop: RF(20) }}>
                <AppText style={styles.title}>BitCoin Address</AppText>
                <AppText style={[styles.addressTitle, { marginTop: RF(5) }]}>
                  B`$!FdN:g~XCrh7`
                </AppText>
              </View>

              <FastImage
                source={ICONS.scannerBar}
                style={styles.scannerImage}
                resizeMode={FastImage.resizeMode.contain}
              />
              <PrimaryButton
                buttonStyle={styles.bottombtn}
                // large
                title="Copy"
                onPress={onClose}
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
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    width: RF(270),
    height: RF(380),
    backgroundColor: "white",
    margin: RF(20),
    // borderWidth: RF(1),
    borderRadius: THEME.RADIUS.BOX,
  },
  slideImage: {
    width: RF(80),
    height: RF(80),
    alignSelf: "center",
    position: "absolute",
    top: RF(-30),
  },
  scannerImage: {
    width: RF(150),
    height: RF(150),
    alignSelf: "center",
    marginTop: RF(40),
  },
  bottombtn: {
    width: RF(230),
    height: RF(40),
    borderRadius: RF(7),
    backgroundColor: THEME.COLORS.secondaryBackground,
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
    // color: THEME.COLORS.black,
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
  title: {
    fontSize: THEME.FONTS.SIZE.LARGE,
    color: THEME.COLORS.blacklight,
    fontWeight: "bold",
    textAlign: "center",
  },
  addressTitle: {
    fontSize: THEME.FONTS.SIZE.LARGE,
    color: THEME.COLORS.textLight,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: THEME.FONTS.SIZE.LARGE,
    color: THEME.COLORS.blacklight,
    fontWeight: "bold",
  },
  backIcon: {
    height: RF(12),
    width: RF(12),
  },
  slideSubTitle: {
    textAlign: "center",
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.blacklight,
    margin: RF(30),
  },
  tagTitle: {
    fontSize: THEME.FONTS.SIZE.XXSMALL,
    color: THEME.COLORS.disabledTextLight,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: RF(30),
  },
});

export default ScannerModal;

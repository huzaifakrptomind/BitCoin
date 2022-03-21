import React, { useState } from "react";
import { Modal, StatusBar, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../../asset";
import { THEME } from "../../utils/theme";
import { RF } from "../../utils/theme/responsive";
import AppText from "../AppText";
import NumKeyboard from "../NumKeyboard";

const PinModal = ({
  visible,
  title,
  subTitle,
  onConfirm,
}: {
  visible: boolean;
  title: string;
  subTitle: string;
  onConfirm?: any;
}) => {
  const [code, setCode] = useState("");

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                marginTop: RF(100),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppText style={styles.title}>{title}</AppText>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

            <View style={styles.keyboardView}>
              <View style={styles.numberInput}>
                {[
                  <FastImage
                    source={ICONS.dotColor}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />,
                  <FastImage
                    source={ICONS.dotColor}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />,
                  <FastImage
                    source={ICONS.dotColor}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />,
                  <FastImage
                    source={ICONS.dotColor}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />,
                  <FastImage
                    source={ICONS.dotColor}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />,
                  <FastImage
                    source={ICONS.dotColor}
                    style={styles.backIcon}
                    resizeMode="contain"
                  />,
                ].map((item, index) => {
                  return (
                    <AppText key={index} style={styles.codeItem}>
                      {code[index] ? (
                        item
                      ) : (
                        <FastImage
                          source={ICONS.dotlight}
                          style={styles.backIcon}
                          resizeMode="contain"
                        />
                      )}
                    </AppText>
                  );
                })}
              </View>
              {/* <TouchableOpacity style={{ alignSelf: "center" }}>
                <Text
                  style={{
                    // fontFamily: THEME.FONTS.TYPE.SEMIBOLD,
                    fontSize: THEME.FONTS.SIZE.XXSMALL,
                    color: THEME.COLORS.black,
                  }}
                >
                  Forget your PIN?
                </Text>
              </TouchableOpacity> */}
              <NumKeyboard
                showOkay
                onPressOkay={onConfirm}
                buttonText={"OK"}
                value={code}
                onChangeText={setCode}
                height={RF(330)}
                maxLength={6}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <AppText style={[styles.tagTitle]}>{"Powerd By "}</AppText>
            <AppText style={[styles.tagTitle, { fontWeight: "bold" }]}>
              {"EgonSwap"}
            </AppText>
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
    fontSize: THEME.FONTS.SIZE.XSMALL,
    color: THEME.COLORS.disabledTextLight,
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

export default PinModal;

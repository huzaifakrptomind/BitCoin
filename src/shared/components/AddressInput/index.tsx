import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInputProps,
  View,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { THEME } from "../../utils/theme";
import { HP, RF } from "../../utils/theme/responsive";
interface Props extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>;
  onChangeAddress: (text: string) => void;
  toggleModal?: () => void;
  noContacts?: boolean;
  showClipboard?: boolean;

  ClipboardDisabled?: boolean;
}

const AddressInput = (props: Props) => {
  const [showScanner, setShowScanner] = useState(false);

  const scannerCallBack = (address: string) => {
    setShowScanner(false);
    props.onChangeAddress(address);
  };

  return (
    <View
      style={[
        styles.container,
        props.inputStyle,
        // secondaryBackgroundColorProperty(),
      ]}
    >
      {/* <AppQRCodeScanner isVisible={showScanner} callBack={scannerCallBack} /> */}
      <TextInput
        {...props}
        placeholderTextColor={THEME.COLORS.textLight}
        style={[styles.inputContainer]}
        selectionColor={THEME.COLORS.black}
      />
      {props.showClipboard ? (
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          // onPress={() => OnPaste()}
          disabled={props.ClipboardDisabled}
        >
          <Feather
            name="clipboard"
            style={{ alignSelf: "center", }}
            size={24}
            color={THEME.COLORS.black}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {props.noContacts && (
        <>
          <Icon
            onPress={() => setShowScanner(true)}
            name="qrcode"
            style={{ alignSelf: "center" }}
            size={30}
            color={THEME.COLORS.disabledTextLight}
          />
        </>
      )}

      {/* <Icon
        onPress={() => setShowScanner(true)}
        name="qrcode"
        style={{ alignSelf: "center" }}
        size={24}
        color={THEME.COLORS.yellow}
      /> */}
    </View>
  );
};

export default AddressInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: HP(6),
    borderRadius: THEME.RADIUS.BOX,
    paddingHorizontal: RF(16),
    borderColor: THEME.COLORS.skyBlue,
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: THEME.MARGIN.LOW,
  },
  inputContainer: {
    flex: 1,
    alignSelf: "center",
    height: HP(6),
    color: THEME.COLORS.black,
    paddingHorizontal: THEME.PADDING.LOW,
    fontSize:RF(15)
    // fontFamily: THEME.FONTS.TYPE.REGULAR,
  },
  scan: { width: RF(20), height: "100%" },
  paste: {
    width: RF(52),
    height: "100%",
    marginRight: THEME.MARGIN.NORMAL,
  },
});

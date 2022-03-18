import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { THEME } from "../../shared/utils/theme";
import { GenericNavigation } from "../../shared/utils/models/types";
import styles from "./styles";
import AppText from "../../shared/components/AppText";
import { RF } from "../../shared/utils/theme/responsive";
import PinModal from "../../shared/components/PinModal";
interface Props extends GenericNavigation {}

const Security = (props: Props) => {
  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.primaryLightBackground} />
      <SafeAreaView style={[{ flex: 1 }]}>
        <View style={styles.container}>
          <PinModal title="Security Check" subTitle="bsfj" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Security;
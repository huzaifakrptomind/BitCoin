import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { THEME } from "../../shared/utils/theme";
import { GenericNavigation } from "../../shared/utils/models/types";
import styles from "./styles";
import PinModal from "../../shared/components/PinModal";
interface Props extends GenericNavigation {}

const Security = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      {/* <StatusBar backgroundColor={THEME.COLORS.white} /> */}
      <SafeAreaView style={[{ flex: 1 }]}>
        <View style={styles.container}>
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

export default Security;

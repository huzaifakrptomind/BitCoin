import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { ICONS } from "../../asset";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";
import styles from "./style";
import faker from "faker";
import ScannerModal from "../../shared/components/ScannerModal";
import AddressInput from "../../shared/components/AddressInput";
interface Props extends GenericNavigation {
  title: string;
  id: string;
  image: any;
  color: string;
  rate: string;
  props: any;
  symbol: string;
  amount: string;
  date: string;
  status: string;
}

const historyData = [...Array(10).keys()].map((_, i) => {
  return {
    coinName: faker.name.jobTitle(),
    price: faker.finance.amount(),
    date: faker.date.soon(),
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    description: faker.lorem.sentences(),
    coinImage: faker.image.avatar(),
  };
});
const DATA = [
  {
    id: "1",
    title: "Reality",
    image: ICONS.pending,
    color: THEME.COLORS.bitcoinColor,
    amount: 0.024,
    symbol: "BTC",
    date: "Oct 19, 2019, 5:42:44 AM",
    status: "Pending",
  },
  {
    id: "2",
    title: "Reality",
    image: ICONS.pending,
    color: THEME.COLORS.bitcoinColor,
    amount: 0.024,
    symbol: "BTC",
    date: "Oct 19, 2019, 5:42:44 AM",
    status: "Pending",
  },
  {
    id: "3",
    title: "Reality",
    image: ICONS.pending,
    color: THEME.COLORS.bitcoinColor,
    amount: 0.024,
    symbol: "BTC",
    date: "Oct 19, 2019, 5:42:44 AM",
    status: "Pending",
  },
];
const Item = ({ title, image, amount, symbol, date, status, color }: Props) => (
  <TouchableOpacity
    style={{}}
    // onPress={() => props.navigation.navigate("CoinDetails")}
  >
    <View style={[styles.itemContainer, { backgroundColor: color }]}>
      <View style={styles.itemLeftView}>
        <FastImage
          source={image}
          style={styles.slideImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.itemMideView}>
        <View style={styles.itemMidInerView}>
          <AppText style={styles.amountTitle}>{amount}</AppText>
          <AppText
            style={[styles.amountTitle, { marginLeft: THEME.MARGIN.MID_LOW }]}
          >
            {symbol}
          </AppText>
        </View>
        <AppText style={styles.dateTitle}>{date}</AppText>
      </View>
      <View style={styles.itemRightView}>
        <View style={styles.itemRightInnerView}>
          <AppText style={[styles.statusTitle]}>{status}</AppText>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const CoinDetails = (props: Props) => {
  console.log(historyData);

  const [visible, setVisible] = useState(false);

  return (
    <>
      <StatusBar backgroundColor={THEME.COLORS.white} />
      {/* <SafeAreaView style={[{ flex: 1 }]}> */}
      <AppHeader
        showBack
        showDetails
        title="Bitcoin"
        absolute
        // visible
        onPressQR={() => setVisible(true)}
      />
      <View style={[styles.container]}>
        <View style={styles.flatContiner}>
          <FlatList
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            data={DATA}
            numColumns={1}
            ListHeaderComponent={() => {
              return (
                <>
                  <View style={styles.flatUpperContainer}>
                    <View>
                      <FastImage
                        source={ICONS.bitcoin}
                        style={styles.coinImage}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </View>
                    <AppText style={styles.slideSubTitle}> Bitcoin</AppText>
                    <View style={styles.flatMiddleContainer}>
                      <View style={{ marginHorizontal: RF(10) }}>
                        <View style={styles.flatBottomContainer}>
                          <View style={{ flexDirection: "row" }}>
                            <FastImage
                              source={ICONS.question}
                              style={styles.questionImage}
                              resizeMode={FastImage.resizeMode.contain}
                            />
                            <AppText style={styles.innerItemText}>
                              Total
                            </AppText>
                          </View>
                          <FastImage
                            source={ICONS.question}
                            style={styles.questionImage}
                            resizeMode={FastImage.resizeMode.contain}
                          />
                        </View>
                        <AppText
                          style={{
                            fontSize: THEME.FONTS.SIZE.XLARGE,
                            color: THEME.COLORS.secondaryDarkBackground,
                            fontWeight: "600",
                          }}
                        >
                          $ 31,000 BTC
                        </AppText>
                        <View style={{ margin: RF(10) }}>
                          <AppText style={styles.rateTitle}>
                            112,000 USD
                          </AppText>
                          <AppText style={styles.rateTitle}>
                            574,130 RMB
                          </AppText>
                        </View>
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: RF(10) }}>
                      <PrimaryButton
                        icon={"arrow-up-right"}
                        // buttonStyle={styles.bottombtn}
                        title="Send"
                        onPress={() => props.navigation?.navigate("Biometry")}
                      />
                      <PrimaryButton
                        // buttonStyle={styles.bottombtn}
                        icon={"arrow-down-left"}
                        title="Receive"
                        onPress={() => props.navigation?.navigate("Biometry")}
                      />
                    </View>
                    <AddressInput
                      placeholder="Copy"
                      showClipboard
                      inputStyle={{
                        borderWidth: RF(1),
                        backgroundColor: THEME.COLORS.white,
                        borderColor: THEME.COLORS.disabledTextLight,
                        width: RF(325),
                      }}
                    />
                  </View>
                  <View style={styles.midView}>
                    <AppText style={styles.slideCopytitle}>Transaction</AppText>
                    <Text>24 March, 2021</Text>
                  </View>
                  <View style={styles.bottomView}>
                    <Text style={{ marginRight: RF(10) }}>All</Text>
                    <Text style={{ marginRight: RF(10) }}>Received</Text>
                    <Text style={{ marginRight: RF(10) }}>Sent</Text>
                  </View>
                </>
              );
            }}
            renderItem={({ item, index }) => {
              return (
                <Item
                  title={item.title}
                  // id={item.id}
                  image={item.image}
                  amount={item.amount}
                  symbol={item.symbol}
                  date={item.date}
                  status={item.status}
                  color={
                    index % 2 == 0
                      ? THEME.COLORS.primaryGrayLight
                      : THEME.COLORS.primaryGray
                  }
                  // // rate={item.rateColor}
                  // props={props}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <ScannerModal
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

export default CoinDetails;

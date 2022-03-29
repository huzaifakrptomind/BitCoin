import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NewsStack from "../BottomTab/NewsStack";
import WalletMain from "../WalletMain";
import Wallet from "../Wallet";
import styles from "./style";
interface Props extends GenericNavigation {}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const CustomButton = ({ children, onPress }: any) => (
  <TouchableOpacity style={styles.bottomTabView} onPress={onPress}>
    <View style={styles.bottomTabInerView}>
      <MaterialCommunityIcons name="wallet-outline" size={30} color={"white"} />
      <Text style={styles.bottomTitle}>Wallet</Text>
    </View>
  </TouchableOpacity>
);
const BottomView = (props: Props) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }
            if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            if (route.name === "Dapps") {
              return <AntDesign name="appstore-o" size={25} color={color} />;
            }
            if (route.name === "News") {
              return <AntDesign name="earth" size={25} color={color} />;
            }
            if (route.name === "Setting") {
              return <AntDesign name="setting" size={25} color={color} />;
            }
            if (route.name === "Dex") {
              return <AntDesign name="retweet" size={25} color={color} />;
            }
            // appstore-o retweet

            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: { fontSize: RF(12) },
          tabBarActiveTintColor: THEME.COLORS.skyBlue,
          tabBarInactiveTintColor: THEME.COLORS.disabledTextLight,
        })}
      >
        <Tab.Screen name="Dapps" component={Wallet} />
        <Tab.Screen name="News" component={NewsStack} />
        <Tab.Screen
          name="WalletMain"
          component={WalletMain}
          options={{
            tabBarButton: (props) => <CustomButton {...props} />,
          }}
        />
        <Tab.Screen name="Dex" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default BottomView;

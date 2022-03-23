import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import SplashScreen from "react-native-splash-screen";
import { ICONS } from "../../asset";
import AppHeader from "../../shared/components/AppHeader";
import AppText from "../../shared/components/AppText";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { GenericNavigation } from "../../shared/utils/models/types";
import { THEME } from "../../shared/utils/theme";
import { RF } from "../../shared/utils/theme/responsive";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// // Ionicons
import styles from "./style";
import DAppsStack from "../BottomTab/DAppsStack";
import NewsStack from "../BottomTab/NewsStack";
import WalletMain from "../WalletMain";
import AppIcon, { Icons } from "../../shared/components/AppIcons/AppIcon";
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
const BottomTab = ({ type, color, size = 24, isFocused, index,name }) => {
  const icon = index == 0 ? "home" : "heart"  ;
  
  const gradient = index == 1;
  return (
    <View>
      {gradient ? (
        <View style={styles.middleIcon}>
          <AppIcon
            name={"wallet-outline"}
            type={type}
            size={size}
            color={"white"}
          />
          <Text style={{color:THEME.COLORS.white}}>Wallet</Text>
        </View>
      ) : (
        <View style={{}}>
          <AppIcon name={icon} type={type} size={size} color={color} />
          <Text style={{color : isFocused
          ? THEME.COLORS.skyBlue
          : THEME.COLORS.disabledTextLight}}>{name}</Text>
        </View>
      )}
    </View>
  );
};
const Tab = createBottomTabNavigator();
const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.bottomBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused
          ? THEME.COLORS.skyBlue
          : THEME.COLORS.disabledTextLight;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            testID={options.tabBarTestID}
            accessibilityRole="button"
          >
            <BottomTab
              type={
                index !== 1 ? Icons.FontAwesome5  : Icons.MaterialCommunityIcons
              }
              index={index}
              isFocused={isFocused}
              size={30}
              color={color}
              name={route.name}
            />
            {/* <Text>Sasas</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const CustomButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: THEME.COLORS.skyBlue,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <MaterialCommunityIcons name="wallet-outline" size={30} color={"white"} />
      <Text style={{color:THEME.COLORS.white,fontWeight:'bold'}}>Wallet</Text>

    </View>
  </TouchableOpacity>
);
const BottomView = (props: Props) => {
  return (
    <>
      {/* <AppHeader title="WalletMain" showBack showLeft absolute /> */}
      <Tab.Navigator
        // tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="WalletMain" component={WalletMain} />
        <Tab.Screen name="Dapps" component={DAppsStack}   />
        <Tab.Screen name="News" component={NewsStack} options={{
            tabBarButton: (props) => <CustomButton {...props} />,
          }} />
        <Tab.Screen name="asd" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="WalletMain" component={WalletMain} /> */}
      </Tab.Navigator>
    </>
  );
};

export default BottomView;

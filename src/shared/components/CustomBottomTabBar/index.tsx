import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../utils/theme";
import styles from "./styles";
import { ICONS } from "../../../asset";
export default function CustomBottomTabBar({
  state,
  descriptors,
  navigation,
}: any) {
  const darkModeStyle = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: THEME.COLORS.primaryDarkBackground,
  };

  const RenderImage = ({
    index,
    isFocused,
    routeName,
  }: {
    index: number;
    isFocused: boolean;
    routeName: string;
  }) => {
    if (routeName == "DApps")
      return <ICONS.logo width={20} height={20} fill={iconColor(isFocused)} />;
    else if (routeName == "News")
      return <ICONS.logo width={20} height={20} fill={iconColor(isFocused)} />;
    else if (routeName == "Wallet")
      return <ICONS.logo width={20} height={20} fill={iconColor(isFocused)} />;
    else if (routeName == "DEX")
      return <ICONS.logo width={20} height={20} fill={iconColor(isFocused)} />;
    else
      return <ICONS.logo width={20} height={20} fill={iconColor(isFocused)} />;
  };

  const labelColor = (isFocused: boolean) => {
    if (isFocused) {
      return THEME.COLORS.yellow;
    }
    return "gray";
  };

  const iconColor = (isFocused: boolean) => {
    if (isFocused) {
      return THEME.COLORS.yellow;
    }
    return "gray";
  };

  return (
    <View style={[styles.tabBar]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
              style={
                isFocused
                  ? // ? darkMode
                    [styles.focusedContainer, darkModeStyle]
                  : styles.container
              }
            >
              <RenderImage
                routeName={route.name}
                index={index}
                isFocused={isFocused}
              />
              <Text
                style={{
                  color: labelColor(isFocused),
                  // fontFamily: THEME.FONTS.TYPE.REGULAR,
                  fontSize: THEME.FONTS.SIZE.XXSMALL,
                  marginTop: THEME.MARGIN.LOW,
                }}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";

interface Icon {
  focused: ImageSourcePropType;
  unfocused: ImageSourcePropType;
}

interface TabIconProps {
  focused: boolean;
  icon: Icon;
}

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <Image source={focused ? icon.focused : icon.unfocused} />
);

export default TabIcon;

const styles = StyleSheet.create({});

import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }) => {
  if (focused) {
    return (
      <View style={styles.iconContainer}>
        <Image source={icon.focused} style={styles.icon} />
        <Text style={[styles.label, styles.focused]}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.iconContainer}>
      <Image source={icon.unfocused} style={styles.icon} />
      <Text style={[styles.label, styles.unfocused]}>{title}</Text>
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          // width: 900,
          height: 75,
          // marginBottom: 20,
          justifyContent: "center",
          // alignItems: "flex-start",
          // backgroundColor: "yellow",
        },
        tabBarStyle: {
          backgroundColor: "#F7FAFC",
          // borderRadius: 50,
          // marginHorizontal: 20,
          width: "100%",
          marginBottom: 20,
          height: 75,
          // overflow: "hidden",
          borderTopWidth: 1,
          borderColor: "#E8EDF2",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.heart} title="Wishlist" />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.orders} title="Orders" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    alignSelf: "center",
    // verticalAlign: "center",
    // width: "100%",
    height: 75,
    //@ts-ignore
    // flex: "1 1 0%",
    // minWidth: 112,
    // minHeight: 16,
    marginTop: 20,
    // paddingTop: 16,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    // overflow: "hidden",
  },
  label: {
    color: "#0D141C",
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "medium",
    // marginLeft: 8,
  },
  icon: {
    // height: 20,
    // width: 20,
  },
  unfocused: {
    color: "#4F7396",
  },
  focused: {
    color: "#0D141C",
  },
});

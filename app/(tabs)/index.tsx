import Featured from "@/components/Featured";
import Recommended from "@/components/Recommended";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Featured />
      <Recommended />
    </SafeAreaView>
  );
}

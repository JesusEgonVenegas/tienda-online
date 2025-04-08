import Featured from "@/components/Featured";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Featured />
    </SafeAreaView>
  );
}

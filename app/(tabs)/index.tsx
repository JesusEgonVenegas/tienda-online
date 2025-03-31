import FeaturedCard from "@/components/FeaturedCard";
import RecommendedCard from "@/components/RecommendedCard";
import { icons } from "@/constants/icons";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SearchBar } from "react-native-screens";

export default function Index() {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 16,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text>Discover</Text>
        <View
          style={{
            backgroundColor: "#E8EDF2",
            width: "100%",
            height: 48,
            borderRadius: 12,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <Image source={icons.search} width={24} height={24} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={"#4F7396"}
            onChangeText={onChangeText}
            value={text}
            style={{ paddingLeft: 8, width: "100%" }}
          />
        </View>
      </View>

      <View>
        <Text>Featured</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </ScrollView>
      </View>

      <View>
        <Text>Recommended</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
});

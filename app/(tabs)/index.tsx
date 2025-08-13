import CreditCard from "@/components/home/credit-card";
import Header from "@/components/home/header";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fefefe' }}>
      <Header />
      <CreditCard />
    </View>
  );
}

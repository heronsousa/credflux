import AccountsList from "@/components/home/accounts-list";
import CategoryExpenses from "@/components/home/category-expenses";
import CreditCard from "@/components/home/credit-card";
import Header from "@/components/home/header";
import RecentTransactions from "@/components/home/recent-transactions";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fefefe", paddingTop: 16 }}>
      <Header />
      <View className="px-4 gap-8 pb-8">
        <CreditCard />
        <AccountsList />
        <CategoryExpenses />
        <RecentTransactions />
      </View>
    </ScrollView>
  );
}

import { recentTransactions } from "@/constants/app";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Button } from "../Button";
import { Card, CardContent, CardHeader, CardTitle } from "../Card";

type IconName = keyof typeof Feather.glyphMap;

const RecentTransactions = () => {
  return (
    <Card className="border-0 shadow-lg bg-white">
      <CardHeader className="p-4 flex flex-row items-center justify-between">
        <CardTitle>Transações recentes</CardTitle>
        <Button className="border border-gray-300 rounded-full px-2 py-1">
          <Text>Ver Tudo</Text>
        </Button>
      </CardHeader>
      <CardContent className="p-4 flex gap-2">
        {recentTransactions.map((transaction) => (
          <View
            key={transaction.id}
            className="flex flex-row items-center justify-between"
          >
            <View className="flex flex-row items-center gap-3">
              <View
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${transaction.category?.color}20` }}
              >
                <Feather
                  name={transaction.category?.icon_name as IconName}
                  size={18}
                  color={transaction.category?.color}
                />
              </View>
              <View className="gap-1">
                <Text className="font-medium text-sm">
                  {transaction.merchant}
                </Text>
                <Text className="text-xs text-muted-foreground">
                  {transaction.date}
                </Text>
              </View>
            </View>
            <View className="text-right">
              <Text className="font-semibold text-right">
                R${transaction.amount.toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;

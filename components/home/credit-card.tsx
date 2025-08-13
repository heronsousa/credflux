import { Button } from "@/components/Button";
import {
  Card,
  CardContent
} from "@/components/Card";
import { Progress } from "@/components/Progress";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const CreditCard = () => {
  return (
    <Card className="border-0 shadow-lg bg-white mt-32">
      <CardContent className="p-4 flex gap-2">
        <View className="flex flex-row items-center justify-between mb-3">
          <View className="flex flex-row items-center gap-2">
            <Ionicons name="card-outline" size={24} color="#0d9b9b" />
            <Text className="text-sm font-medium">Crédito disponível</Text>
          </View>
          <Button
            onPress={() => {}}
            className="flex flex-row items-center gap-2 border border-gray-300 rounded-full px-2 py-1"
          >
            <Ionicons name="eye-outline" size={24} color="black" />
            <Text>Ver cartão</Text>
          </Button>
        </View>

        <View className="flex flex-row justify-between text-sm">
          <Text>Disponível</Text>
          <Text className="font-semibold">R$ 8154,55</Text>
        </View>

        <Progress value={0.75} className="w-full h-2 mb-2" />

        <View className="flex flex-row justify-between text-xs text-muted-foreground">
          <Text className="color-[#64748b]">Usado: R$ 1845,45</Text>
          <Text className="color-[#64748b]">Limite: R$ 10000,00</Text>
        </View>
      </CardContent>
    </Card>
  );
}
 
export default CreditCard;
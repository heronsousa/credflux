import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/Card";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <LinearGradient
      colors={["#0F2A43", "#00B5B8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="w-full h-80 rounded-b-2xl p-4 pt-14"
    >
      <View className="flex flex-row items-center justify-between mb-8">
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 180, height: 80 }}
          contentFit="contain"
        />
        <View className="flex items-center flex-row gap-4">
          <Ionicons
            name="notifications-outline"
            size={24}
            color="white"
          ></Ionicons>
          <Ionicons name="settings-outline" size={24} color="white"></Ionicons>
        </View>
      </View>

      <View>
        <Text className="text-2xl font-bold text-white">Bom dia! 👋</Text>
        <Text className="text-white">Aqui está seu resumo financeiro</Text>
      </View>

      <View className="flex flex-row items-center justify-between">
        <Card className="w-[48%] bg-white mt-6">
          <CardHeader>
            <CardDescription>
              <View className="flex-row items-center pt-2">
                <MaterialIcons name="attach-money" size={24} color="#0d9b9b" />
                <Text className="text-sm font-medium">Total gasto</Text>
              </View>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="text-2xl font-bold">R$ 1.250,90</Text>
          </CardContent>
          <CardFooter>
            <Text className="text-sm text-muted-foreground">Este mês</Text>
          </CardFooter>
        </Card>

        <Card className="w-[48%] bg-white mt-6">
          <CardHeader>
            <CardDescription>
              <View className="flex-row items-center pt-2 gap-2">
                <Ionicons
                  name="calendar-clear-outline"
                  size={24}
                  color="#f59f0a"
                />
                <Text className="text-sm font-medium">Fatura atual</Text>
              </View>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="text-2xl font-bold">R$ 1.250,90</Text>
          </CardContent>
          <CardFooter>
            <Text className="text-sm text-muted-foreground">
              Vence em 15 Fev
            </Text>
          </CardFooter>
        </Card>
      </View>
    </LinearGradient>
  );
}

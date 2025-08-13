import { Button } from "@/components/Button";
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

const Header = () => {
  return (
    <LinearGradient
      colors={["#0F2A43", "#00B5B8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="w-full rounded-b-2xl p-4 pt-14"
      style={{ 
        height: 300,
        paddingTop: 40,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
      }}
    >
      <View className="flex flex-row items-center justify-between mb-8">
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 180, height: 80 }}
          contentFit="contain"
        />
        <View className="flex items-center flex-row gap-5">
          <Button className="px-0">
            <Ionicons
              name="notifications-outline"
              size={24}
              color="white"
            />
          </Button>
          <Button className="px-0">
            <Ionicons name="settings-outline" size={24} color="white" />
          </Button>
        </View>
      </View>

      <View className="relative">
        <Text className="text-2xl font-bold text-white">Olá! 👋</Text>
        <Text className="text-white">Aqui está seu resumo financeiro</Text>

        <View className="flex flex-row items-center justify-between absolute w-full" style={{ top: 65 }}>
          <Card className="w-[48%] border-0 shadow-lg bg-white mt-6" style={{ width: '48%' }}>
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
              <Text className="text-sm text-muted-foreground color-[#64748b]">Este mês</Text>
            </CardFooter>
          </Card>

          <Card className="w-[48%] bg-white border-0 shadow-lg mt-6" style={{ width: '48%' }}>
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
              <Text className="text-sm text-muted-foreground color-[#64748b]">
                Vence em 15 Fev
              </Text>
            </CardFooter>
          </Card>
        </View>
      </View>
    </LinearGradient>
  );
}
 
export default Header;
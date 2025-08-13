import React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Button } from "../Button";
import { Card, CardContent, CardHeader, CardTitle } from "../Card";

const data = [
  {
    key: "supermarket",
    label: "Supermercado",
    value: 308.03,
    color: "#ef4444",
  },
  {
    key: "health",
    label: "Saúde",
    value: 220.84,
    color: "#22c55e",
  },
  {
    key: "others",
    label: "Outros",
    value: 596.46,
    color: "#94a3b8",
  },
  {
    key: "uncategorized",
    label: "Não categorizado",
    value: 416.7,
    color: "#1e293b",
  },
];

export default function CategoryExpenses() {
  const pieData = data.map((item) => ({
    value: item.value,
    svg: { fill: item.color },
    key: item.key,
  }));

  return (
    <Card className="border-0 shadow-lg bg-white">
      <CardHeader className="p-4 flex flex-row items-center justify-between">
        <CardTitle>Despesas por categoria</CardTitle>
        <Button className="border border-gray-300 rounded-full px-2 py-1">
          <Text>Ver Tudo</Text>
        </Button>
      </CardHeader>
      <CardContent className="p-4 flex flex-row items-center gap-4">
        <PieChart
          style={{ height: 120, width: 120 }}
          data={pieData}
          innerRadius={40}
          padAngle={0.03}
        />
        <View style={{ flex: 1 }}>
          {data.map((item) => (
            <View
              key={item.key}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: item.color,
                  marginRight: 8,
                }}
              />
              <Text style={{ flex: 1 }}>{item.label}</Text>
              <Text style={{ fontWeight: "bold" }}>
                R${item.value.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      </CardContent>
    </Card>
  );
}
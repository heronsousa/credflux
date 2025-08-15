import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { Card, CardContent, CardHeader, CardTitle } from "../Card";
import Pluggy from "./pluggy";
const accounts = [
  {
    id: "wallet",
    name: "Carteira",
    balance: 10,
    color: "#bae6fd",
    icon: <Ionicons name="wallet-outline" size={24} color="black" />,
    status: "",
  },
  {
    id: "nubank",
    name: "Nubank - C.Corrente",
    balance: 141.96,
    color: "#ede9fe",
    icon: <Feather name={"credit-card"} size={20} color="#64748b" />,
    status: "",
    openFinance: true,
  },
  {
    id: "itau",
    name: "Itaú",
    balance: null,
    color: "#fee2e2",
    icon: <Feather name={"credit-card"} size={20} color="#64748b" />,
    status: "Estabelecendo conexão com o banco...",
  },
];

export default function AccountsList() {
  const [modalVisible, setModalVisible] = useState(false);
  const total = accounts.reduce((sum, acc) => sum + (acc.balance || 0), 0);

  return (
    <>
      <Card className="border-0 shadow-lg bg-white">
        <CardHeader className="p-4 flex flex-row items-center justify-between">
          <CardTitle>Contas</CardTitle>
          <Button
            className="border border-gray-300 rounded-full px-2 py-1 flex flex-row items-center gap-1"
            onPress={() => setModalVisible(true)}
          >
            <Feather name="plus" size={16} />
            <Text>Adicionar</Text>
          </Button>
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-2">
          {accounts.map((acc) => (
            <TouchableOpacity
              key={acc.id}
              className="rounded-xl flex-row items-center mr-3 p-3"
              style={{
                backgroundColor: acc.color,
              }}
              activeOpacity={0.8}
            >
              <View className="w-10 h-10 rounded-full flex items-center justify-center bg-white mr-3">
                {acc.icon}
              </View>
              <View style={{ flex: 1 }}>
                <Text>{acc.name}</Text>
                {acc.status ? (
                  <Text style={{ fontSize: 12, color: "#64748b" }}>
                    {acc.status}
                  </Text>
                ) : null}
                {acc.balance ? (
                  <Text
                    className="text-xs"
                    style={{ fontWeight: "bold", color: "#059669" }}
                  >
                    R${acc.balance.toFixed(2)}
                  </Text>
                ) : null}
              </View>
              {acc.openFinance ? (
                <Button className="border border-gray-300 rounded-full px-2 py-1 ml-2">
                  <Text style={{ fontSize: 12 }}>Open Finance</Text>
                </Button>
              ) : null}
              <Feather
                name="chevron-right"
                size={20}
                color="#64748b"
                style={{ marginLeft: 8 }}
              />
            </TouchableOpacity>
          ))}
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#e5e7eb",
              paddingTop: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "500" }}>Total</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              R${total.toFixed(2)}
            </Text>
          </View>
        </CardContent>
      </Card>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pluggy onClose={() => setModalVisible(false)}/>
      </Modal>
    </>
  );
}
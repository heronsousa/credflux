import { findCategory } from "@/utils/findCategory";

export const categories = [
  { name: "Viagem", color: "#3b82f6", key: "travel", icon_name: "map" },
  {
    name: "Transporte",
    color: "#f59e42",
    key: "transport",
    icon_name: "truck",
  },
  {
    name: "Supermercado",
    color: "#22c55e",
    key: "supermarket",
    icon_name: "shopping-cart",
  },
  { name: "Serviços", color: "#6366f1", key: "services", icon_name: "tool" },
  { name: "Saúde", color: "#ef4444", key: "health", icon_name: "heart" },
  { name: "Pix", color: "#10b981", key: "pix", icon_name: "dollar-sign" },
  {
    name: "Outros",
    color: "#94a3b8",
    key: "others",
    icon_name: "more-horizontal",
  },
  { name: "Lazer", color: "#eab308", key: "leisure", icon_name: "smile" },
  {
    name: "Vestuário",
    color: "#a855f7",
    key: "clothing",
    icon_name: "shopping-bag",
  },
  {
    name: "Eletrônico",
    color: "#0ea5e9",
    key: "electronics",
    icon_name: "cpu",
  },
  { name: "Alimentação", color: "#f43f5e", key: "food", icon_name: "coffee" },
  {
    name: "Assinatura",
    color: "#64748b",
    key: "subscription",
    icon_name: "repeat",
  },
  { name: "Educação", color: "#f87171", key: "education", icon_name: "book" },
  {
    name: "Compras",
    color: "#fbbf24",
    key: "shopping",
    icon_name: "shopping-cart",
  },
  { name: "Casa", color: "#22d3ee", key: "home", icon_name: "home" },
];

export const recentTransactions = [
  {
    id: 1,
    merchant: "Amazon",
    amount: 89.99,
    date: "10/02/2024",
    category: findCategory("shopping"),
  },
  {
    id: 2,
    merchant: "Starbucks",
    amount: 12.5,
    date: "10/02/2024",
    category: findCategory("food"),
  },
  {
    id: 3,
    merchant: "Uber",
    amount: 25.8,
    date: "09/02/2024",
    category: findCategory("transport"),
  },
  {
    id: 4,
    merchant: "Netflix",
    amount: 15.99,
    date: "08/02/2024",
    category: findCategory("subscription"),
  },
  {
    id: 5,
    merchant: "Super Adega",
    amount: 350.0,
    date: "05/02/2024",
    category: findCategory("supermarket"),
  },
];

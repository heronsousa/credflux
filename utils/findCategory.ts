import { categories } from "@/constants/app"

export function findCategory(key: string) {
  return categories.find(category => category.key === key)
}
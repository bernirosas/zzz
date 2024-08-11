const enum Color {
  gray = "gray",
  red = "red",
  yellow = "yellow",
  green = "green",
  blue = "blue",
  indigo = "indigo",
  purple = "purple",
  pink = "pink",
  hardGray = "hardGray",
}

export const colorClasses: Record<Color, string[]> = {
  [Color.gray]: ["bg-gray-600", "focus:ring-gray-500 focus:border-gray-500"],
  [Color.red]: ["bg-red-600", "focus:ring-red-500 focus:border-red-500"],
  [Color.yellow]: ["bg-yellow-600", "focus:ring-yellow-500 focus:border-yellow-500"],
  [Color.green]: ["bg-green-600", "focus:ring-green-500 focus:border-green-500"],
  [Color.blue]: ["bg-blue-600", "focus:ring-blue-500 focus:border-blue-500"],
  [Color.indigo]: ["bg-indigo-600", "focus:ring-indigo-500 focus:border-indigo-500"],
  [Color.purple]: ["bg-purple-600", "focus:ring-purple-500 focus:border-purple-500"],
  [Color.pink]: ["bg-pink-600", "focus:ring-pink-500 focus:border-pink-500"],
  [Color.hardGray]: ["bg-gray-800", "focus:ring-gray-700 focus:border-gray-700"],
}

export const textColorClasses: Record<Color, string[]> = {
  [Color.gray]: ["text-gray-600"],
  [Color.red]: ["text-red-600"],
  [Color.yellow]: ["text-yellow-600"],
  [Color.green]: ["text-green-600"],
  [Color.blue]: ["text-blue-600"],
  [Color.indigo]: ["text-indigo-600"],
  [Color.purple]: ["text-purple-600"],
  [Color.pink]: ["text-pink-600"],
  [Color.hardGray]: ["text-white"],
}

export default Color

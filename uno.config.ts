import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  shortcuts: {
    "wh-full": "w-full h-full",
    // ===== 布局 =====
    "flex-center": "flex items-center justify-center",
    "flex-between": "flex items-center justify-between",
    "flex-col-center": "flex flex-col items-center justify-center",
    "flex-col-start": "flex flex-col items-start",

    page: "min-h-screen w-full p-6 box-border bg-gray-100 text-gray-800",
    container: "max-w-5xl mx-auto",

    // ===== 卡片系统 =====
    card: "bg-white rounded-xl shadow-sm p-5",
    "card-hover": "hover:shadow-md transition-shadow",

    // ===== 标题系统 =====
    h1: "text-2xl font-bold",
    h2: "text-xl font-semibold",
    h3: "text-lg font-medium",
    "text-muted": "text-gray-500",

    // ===== 表单 =====
    input:
      "w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400",
    btn: "px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors",
    "btn-light": "px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300",

    // ===== 列表 / 行 =====
    row: "flex items-center justify-between py-2 border-b border-gray-200",
    col: "flex flex-col gap-2",

    // ===== 间距系统 =====
    "stack-sm": "flex flex-col gap-2",
    "stack-md": "flex flex-col gap-4",
    "stack-lg": "flex flex-col gap-6",

    // ===== 数据块 =====
    stat: "flex flex-col p-4 rounded-lg bg-gray-50",
    "stat-label": "text-sm text-gray-500",
    "stat-value": "text-2xl font-bold",
  },
  presets: [presetUno(), presetAttributify()],
});

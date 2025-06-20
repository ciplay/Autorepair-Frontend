"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative p-3 rounded-full ${
        theme === "dark" ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-gray-800"
      } backdrop-blur-sm transition-colors`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.5 }}>
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  )
}

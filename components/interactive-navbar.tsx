"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, Phone, Mail, MapPin } from "lucide-react"
import { useTheme } from "./theme-provider"
import ThemeToggle from "./theme-toggle"

interface InteractiveNavbarProps {
  currentPath?: string
}

// Car Icon Component
const CarIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    width="40"
    height="24"
    viewBox="0 0 40 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    className="text-white"
  >
    {/* Car Body */}
    <motion.path
      d="M8 12h24c2 0 4 2 4 4v4c0 1-1 2-2 2h-2c0-2-2-4-4-4s-4 2-4 4H16c0-2-2-4-4-4s-4 2-4 4H6c-1 0-2-1-2-2v-4c0-2 2-4 4-4z"
      fill="currentColor"
      animate={{ scale: isOpen ? 1.1 : 1 }}
      transition={{ duration: 0.3 }}
    />
    {/* Car Roof */}
    <motion.path
      d="M12 8h16c1 0 2 1 2 2v2H10v-2c0-1 1-2 2-2z"
      fill="currentColor"
      animate={{ scale: isOpen ? 1.1 : 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    />
    {/* Wheels */}
    <motion.circle
      cx="12"
      cy="18"
      r="3"
      fill="currentColor"
      animate={{ rotate: isOpen ? 360 : 0 }}
      transition={{ duration: 0.5 }}
    />
    <motion.circle
      cx="28"
      cy="18"
      r="3"
      fill="currentColor"
      animate={{ rotate: isOpen ? 360 : 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    />
    {/* Headlights */}
    <motion.circle
      cx="34"
      cy="14"
      r="1.5"
      fill="#FFD700"
      animate={{ opacity: isOpen ? 0.5 : 1 }}
      transition={{ duration: 0.3 }}
    />
    <motion.circle
      cx="34"
      cy="10"
      r="1.5"
      fill="#FFD700"
      animate={{ opacity: isOpen ? 0.5 : 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.svg>
)

export default function InteractiveNavbar({ currentPath = "/" }: InteractiveNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "BERANDA", description: "Halaman utama bengkel" },
    { href: "/portfolio", label: "PORTFOLIO", description: "Galeri hasil kerja kami" },
    { href: "/team", label: "TIM KAMI", description: "Kenali tim profesional kami" },
  ]

  const contactInfo = [
    { icon: Phone, label: "Telepon", value: "+62 812-3456-7890" },
    { icon: Mail, label: "Email", value: "info@sskauto.com" },
    { icon: MapPin, label: "Alamat", value: "Jl. Raya No. 123, Jakarta" },
  ]

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? theme === "dark"
              ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
              : "bg-white/90 backdrop-blur-md border-b border-gray-200"
            : theme === "dark"
              ? "bg-black/60 backdrop-blur-sm"
              : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          >
            SSK Auto
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  theme === "dark" ? "text-white hover:text-orange-400" : "text-gray-800 hover:text-orange-500"
                } transition-colors text-sm font-medium uppercase tracking-wider relative group ${
                  currentPath === item.href ? "text-orange-400" : ""
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Car Button for Mobile/Tablet */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <CarIcon isOpen={isOpen} />

              {/* Pulse effect when closed */}
              {!isOpen && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-orange-400"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile/Tablet Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 h-full w-full sm:w-96 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
                  : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100"
              } z-50 lg:hidden overflow-y-auto`}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between p-6 border-b ${
                  theme === "dark" ? "border-white/10" : "border-gray-200"
                }`}
              >
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  SSK Auto
                </motion.h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"
                  } transition-colors`}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <X className={`w-6 h-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`} />
                </motion.button>
              </div>

              {/* Navigation Menu */}
              <div className="p-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block p-4 rounded-xl transition-all duration-300 group ${
                        currentPath === item.href
                          ? theme === "dark"
                            ? "bg-orange-500/20 border border-orange-500/30"
                            : "bg-orange-100 border border-orange-200"
                          : theme === "dark"
                            ? "hover:bg-white/5 border border-transparent"
                            : "hover:bg-gray-100 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3
                            className={`text-lg font-bold transition-colors ${
                              currentPath === item.href
                                ? "text-orange-400"
                                : theme === "dark"
                                  ? "text-white group-hover:text-orange-400"
                                  : "text-gray-800 group-hover:text-orange-500"
                            }`}
                          >
                            {item.label}
                          </h3>
                          <p className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                            {item.description}
                          </p>
                        </div>
                        <motion.div
                          className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                          whileHover={{ scale: 1.5 }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Information */}
              <div className={`p-6 border-t ${theme === "dark" ? "border-white/10" : "border-gray-200"} mt-8`}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`text-lg font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  Hubungi Kami
                </motion.h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        theme === "dark" ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                          {contact.label}
                        </p>
                        <p className={`font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                          {contact.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-6">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  KONSULTASI GRATIS
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-6 w-20 h-20 bg-orange-400/10 rounded-full blur-xl" />
              <div className="absolute bottom-20 left-6 w-16 h-16 bg-blue-400/10 rounded-full blur-xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import InteractiveNavbar from "@/components/interactive-navbar"
import { useState } from "react"

// Add state for active filter after the existing imports
const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("Semua")

  const portfolioItems = [
    {
      id: 1,
      title: "Restorasi BMW E30 1987",
      category: "Restorasi",
      client: "Bapak Ahmad",
      date: "Desember 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Restorasi total BMW E30 1987 dengan penggantian mesin, cat ulang, dan interior baru.",
      tags: ["Restorasi", "BMW", "Classic Car"],
    },
    {
      id: 2,
      title: "Modifikasi Honda Civic Type R",
      category: "Modifikasi",
      client: "Bapak Rizki",
      date: "November 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Upgrade performa Honda Civic Type R dengan turbo kit dan body kit custom.",
      tags: ["Modifikasi", "Honda", "Performance"],
    },
    {
      id: 3,
      title: "Perbaikan Transmisi Toyota Camry",
      category: "Perbaikan",
      client: "Ibu Sarah",
      date: "Oktober 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Overhaul transmisi otomatis Toyota Camry dengan penggantian komponen internal.",
      tags: ["Perbaikan", "Toyota", "Transmisi"],
    },
    {
      id: 4,
      title: "Custom Paint Job Nissan GTR",
      category: "Custom Paint",
      client: "Bapak Doni",
      date: "September 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cat custom dengan teknik airbrushing dan clear coat premium untuk Nissan GTR.",
      tags: ["Custom Paint", "Nissan", "Airbrushing"],
    },
    {
      id: 5,
      title: "Engine Swap Mazda RX-7",
      category: "Engine Swap",
      client: "Bapak Andi",
      date: "Agustus 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Penggantian mesin rotary dengan mesin turbo 2JZ-GTE untuk performa maksimal.",
      tags: ["Engine Swap", "Mazda", "2JZ"],
    },
    {
      id: 6,
      title: "Restorasi Interior Mercedes W124",
      category: "Interior",
      client: "Bapak Hendra",
      date: "Juli 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Restorasi interior Mercedes W124 dengan bahan kulit premium dan wood trim.",
      tags: ["Interior", "Mercedes", "Luxury"],
    },
  ]

  const categories = ["Semua", "Restorasi", "Modifikasi", "Perbaikan", "Custom Paint", "Engine Swap", "Interior"]

  // Update the filtered portfolio items logic
  const filteredPortfolioItems =
    activeFilter === "Semua" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <InteractiveNavbar currentPath="/portfolio" />

      <div className="pt-20 px-4 py-12">
        <div className="container mx-auto">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/" className="inline-flex items-center text-white hover:text-orange-400 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Portfolio Kami
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Lihat hasil kerja terbaik kami dalam berbagai kategori perbaikan dan modifikasi kendaraan
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === category ? "bg-orange-500 text-white" : "bg-white/10 text-white hover:bg-orange-500"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="wait">
              {filteredPortfolioItems.map((item, index) => (
                <motion.div
                  key={`${activeFilter}-${item.id}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -10 }}
                  layout
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-orange-500 text-white">{item.category}</Badge>
                    </div>
                    <CardContent className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">{item.description}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {item.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-orange-400 text-orange-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 grid md:grid-cols-4 gap-8 text-center"
          >
            <div className="text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-4xl font-bold text-orange-400 mb-2"
              >
                500+
              </motion.div>
              <p className="text-gray-300">Proyek Selesai</p>
            </div>
            <div className="text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                className="text-4xl font-bold text-orange-400 mb-2"
              >
                15+
              </motion.div>
              <p className="text-gray-300">Tahun Pengalaman</p>
            </div>
            <div className="text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="text-4xl font-bold text-orange-400 mb-2"
              >
                98%
              </motion.div>
              <p className="text-gray-300">Kepuasan Pelanggan</p>
            </div>
            <div className="text-white">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                className="text-4xl font-bold text-orange-400 mb-2"
              >
                50+
              </motion.div>
              <p className="text-gray-300">Merk Kendaraan</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/sskauto_bengkelmobil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-pink-400 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-center">&copy; 2025 SSK Auto. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioPage

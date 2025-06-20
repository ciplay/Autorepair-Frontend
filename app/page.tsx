"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Wrench,
  Droplets,
  Settings,
  Snowflake,
  Phone,
  MapPin,
  Clock,
  Play,
  ArrowRight,
} from "lucide-react"
import InteractiveNavbar from "@/components/interactive-navbar"
import Car from "@/components/car"
import { useTheme } from "@/components/theme-provider"

// Hero slides data - Updated descriptions
const heroSlides = [
  {
    id: 1,
    title: "SERVIS MESIN",
    subtitle: "PERAWATAN OPTIMAL",
    description:
      "Layanan servis mesin profesional dengan teknologi diagnostic terdepan. Pastikan performa mesin kendaraan Anda selalu dalam kondisi prima dengan perawatan berkala yang tepat.",
    features: ["Diagnostic Modern", "Spare Part Original", "Teknisi Berpengalaman"],
    buttonText: "BOOKING SERVIS",
    secondaryButtonText: "KONSULTASI",
  },
  {
    id: 2,
    title: "UPGRADE INTERIOR",
    subtitle: "PEMASANGAN PROFESIONAL",
    description:
      "Jasa pemasangan aksesoris interior profesional dengan hasil rapi dan berkualitas. Kami melayani pemasangan berbagai aksesoris interior untuk meningkatkan kenyamanan kabin kendaraan Anda.",
    features: ["Pemasangan Rapi", "Hasil Berkualitas", "Garansi Pemasangan"],
    buttonText: "BOOKING PEMASANGAN",
    secondaryButtonText: "KONSULTASI",
  },
  {
    id: 3,
    title: "SERVIS KAKI-KAKI",
    subtitle: "SISTEM SUSPENSI",
    description:
      "Servis kaki-kaki mobil untuk kenyamanan berkendara optimal. Perawatan sistem suspensi, shock absorber, dan komponen kaki-kaki lainnya dengan teknisi berpengalaman.",
    features: ["Shock Absorber", "Sistem Rem", "Perawatan Berkala"],
    buttonText: "SERVIS SEKARANG",
    secondaryButtonText: "HUBUNGI KAMI",
  },
]

// Services data - Updated services
const services = [
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Servis Mesin",
    description: "Perawatan dan perbaikan mesin mobil dengan teknologi diagnostic modern",
  },
  {
    icon: <Droplets className="w-12 h-12" />,
    title: "Servis Oli",
    description: "Ganti oli mesin berkala dengan oli berkualitas tinggi dan filter original",
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Tune Up",
    description: "Perawatan berkala untuk performa optimal kendaraan Anda",
  },
  {
    icon: <Snowflake className="w-12 h-12" />,
    title: "Servis AC & Kelistrikan",
    description: "Perbaikan sistem AC dan kelistrikan mobil dengan teknisi ahli",
  },
]

export default function HomePage() {
  const [currentService, setCurrentService] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)
    return () => clearInterval(slideTimer)
  }, [])

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      {/* Interactive Navigation */}
      <InteractiveNavbar currentPath="/" />

      {/* Hero Section - Automotive Slider Style */}
      <section className={`relative h-screen overflow-hidden ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(45deg, transparent 40%, ${
                theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
              } 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, ${
                theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
              } 50%, transparent 60%)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center h-full">
            {/* Left Content */}
            <div className={`relative z-10 space-y-8 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-0.5 bg-orange-500"></div>
                    <span className="text-orange-400 font-semibold tracking-wider text-sm md:text-base">
                      {heroSlides[currentSlide].subtitle}
                    </span>
                  </motion.div>

                  {/* Main Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                  >
                    <span className={`block ${theme === "dark" ? "text-white" : "text-gray-800"}`}>SSK AUTOCARE</span>
                    <span className="block text-orange-500">{heroSlides[currentSlide].title}</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg md:text-xl leading-relaxed max-w-xl ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    {heroSlides[currentSlide].features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm ${
                          theme === "dark" ? "bg-white/5" : "bg-black/5"
                        }`}
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-base font-bold rounded-none uppercase tracking-wider transform hover:scale-105 transition-all duration-300 group"
                    >
                      {heroSlides[currentSlide].buttonText}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className={`border-2 px-8 py-4 text-base font-bold rounded-none uppercase tracking-wider backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
                        theme === "dark"
                          ? "border-white text-white hover:bg-white hover:text-black bg-white/5"
                          : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white bg-black/5"
                      }`}
                    >
                      <Play className="mr-2 w-5 h-5" />
                      {heroSlides[currentSlide].secondaryButtonText}
                    </Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Content - Modern Sedan with Auto Animation */}
            <div className="relative h-full lg:h-auto flex items-center justify-center">
              <Car currentSlide={currentSlide} />
            </div>
          </div>

          {/* Side Navigation Lines */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="flex flex-col space-y-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-0.5 h-16 transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-orange-500"
                      : theme === "dark"
                        ? "bg-white/20 hover:bg-white/40"
                        : "bg-gray-800/20 hover:bg-gray-800/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Carousel */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Layanan Kami
          </motion.h2>

          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 backdrop-blur-md border-white/20 text-white"
                      : "bg-white/80 backdrop-blur-md border-gray-200 text-gray-800"
                  }`}
                >
                  <CardContent className="p-6 sm:p-8 md:p-12 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-orange-400 mb-4 sm:mb-6 flex justify-center"
                    >
                      {services[currentService].icon}
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{services[currentService].title}</h3>
                    <p
                      className={`text-base sm:text-lg max-w-2xl mx-auto ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {services[currentService].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevService}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextService}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentService ? "bg-orange-500" : theme === "dark" ? "bg-white/30" : "bg-gray-800/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Hubungi Kami
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className={`text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Telepon</h3>
              <p className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                +62 812-3456-7890
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className={`text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Alamat</h3>
              <p className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Jl. Raya No. 123, Jakarta
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className={`text-center sm:col-span-2 lg:col-span-1 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Jam Buka</h3>
              <p className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                08:00 - 17:00 WIB
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${
          theme === "dark" ? "bg-gray-900 text-white border-gray-800" : "bg-gray-100 text-gray-800 border-gray-200"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/sskauto_bengkelmobil/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "dark"
                    ? "bg-white/10 hover:bg-white/20 text-white hover:text-pink-400"
                    : "bg-black/10 hover:bg-black/20 text-gray-800 hover:text-pink-500"
                }`}
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

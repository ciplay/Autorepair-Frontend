"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import InteractiveNavbar from "@/components/interactive-navbar"

const teamMembers = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "Master Technician & Owner",
    experience: "20 Tahun",
    specialization: ["Engine Overhaul", "Transmission", "Electrical"],
    image: "/placeholder.svg?height=300&width=300",
    email: "budi@sskauto.com",
    phone: "+62 812-1111-1111",
    achievements: ["ASE Master Certified", "BMW Specialist", "Mercedes Certified"],
    description:
      "Pendiri SSK Auto dengan pengalaman lebih dari 20 tahun dalam industri otomotif. Spesialis dalam perbaikan mesin dan sistem transmisi.",
  },
  {
    id: 2,
    name: "Andi Wijaya",
    position: "Senior Mechanic",
    experience: "15 Tahun",
    specialization: ["Body Repair", "Paint Job", "Welding"],
    image: "/placeholder.svg?height=300&width=300",
    email: "andi@sskauto.com",
    phone: "+62 812-2222-2222",
    achievements: ["Paint Specialist Certified", "Welding Expert", "Body Work Master"],
    description:
      "Ahli dalam perbaikan body dan pengecatan dengan teknik terdepan. Berpengalaman menangani berbagai jenis kerusakan body kendaraan.",
  },
  {
    id: 3,
    name: "Rizki Pratama",
    position: "Performance Tuner",
    experience: "12 Tahun",
    specialization: ["ECU Tuning", "Turbo Systems", "Performance Mods"],
    image: "/placeholder.svg?height=300&width=300",
    email: "rizki@sskauto.com",
    phone: "+62 812-3333-3333",
    achievements: ["ECU Tuning Certified", "Turbo Specialist", "Dyno Operator"],
    description:
      "Spesialis dalam modifikasi performa kendaraan dan tuning ECU. Berpengalaman dengan berbagai sistem turbo dan supercharger.",
  },
  {
    id: 4,
    name: "Dedi Kurniawan",
    position: "Electrical Specialist",
    experience: "10 Tahun",
    specialization: ["Auto Electrical", "AC System", "Audio System"],
    image: "/placeholder.svg?height=300&width=300",
    email: "dedi@sskauto.com",
    phone: "+62 812-4444-4444",
    achievements: ["Auto Electrical Certified", "AC Specialist", "Audio Expert"],
    description:
      "Ahli dalam sistem kelistrikan kendaraan modern, AC mobil, dan instalasi sistem audio. Menguasai teknologi terbaru dalam bidang elektronik otomotif.",
  },
  {
    id: 5,
    name: "Hendra Gunawan",
    position: "Interior Specialist",
    experience: "8 Tahun",
    specialization: ["Interior Restoration", "Custom Upholstery", "Leather Work"],
    image: "/placeholder.svg?height=300&width=300",
    email: "hendra@sskauto.com",
    phone: "+62 812-5555-5555",
    achievements: ["Upholstery Master", "Leather Specialist", "Interior Designer"],
    description:
      "Spesialis dalam restorasi dan kustomisasi interior kendaraan. Ahli dalam pengerjaan kulit dan berbagai material interior premium.",
  },
  {
    id: 6,
    name: "Fajar Nugroho",
    position: "Junior Technician",
    experience: "5 Tahun",
    specialization: ["General Maintenance", "Oil Change", "Basic Repairs"],
    image: "/placeholder.svg?height=300&width=300",
    email: "fajar@sskauto.com",
    phone: "+62 812-6666-6666",
    achievements: ["Basic Automotive Certified", "Safety Specialist", "Customer Service Award"],
    description:
      "Teknisi muda yang berdedikasi dalam memberikan pelayanan maintenance rutin dan perbaikan dasar dengan standar kualitas tinggi.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Interactive Navigation */}
      <InteractiveNavbar currentPath="/team" />

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
              Tim Profesional Kami
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Bertemu dengan para ahli yang berpengalaman dan berdedikasi untuk memberikan pelayanan terbaik bagi
              kendaraan Anda
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 right-4 bg-orange-500 text-white">{member.experience}</Badge>
                  </div>

                  <CardContent className="p-6 text-white flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-orange-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-300 mb-4 text-sm flex-1">{member.description}</p>

                    {/* Specializations */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-orange-400">Spesialisasi:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialization.map((spec) => (
                          <Badge key={spec} variant="outline" className="text-xs border-gray-400 text-gray-300">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-orange-400 flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Sertifikasi:
                      </h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-orange-400 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        {member.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        {member.phone}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Kekuatan Tim Kami</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-4xl font-bold text-orange-400 mb-2"
                >
                  75+
                </motion.div>
                <p className="text-gray-300">Total Pengalaman (Tahun)</p>
              </div>
              <div className="text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                  className="text-4xl font-bold text-orange-400 mb-2"
                >
                  25+
                </motion.div>
                <p className="text-gray-300">Sertifikasi Profesional</p>
              </div>
              <div className="text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  className="text-4xl font-bold text-orange-400 mb-2"
                >
                  15+
                </motion.div>
                <p className="text-gray-300">Spesialisasi Keahlian</p>
              </div>
              <div className="text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                  className="text-4xl font-bold text-orange-400 mb-2"
                >
                  100%
                </motion.div>
                <p className="text-gray-300">Komitmen Kualitas</p>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Our Team */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Mengapa Memilih Tim Kami?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md rounded-xl p-6">
                <div className="text-orange-400 text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-2">Berpengalaman</h3>
                <p className="text-gray-300">Tim dengan pengalaman puluhan tahun dalam industri otomotif</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md rounded-xl p-6">
                <div className="text-orange-400 text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-white mb-2">Tersertifikasi</h3>
                <p className="text-gray-300">Memiliki sertifikasi resmi dari berbagai brand kendaraan</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md rounded-xl p-6">
                <div className="text-orange-400 text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-white mb-2">Inovatif</h3>
                <p className="text-gray-300">Selalu mengikuti perkembangan teknologi otomotif terbaru</p>
              </motion.div>
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

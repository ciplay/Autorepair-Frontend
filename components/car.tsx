"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"

interface MobilProps {
  currentSlide: number
}

export default function Mobil({ currentSlide }: MobilProps) {
  const { theme } = useTheme()

  // Auto-animate based on slide
  useEffect(() => {
    // Animation will be handled by the currentSlide prop changes
  }, [currentSlide])

  const getCarState = () => {
    switch (currentSlide) {
      case 0:
        return "engine"
      case 1:
        return "interior"
      case 2:
        return "suspension"
      default:
        return "normal"
    }
  }

  const carState = getCarState()

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Responsive Ground Reflection */}
      <motion.div
        className={`absolute bottom-0 w-full h-20 sm:h-32 md:h-40 ${
          theme === "dark"
            ? "bg-gradient-to-t from-gray-900/90 via-gray-800/60 to-transparent"
            : "bg-gradient-to-t from-gray-400/70 via-gray-300/40 to-transparent"
        } rounded-full blur-md`}
        animate={{
          scaleX: carState === "interior" ? 1.3 : 1.1,
          opacity: carState === "interior" ? 0.9 : 0.7,
        }}
        transition={{ duration: 1 }}
      />

      {/* Main Car Container with 3D Effect - Fully Responsive */}
      <motion.div
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        animate={{
          y: carState === "interior" ? -20 : 0,
          scale: carState === "interior" ? 1.1 : 1,
          rotateY: carState === "engine" ? 5 : 0,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Responsive 3D Sedan SVG */}
        <svg
          className="w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] drop-shadow-2xl"
          viewBox="0 0 900 450"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Realistic Car Shadow with perspective */}
          <motion.ellipse
            cx="450"
            cy="400"
            rx="320"
            ry="40"
            fill="url(#groundShadow)"
            animate={{
              scaleX: carState === "interior" ? 0.9 : 1.3,
              opacity: carState === "interior" ? 0.5 : 0.8,
              ry: carState === "suspension" ? 50 : 40,
            }}
            transition={{ duration: 1 }}
          />

          {/* 3D Car Body with realistic perspective */}
          <motion.g
            animate={{
              y: carState === "suspension" ? 25 : 0,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Main Body - 3D Perspective with curves */}
            <motion.path
              d="M 180 300 
         Q 170 285 185 275 
         L 220 250 
         Q 240 240 265 240 
         L 635 240 
         Q 660 240 680 250 
         L 715 275 
         Q 730 285 720 300 
         L 720 330 
         Q 730 345 720 360 
         L 185 360 
         Q 170 345 180 330 Z"
              fill="url(#carBodyGradient)"
              stroke="url(#carBodyStroke)"
              strokeWidth="2"
            />

            {/* Side Body Panel - 3D depth */}
            <path
              d="M 220 250 
         L 680 250 
         Q 700 255 710 270 
         L 710 340 
         Q 700 355 680 360 
         L 220 360 
         Q 200 355 190 340 
         L 190 270 
         Q 200 255 220 250 Z"
              fill="url(#sideBodyGradient)"
              stroke="url(#bodyLineStroke)"
              strokeWidth="1"
            />

            {/* Roof - 3D curved with realistic perspective */}
            <motion.path
              d="M 265 240 
         Q 250 210 280 185 
         L 340 160 
         Q 365 150 390 150 
         L 510 150 
         Q 535 150 560 160 
         L 620 185 
         Q 650 210 635 240"
              fill="url(#roofGradient)"
              stroke="url(#roofStroke)"
              strokeWidth="2"
              animate={{
                opacity: carState === "interior" ? 0.4 : 1,
              }}
              transition={{ duration: 0.8 }}
            />

            {/* Windshield - 3D glass with reflection */}
            <motion.path
              d="M 280 185 
         Q 295 170 320 165 
         L 365 155 
         Q 390 152 415 152 
         L 485 152 
         Q 510 152 535 155 
         L 580 165 
         Q 605 170 590 185"
              fill="url(#windshieldGradient)"
              stroke="url(#glassStroke)"
              strokeWidth="2"
              animate={{
                opacity: carState === "interior" ? 0.3 : 0.8,
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Side Windows - 3D glass effect */}
            <motion.g
              animate={{
                opacity: carState === "interior" ? 0.3 : 0.8,
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Front Side Window */}
              <path
                d="M 300 195 
           Q 295 190 305 185 
           L 380 185 
           Q 390 190 385 195 
           L 385 225 
           Q 390 235 380 240 
           L 305 240 
           Q 295 235 300 225 Z"
                fill="url(#sideWindowGradient)"
                stroke="url(#glassStroke)"
                strokeWidth="2"
              />

              {/* Rear Side Window */}
              <path
                d="M 400 195 
           Q 395 190 405 185 
           L 520 185 
           Q 530 190 525 195 
           L 525 225 
           Q 530 235 520 240 
           L 405 240 
           Q 395 235 400 225 Z"
                fill="url(#sideWindowGradient)"
                stroke="url(#glassStroke)"
                strokeWidth="2"
              />

              {/* Rear Window */}
              <path
                d="M 540 195 
           Q 535 190 545 185 
           L 590 185 
           Q 605 190 600 195 
           L 600 225 
           Q 605 235 590 240 
           L 545 240 
           Q 535 235 540 225 Z"
                fill="url(#rearWindowGradient)"
                stroke="url(#glassStroke)"
                strokeWidth="2"
              />
            </motion.g>

            {/* Door Lines - 3D depth effect */}
            <motion.g
              animate={{
                opacity: carState === "interior" ? 0.4 : 0.9,
              }}
            >
              <path
                d="M 380 240 L 380 360 Q 385 365 390 360 L 390 245 Q 385 240 380 240"
                fill="url(#doorLineGradient)"
                stroke="url(#bodyLineStroke)"
                strokeWidth="1"
              />
              <path
                d="M 520 240 L 520 360 Q 525 365 530 360 L 530 245 Q 525 240 520 240"
                fill="url(#doorLineGradient)"
                stroke="url(#bodyLineStroke)"
                strokeWidth="1"
              />
            </motion.g>

            {/* Hood - 3D with realistic curves */}
            <motion.path
              d="M 620 240 
         Q 635 225 660 215 
         L 700 215 
         Q 725 225 715 240 
         L 715 280 
         Q 725 295 715 310 
         L 660 310 
         Q 635 295 620 280 Z"
              fill="url(#hoodGradient)"
              stroke="url(#carBodyStroke)"
              strokeWidth="2"
              animate={{
                rotateX: carState === "engine" ? 15 : 0,
                y: carState === "engine" ? -20 : 0,
                scaleY: carState === "engine" ? 0.9 : 1,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "50% 100%" }}
            />

            {/* Realistic Headlights - 3D LED design */}
            <motion.g
              animate={{
                opacity: carState === "engine" ? 0.8 : 1,
              }}
            >
              {/* Main Headlight Housing */}
              <path
                d="M 700 250 
           Q 720 245 730 255 
           Q 725 270 700 265 Z"
                fill="url(#headlightHousing)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />

              {/* LED Elements */}
              <g>
                <ellipse cx="715" cy="257" rx="8" ry="5" fill="url(#ledGradient)" />
                <ellipse cx="715" cy="257" rx="4" ry="2" fill="#FFFFFF" opacity="0.9" />
              </g>

              {/* Lower Headlight */}
              <path
                d="M 700 275 
           Q 720 270 730 280 
           Q 725 295 700 290 Z"
                fill="url(#headlightHousing)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />

              <g>
                <ellipse cx="715" cy="282" rx="8" ry="5" fill="url(#ledGradient)" />
                <ellipse cx="715" cy="282" rx="4" ry="2" fill="#FFFFFF" opacity="0.9" />
              </g>

              {/* LED DRL Strip */}
              <rect x="705" y="252" width="18" height="3" rx="1" fill="url(#drlGradient)" />
              <rect x="705" y="277" width="18" height="3" rx="1" fill="url(#drlGradient)" />
            </motion.g>

            {/* 3D Grille with realistic chrome */}
            <motion.g
              animate={{
                opacity: carState === "engine" ? 0.8 : 1,
              }}
            >
              <path
                d="M 680 260 
           Q 690 255 700 260 
           L 700 300 
           Q 690 305 680 300 Z"
                fill="url(#grilleGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />

              {/* Chrome Slats */}
              <g stroke="url(#chromeStroke)" strokeWidth="2" fill="url(#chromeGradient)">
                <rect x="685" y="265" width="10" height="2" rx="1" />
                <rect x="685" y="270" width="10" height="2" rx="1" />
                <rect x="685" y="275" width="10" height="2" rx="1" />
                <rect x="685" y="280" width="10" height="2" rx="1" />
                <rect x="685" y="285" width="10" height="2" rx="1" />
                <rect x="685" y="290" width="10" height="2" rx="1" />
                <rect x="685" y="295" width="10" height="2" rx="1" />
              </g>

              {/* Brand Logo */}
              <circle cx="690" cy="280" r="8" fill="url(#logoGradient)" stroke="url(#chromeStroke)" strokeWidth="1" />
              <text x="690" y="284" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">
                S
              </text>
            </motion.g>

            {/* Front Bumper - 3D realistic */}
            <g>
              <path
                d="M 650 310 
           Q 670 305 690 310 
           L 690 340 
           Q 670 345 650 340 Z"
                fill="url(#bumperGradient)"
                stroke="url(#carBodyStroke)"
                strokeWidth="2"
              />

              {/* Lower Grille */}
              <rect
                x="660"
                y="320"
                width="20"
                height="10"
                rx="2"
                fill="url(#lowerGrilleGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="1"
              />

              {/* Fog Light */}
              <circle
                cx="640"
                cy="325"
                r="6"
                fill="url(#fogLightGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="1"
              />
              <circle cx="640" cy="325" r="3" fill="#FFFFCC" opacity="0.8" />
            </g>

            {/* Side Mirrors - 3D realistic */}
            <g>
              <ellipse
                cx="250"
                cy="220"
                rx="15"
                ry="10"
                fill="url(#mirrorGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />
              <ellipse cx="250" cy="220" rx="8" ry="5" fill="url(#mirrorGlassGradient)" />

              <ellipse
                cx="650"
                cy="220"
                rx="15"
                ry="10"
                fill="url(#mirrorGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />
              <ellipse cx="650" cy="220" rx="8" ry="5" fill="url(#mirrorGlassGradient)" />
            </g>

            {/* Door Handles - 3D chrome */}
            <ellipse
              cx="360"
              cy="290"
              rx="12"
              ry="6"
              fill="url(#handleGradient)"
              stroke="url(#chromeStroke)"
              strokeWidth="1"
            />
            <ellipse
              cx="500"
              cy="290"
              rx="12"
              ry="6"
              fill="url(#handleGradient)"
              stroke="url(#chromeStroke)"
              strokeWidth="1"
            />

            {/* Realistic Taillights */}
            <g>
              <path
                d="M 200 250 
           Q 180 245 170 255 
           Q 175 270 200 265 Z"
                fill="url(#taillightHousing)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />
              <ellipse cx="185" cy="257" rx="8" ry="5" fill="url(#taillightGradient)" />

              <path
                d="M 200 275 
           Q 180 270 170 280 
           Q 175 295 200 290 Z"
                fill="url(#taillightHousing)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />
              <ellipse cx="185" cy="282" rx="8" ry="5" fill="url(#taillightGradient)" />
            </g>

            {/* Character Lines - 3D body sculpting */}
            <path
              d="M 265 270 
         Q 450 265 635 270"
              stroke="url(#characterLineGradient)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
          </motion.g>

          {/* Realistic 3D Wheels with proper perspective */}
          <motion.g
            animate={{
              y: carState === "suspension" ? 35 : 0,
              opacity: carState === "suspension" ? 0.5 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Front Wheel - 3D perspective */}
            <g>
              {/* Tire with 3D effect */}
              <ellipse cx="580" cy="380" rx="50" ry="48" fill="url(#tireGradient)" stroke="#1a1a1a" strokeWidth="4" />
              <ellipse cx="580" cy="380" rx="45" ry="43" fill="url(#tireSidewall)" stroke="#333" strokeWidth="2" />

              {/* Rim - 3D metallic */}
              <ellipse
                cx="580"
                cy="380"
                rx="38"
                ry="36"
                fill="url(#rimGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="3"
              />
              <ellipse
                cx="580"
                cy="380"
                rx="30"
                ry="28"
                fill="url(#rimInnerGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />

              {/* Spokes - 3D effect */}
              <g stroke="url(#spokeGradient)" strokeWidth="4" fill="url(#spokeGradient)">
                <path d="M 550 350 Q 565 365 580 380 Q 595 365 610 350" />
                <path d="M 610 350 Q 595 395 580 380 Q 565 395 550 410" />
                <path d="M 550 410 Q 565 395 580 380 Q 595 395 610 410" />
                <path d="M 610 410 Q 595 365 580 380 Q 565 365 550 350" />
                <path d="M 580 345 L 580 415" strokeWidth="5" />
              </g>

              {/* Center Cap - 3D */}
              <circle
                cx="580"
                cy="380"
                r="12"
                fill="url(#centerCapGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />
              <circle cx="580" cy="380" r="6" fill="url(#logoGradient)" />

              {/* Brake Disc - visible through spokes */}
              <circle
                cx="580"
                cy="380"
                r="25"
                fill="none"
                stroke="url(#brakeDiscGradient)"
                strokeWidth="3"
                opacity="0.7"
              />
            </g>

            {/* Rear Wheel - 3D perspective */}
            <g>
              {/* Tire with 3D effect */}
              <ellipse cx="320" cy="380" rx="50" ry="48" fill="url(#tireGradient)" stroke="#1a1a1a" strokeWidth="4" />
              <ellipse cx="320" cy="380" rx="45" ry="43" fill="url(#tireSidewall)" stroke="#333" strokeWidth="2" />

              {/* Rim - 3D metallic */}
              <ellipse
                cx="320"
                cy="380"
                rx="38"
                ry="36"
                fill="url(#rimGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="3"
              />
              <ellipse
                cx="320"
                cy="380"
                rx="30"
                ry="28"
                fill="url(#rimInnerGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />

              {/* Spokes - 3D effect */}
              <g stroke="url(#spokeGradient)" strokeWidth="4" fill="url(#spokeGradient)">
                <path d="M 290 350 Q 305 365 320 380 Q 335 365 350 350" />
                <path d="M 350 350 Q 335 395 320 380 Q 305 395 290 410" />
                <path d="M 290 410 Q 305 395 320 380 Q 335 395 350 410" />
                <path d="M 350 410 Q 335 365 320 380 Q 305 365 290 350" />
                <path d="M 320 345 L 320 415" strokeWidth="5" />
              </g>

              {/* Center Cap - 3D */}
              <circle
                cx="320"
                cy="380"
                r="12"
                fill="url(#centerCapGradient)"
                stroke="url(#chromeStroke)"
                strokeWidth="2"
              />
              <circle cx="320" cy="380" r="6" fill="url(#logoGradient)" />

              {/* Brake Disc - visible through spokes */}
              <circle
                cx="320"
                cy="380"
                r="25"
                fill="none"
                stroke="url(#brakeDiscGradient)"
                strokeWidth="3"
                opacity="0.7"
              />
            </g>
          </motion.g>

          {/* Engine Bay Details - 3D realistic */}
          <AnimatePresence>
            {carState === "engine" && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Engine Block - 3D */}
                <path
                  d="M 620 180 
             Q 630 175 650 180 
             L 680 180 
             Q 690 185 685 195 
             L 685 220 
             Q 690 230 680 235 
             L 650 235 
             Q 630 230 620 220 Z"
                  fill="url(#engineBlockGradient)"
                  stroke="#000"
                  strokeWidth="2"
                />

                {/* Engine Components - 3D */}
                <circle cx="635" cy="195" r="6" fill="url(#engineComponentGradient)" stroke="#000" strokeWidth="1" />
                <circle cx="650" cy="195" r="6" fill="url(#engineComponentGradient)" stroke="#000" strokeWidth="1" />
                <circle cx="665" cy="195" r="6" fill="url(#engineComponentGradient)" stroke="#000" strokeWidth="1" />

                {/* Air Intake - 3D */}
                <rect
                  x="630"
                  y="170"
                  width="35"
                  height="12"
                  rx="6"
                  fill="url(#airIntakeGradient)"
                  stroke="#000"
                  strokeWidth="1"
                />

                {/* Radiator - 3D */}
                <rect
                  x="685"
                  y="190"
                  width="12"
                  height="35"
                  rx="3"
                  fill="url(#radiatorGradient)"
                  stroke="#000"
                  strokeWidth="1"
                />

                {/* Battery - 3D */}
                <rect
                  x="600"
                  y="165"
                  width="25"
                  height="18"
                  rx="3"
                  fill="url(#batteryGradient)"
                  stroke="#000"
                  strokeWidth="1"
                />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Interior Details - 3D realistic */}
          <AnimatePresence>
            {carState === "interior" && (
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {/* Dashboard - 3D curved */}
                <path
                  d="M 500 210 
             Q 520 205 550 210 
             L 550 230 
             Q 520 235 500 230 Z"
                  fill="url(#dashboardGradient)"
                  stroke="#000"
                  strokeWidth="2"
                />

                {/* Steering Wheel - 3D */}
                <circle cx="520" cy="220" r="18" fill="none" stroke="url(#steeringWheelGradient)" strokeWidth="5" />
                <circle
                  cx="520"
                  cy="220"
                  r="10"
                  fill="url(#steeringWheelCenterGradient)"
                  stroke="#000"
                  strokeWidth="2"
                />

                {/* Seats - 3D leather */}
                <g>
                  <path
                    d="M 300 230 
               Q 310 225 330 230 
               L 330 260 
               Q 310 265 300 260 Z"
                    fill="url(#seatGradient)"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <path
                    d="M 350 230 
               Q 360 225 380 230 
               L 380 260 
               Q 360 265 350 260 Z"
                    fill="url(#seatGradient)"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <path
                    d="M 400 235 
               Q 410 230 480 235 
               L 480 265 
               Q 410 270 400 265 Z"
                    fill="url(#seatGradient)"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </g>
              </motion.g>
            )}
          </AnimatePresence>

          {/* Suspension System - 3D realistic */}
          <AnimatePresence>
            {carState === "suspension" && (
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Front Suspension - 3D */}
                <g>
                  <path
                    d="M 575 330 
               L 575 395 
               Q 580 400 585 395 
               L 585 335 
               Q 580 330 575 330"
                    fill="url(#suspensionGradient)"
                    stroke="#000"
                    strokeWidth="2"
                  />

                  {/* Animated Spring - 3D */}
                  <motion.path
                    d="M 575 340 
               Q 570 345 575 350 
               Q 585 355 575 360 
               Q 570 365 575 370 
               Q 585 375 575 380"
                    stroke="url(#springGradient)"
                    strokeWidth="6"
                    fill="none"
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </g>

                {/* Rear Suspension - 3D */}
                <g>
                  <path
                    d="M 315 330 
               L 315 395 
               Q 320 400 325 395 
               L 325 335 
               Q 320 330 315 330"
                    fill="url(#suspensionGradient)"
                    stroke="#000"
                    strokeWidth="2"
                  />

                  {/* Animated Spring - 3D */}
                  <motion.path
                    d="M 315 340 
               Q 310 345 315 350 
               Q 325 355 315 360 
               Q 310 365 315 370 
               Q 325 375 315 380"
                    stroke="url(#springGradient)"
                    strokeWidth="6"
                    fill="none"
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.8,
                    }}
                  />
                </g>
              </motion.g>
            )}
          </AnimatePresence>

          {/* Realistic 3D Gradients and Effects */}
          <defs>
            {/* Ground Shadow */}
            <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={theme === "dark" ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.6)"} />
              <stop offset="70%" stopColor={theme === "dark" ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.3)"} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            {/* Car Body Gradients - Realistic metallic paint */}
            <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme === "dark" ? "#F8F8F8" : "#FFFFFF"} />
              <stop offset="30%" stopColor={theme === "dark" ? "#E8E8E8" : "#F5F5F5"} />
              <stop offset="70%" stopColor={theme === "dark" ? "#D0D0D0" : "#E0E0E0"} />
              <stop offset="100%" stopColor={theme === "dark" ? "#B8B8B8" : "#C8C8C8"} />
            </linearGradient>

            <linearGradient id="sideBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={theme === "dark" ? "#E0E0E0" : "#F0F0F0"} />
              <stop offset="50%" stopColor={theme === "dark" ? "#F0F0F0" : "#FFFFFF"} />
              <stop offset="100%" stopColor={theme === "dark" ? "#D0D0D0" : "#E8E8E8"} />
            </linearGradient>

            <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme === "dark" ? "#FFFFFF" : "#FFFFFF"} />
              <stop offset="100%" stopColor={theme === "dark" ? "#E0E0E0" : "#F0F0F0"} />
            </linearGradient>

            <linearGradient id="hoodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={theme === "dark" ? "#FFFFFF" : "#FFFFFF"} />
              <stop offset="50%" stopColor={theme === "dark" ? "#F0F0F0" : "#F8F8F8"} />
              <stop offset="100%" stopColor={theme === "dark" ? "#D8D8D8" : "#E8E8E8"} />
            </linearGradient>

            {/* Glass Gradients - Realistic reflections */}
            <linearGradient id="windshieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(135, 206, 235, 0.8)" />
              <stop offset="50%" stopColor="rgba(70, 130, 180, 0.6)" />
              <stop offset="100%" stopColor="rgba(47, 79, 79, 0.4)" />
            </linearGradient>

            <linearGradient id="sideWindowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(135, 206, 235, 0.7)" />
              <stop offset="100%" stopColor="rgba(47, 79, 79, 0.5)" />
            </linearGradient>

            <linearGradient id="rearWindowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(135, 206, 235, 0.6)" />
              <stop offset="100%" stopColor="rgba(47, 79, 79, 0.4)" />
            </linearGradient>

            {/* Chrome and Metal Effects */}
            <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#E8E8E8" />
              <stop offset="70%" stopColor="#C0C0C0" />
              <stop offset="100%" stopColor="#A0A0A0" />
            </linearGradient>

            <linearGradient id="chromeStroke" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D0D0D0" />
              <stop offset="100%" stopColor="#808080" />
            </linearGradient>

            {/* Lighting Effects */}
            <radialGradient id="ledGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F0F8FF" />
              <stop offset="100%" stopColor="#E0E8F0" />
            </radialGradient>

            <linearGradient id="drlGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#87CEEB" />
            </linearGradient>

            <radialGradient id="taillightGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF6666" />
              <stop offset="70%" stopColor="#FF4444" />
              <stop offset="100%" stopColor="#CC0000" />
            </radialGradient>

            {/* Wheel Gradients - 3D metallic */}
            <radialGradient id="rimGradient" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#E0E0E0" />
              <stop offset="80%" stopColor="#B0B0B0" />
              <stop offset="100%" stopColor="#808080" />
            </radialGradient>

            <radialGradient id="rimInnerGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F0F0F0" />
              <stop offset="100%" stopColor="#C0C0C0" />
            </radialGradient>

            <linearGradient id="tireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A2A2A" />
              <stop offset="50%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#0A0A0A" />
            </linearGradient>

            <linearGradient id="tireSidewall" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#404040" />
              <stop offset="100%" stopColor="#202020" />
            </linearGradient>

            {/* Component Gradients */}
            <linearGradient id="engineBlockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#606060" />
              <stop offset="100%" stopColor="#303030" />
            </linearGradient>

            <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#404040" />
              <stop offset="100%" stopColor="#202020" />
            </linearGradient>

            <linearGradient id="seatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="50%" stopColor="#A0522D" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>

            <linearGradient id="suspensionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#808080" />
              <stop offset="100%" stopColor="#404040" />
            </linearGradient>

            <linearGradient id="springGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="50%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>

            {/* Additional realistic effects */}
            <linearGradient id="grilleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            <linearGradient id="bumperGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F0F0F0" />
              <stop offset="100%" stopColor="#D0D0D0" />
            </linearGradient>

            <radialGradient id="logoGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0E0E0" />
              <stop offset="100%" stopColor="#A0A0A0" />
            </radialGradient>

            {/* Additional gradients for missing elements */}
            <linearGradient id="headlightHousing" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F0F0F0" />
              <stop offset="100%" stopColor="#C0C0C0" />
            </linearGradient>

            <linearGradient id="taillightHousing" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0E0E0" />
              <stop offset="100%" stopColor="#B0B0B0" />
            </linearGradient>

            <linearGradient id="mirrorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F0F0F0" />
              <stop offset="100%" stopColor="#D0D0D0" />
            </linearGradient>

            <linearGradient id="mirrorGlassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(135, 206, 235, 0.8)" />
              <stop offset="100%" stopColor="rgba(47, 79, 79, 0.6)" />
            </linearGradient>

            <linearGradient id="handleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0E0E0" />
              <stop offset="100%" stopColor="#B0B0B0" />
            </linearGradient>

            <linearGradient id="doorLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D0D0D0" />
              <stop offset="100%" stopColor="#A0A0A0" />
            </linearGradient>

            <linearGradient id="characterLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C0C0C0" />
              <stop offset="50%" stopColor="#E0E0E0" />
              <stop offset="100%" stopColor="#C0C0C0" />
            </linearGradient>

            <linearGradient id="spokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0E0E0" />
              <stop offset="100%" stopColor="#A0A0A0" />
            </linearGradient>

            <radialGradient id="centerCapGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F0F0F0" />
              <stop offset="100%" stopColor="#C0C0C0" />
            </radialGradient>

            <linearGradient id="brakeDiscGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B0B0B0" />
              <stop offset="100%" stopColor="#808080" />
            </linearGradient>

            <linearGradient id="engineComponentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>

            <linearGradient id="airIntakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#404040" />
              <stop offset="100%" stopColor="#202020" />
            </linearGradient>

            <linearGradient id="radiatorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#606060" />
              <stop offset="100%" stopColor="#404040" />
            </linearGradient>

            <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            <linearGradient id="steeringWheelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#404040" />
              <stop offset="100%" stopColor="#202020" />
            </linearGradient>

            <linearGradient id="steeringWheelCenterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#606060" />
              <stop offset="100%" stopColor="#404040" />
            </linearGradient>

            <linearGradient id="fogLightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F0F0F0" />
            </linearGradient>

            <linearGradient id="lowerGrilleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A2A2A" />
              <stop offset="100%" stopColor="#1A1A1A" />
            </linearGradient>

            {/* Stroke definitions */}
            <linearGradient id="carBodyStroke" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B0B0B0" />
              <stop offset="100%" stopColor="#808080" />
            </linearGradient>

            <linearGradient id="bodyLineStroke" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C0C0C0" />
              <stop offset="100%" stopColor="#909090" />
            </linearGradient>

            <linearGradient id="glassStroke" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#606060" />
              <stop offset="100%" stopColor="#404040" />
            </linearGradient>

            <linearGradient id="roofStroke" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C0C0C0" />
              <stop offset="100%" stopColor="#A0A0A0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Enhanced 3D Light Effects - Responsive */}
        <motion.div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-radial from-orange-400/30 via-yellow-300/20 to-transparent"
              : "bg-gradient-radial from-orange-300/40 via-yellow-200/30 to-transparent"
          } rounded-full blur-xl sm:blur-2xl`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Additional ambient lighting - Responsive */}
        <motion.div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-conic from-blue-400/20 via-purple-300/15 to-orange-400/20"
              : "bg-gradient-conic from-blue-300/30 via-purple-200/25 to-orange-300/30"
          } rounded-full blur-2xl sm:blur-3xl`}
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Enhanced State Indicator - Responsive */}
      <motion.div
        className={`absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 ${
          theme === "dark" ? "text-white bg-black/60" : "text-gray-800 bg-white/80"
        } text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl backdrop-blur-md border-2 ${
          theme === "dark" ? "border-white/30" : "border-gray-300/60"
        } shadow-2xl max-w-[90vw] text-center`}
        animate={{
          opacity: carState === "normal" ? 0 : 1,
          y: carState === "normal" ? 20 : 0,
          scale: carState === "normal" ? 0.8 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {carState === "engine" && (
          <span className="block sm:inline">
            🔧 <span className="hidden sm:inline">Servis Mesin - </span>Engine Bay Active
          </span>
        )}
        {carState === "interior" && (
          <span className="block sm:inline">
            🪑 <span className="hidden sm:inline">Upgrade Interior - </span>Interior View Active
          </span>
        )}
        {carState === "suspension" && (
          <span className="block sm:inline">
            ⚙️ <span className="hidden sm:inline">Servis Kaki-kaki - </span>Suspension System Active
          </span>
        )}
      </motion.div>
    </div>
  )
}

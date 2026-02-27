import { motion } from "framer-motion"
import AuthCard from "../components/AuthCard"
import BackgroundCarousel from "../components/BackgroundCarousel"

export default function EntryPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-sky-200 overflow-hidden">
      
      {/* Background layer */}
      <BackgroundCarousel />

      {/* Centered Auth Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <AuthCard />
        </motion.div>
      </div>
    </div>
  )
}
import { motion } from "framer-motion"

// Making setView optional (?) fixes the error in AuthCard, Thanks Gemini for this one.
type Props = {
  setView?: (view: "signup" | "login" | "recovery") => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

export default function RecoveryForm({ setView }: Props) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-blue-950 mb-2">
        Reset Password
      </motion.h2>

      <motion.p variants={itemVariants} className="text-sm text-slate-500 mb-6">
        Enter your email and we'll send you a recovery link to get back into your account.
      </motion.p>

      <motion.input 
        variants={itemVariants}
        type="email" 
        placeholder="Email Address" 
        className="mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/50"
      />

      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md hover:shadow-lg transition"
      >
        Send Link
      </motion.button>

      {/* This allows users to go back if they made a mistake which they probably wont make. */}
      <motion.p
        variants={itemVariants}
        onClick={() => setView?.("login")}
        className="mt-4 text-center text-xs text-blue-700 cursor-pointer hover:underline"
      >
        Back to Login
      </motion.p>
    </motion.div>
  )
}
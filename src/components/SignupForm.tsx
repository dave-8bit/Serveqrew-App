import { motion } from "framer-motion"

// Animation variants for the waterfall effect
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

export default function SignupForm() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-blue-950 mb-4">
        Sign Up
      </motion.h2>
      
      <motion.input 
        variants={itemVariants}
        type="text" 
        placeholder="Name" 
        className="mb-3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/50"
      />
      
      <motion.input 
        variants={itemVariants}
        type="email" 
        placeholder="Email" 
        className="mb-3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/50"
      />
      
      <motion.input 
        variants={itemVariants}
        type="password" 
        placeholder="Password" 
        className="mb-3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/50"
      />

      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:shadow-lg transition shadow-md"
      >
        Create Account
      </motion.button>
    </motion.div>
  )
}
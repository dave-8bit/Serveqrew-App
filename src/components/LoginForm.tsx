import { motion } from "framer-motion"

// Using '?' makes setView optional, which stops the error in AuthCard
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

export default function LoginForm({ setView }: Props) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-blue-950 mb-4">
        Login
      </motion.h2>

      <motion.input 
        variants={itemVariants}
        type="email" 
        placeholder="Email" 
        className="mb-3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/50"
      />

      <motion.input 
        variants={itemVariants}
        type="password" 
        placeholder="Password" 
        className="mb-3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/50"
      />
      
      <motion.p
        variants={itemVariants}
        // Use optional chaining (?.) so it only fires if setView exists
        onClick={() => setView?.("recovery")}
        className="text-sm text-blue-700 cursor-pointer mb-3 hover:underline w-fit"
      >
        Forgot Password?
      </motion.p>

      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md hover:shadow-lg transition"
      >
        Welcome Back!
      </motion.button>
    </motion.div>
  )
}
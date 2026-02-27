import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import RecoveryForm from "./RecoveryForm"
import SwitchAuthText from "./SwitchAuthText"

export default function AuthCard() {
  const [view, setView] = useState<"signup" | "login" | "recovery">("signup")

  const switchConfig = {
    signup: { 
      prompt: "Already have an account?", 
      actionText: "Log in", 
      action: () => setView("login") 
    },
    login: { 
      prompt: "Don't have an account?", 
      actionText: "Sign up", 
      action: () => setView("signup") 
    },
    recovery: { 
      prompt: "Remembered your password?", 
      actionText: "Back to login", 
      action: () => setView("login") 
    },
  }

  const currentSwitch = switchConfig[view]

  return (
    <div className="w-full max-w-md rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl p-8 overflow-hidden">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* We removed setView here because the forms are now "prop-less" */}
          {view === "signup" && <SignupForm />}
          {view === "login" && <LoginForm />}
          {view === "recovery" && <RecoveryForm />}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 border-t border-white/20 pt-2 text-center">
        <SwitchAuthText 
          prompt={currentSwitch.prompt} 
          actionText={currentSwitch.actionText} 
          action={currentSwitch.action} 
        />
      </div>
      
    </div>
  )
}
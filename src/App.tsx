import { Routes, Route, Navigate } from 'react-router-dom'
import EntryPage from './pages/EntryPage'

export default function App() {
  return (
    <Routes>
      {/* Main Entry */}
      <Route path="/" element={<EntryPage />} />

      {/* Catch all unknown routes just incase cause i am not done yet! */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login and Registry */}
        {/* Cualquier path que entre por auth mostrara nuestro elemento definido */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* Journal App */}
        {/* Cualquier otra ruta que no entre por auth */}
        <Route path="/*" element={ <JournalRoutes /> } />
        <Route />
    </Routes>
  )
}

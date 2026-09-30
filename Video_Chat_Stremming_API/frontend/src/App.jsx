import LandingPage from "./components/landingPage"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Dashboard from "./components/Dashboard"
import { Routes, Route } from "react-router"
import Chat from "./components/chat"

function App() {
    return (

        <Routes >
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    )
}

export default App;
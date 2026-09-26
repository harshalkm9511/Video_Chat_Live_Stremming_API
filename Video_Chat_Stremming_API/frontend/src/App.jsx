import LandingPage from "./components/landingPage"
import Signin from "./components/signin"
import Signup from "./components/signup"
import {Routes, Route } from "react-router"

function App() {
    return (

        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default App;
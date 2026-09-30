import App from "./App"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import { AuthProvider } from "./context"

createRoot(document.getElementById("root"))
    .render(
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    );
import App from "./App"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"

createRoot(document.getElementById("root"))
    .render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
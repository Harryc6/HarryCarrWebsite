import React from "react"
import ReactDOM from "react-dom/client"
import { inject } from "@vercel/analytics"
import "./index.css"
import "./font.css"
import App from "./App"

inject()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

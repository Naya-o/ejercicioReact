import React from "react"
import ReactDom from "react-dom/client"
import App from "./app"

const root = ReactDom.createRoot(document.getElementById("root"))
/* root.render(contenido-es lo que pasara por document-) */

root.render(<section><App /></section>)  //se llama App por el componente
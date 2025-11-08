import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";

// Ensure axios includes cookies for cross-site requests by default
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")!).render(<App />);

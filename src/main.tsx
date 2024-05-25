import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//import pages for router
import ErrorPage from "./pages/ErrorPage.tsx"
import Home from "./pages/Home.tsx"
import SettingsPage from "./pages/SettingsPage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/settingspage",
        element: <SettingsPage />
      }
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

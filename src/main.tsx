import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { NextUIProvider } from "@nextui-org/react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//import pages for router
import ErrorPage from "./pages/ErrorPage.tsx"
import Home from "./pages/Home.tsx"
import SettingsPage from "./pages/SettingsPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import KingdomsRise from "./pages/KingdomsRisePage.tsx"
import SleepyLegends from "./pages/SleepyLegendsPage.tsx"
import SignUpPage from "./pages/SignUpPage.tsx"

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
        path: "/settings/*",
        element: <SettingsPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <SignUpPage />
      },
      {
        path: "/kingdomsrise",
        element: <KingdomsRise />
      },
      {
        path: "/sleepylegends",
        element: <SleepyLegends />
      }

    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

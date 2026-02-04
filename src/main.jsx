import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import './styles/tailwind.css'
import './styles/main.scss'
import './i18n'
import { useThemeStore } from './theme/theme.store'

const theme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', theme)
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
)
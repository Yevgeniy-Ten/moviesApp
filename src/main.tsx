import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "./shared/css/global.css"
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)

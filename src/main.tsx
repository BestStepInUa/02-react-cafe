import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Нормалізація стилів
import 'modern-normalize'
import App from './components/App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)


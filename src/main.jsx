import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'
 
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </HashRouter>
  </QueryClientProvider>
)

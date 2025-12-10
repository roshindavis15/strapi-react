import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/error/ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)

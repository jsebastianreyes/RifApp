import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './components/globalstyles.jsx'
import { ProviderGlobalData } from './context/variables-globales.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderGlobalData>
    <GlobalStyle/>
    <App />
  </ProviderGlobalData>,
)

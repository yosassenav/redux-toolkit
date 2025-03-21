import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {store} from './store'
import { PokemonApp } from './PokemonApp.jsx'
//import App from './App.jsx'
import './index.css'
import { TodoApp } from './TodoApp.jsx'




createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      {/*<App />*/}
      {/*<PokemonApp/>*/}
      <TodoApp/>
    </StrictMode>                   
  </Provider>,
)

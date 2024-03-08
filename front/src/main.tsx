import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './TravelanzRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { LoaderSpinner } from './shared/components/Loader'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} fallbackElement={<LoaderSpinner/>}/>
    </Provider>
  </React.StrictMode>,
)

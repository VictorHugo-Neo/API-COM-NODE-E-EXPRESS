import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import myRouter from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={myRouter} />
    </React.StrictMode>,
  </ChakraProvider>

)

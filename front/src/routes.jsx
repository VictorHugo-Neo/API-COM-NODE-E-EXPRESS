import {
    createBrowserRouter, Navigate
} from 'react-router-dom'
import { Auth } from './hooks/Auth'
import { ProtectedRoutes } from './hooks/ProtectedRoutes'
//paginas
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPages'

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path:"/login",
        element: !Auth ?<LoginPage/> : <Navigate to = '/painel'/>
    },
    {
        path:"/clientes",
        element:
        <ProtectedRoutes>
            <div>Usuário está logado</div>
        </ProtectedRoutes>
    },
    {
        path: '/painel',
        element:
        <ProtectedRoutes>
            <div>Painei do usuário</div>
        </ProtectedRoutes>
    },
    {
        path: '/registrar',
        element: !Auth ? <RegisterPage/> : <Navigate to = '/painel'/>
    }
])

export default myRouter
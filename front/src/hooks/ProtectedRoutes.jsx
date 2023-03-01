import {Navigate} from 'react-router-dom'
import {Auth} from './Auth'

export const ProtectedRoutes = ({children}) =>{
    const Auth = localStorage.getItem('meusite.com.br') !== null
    if(!Auth){
        return <navigator to='/login'/>
    }
    return children
}
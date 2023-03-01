export const Auth = localStorage.getItem('meusite.com.br') !== null
export const login = (token) =>{
    localStorage.setItem('meusite.com.br', token)
}
export const logout = () => {
    localStorage.removeItem('meusite.com.br')
}
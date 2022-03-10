import {createContext, useState} from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem('login') ? localStorage.getItem('login') : '')
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  const values = {
    login,
    token,
    setLogin,
    setToken,
  }

  return(
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;

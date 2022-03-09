import {createContext, useState} from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem('login') ? localStorage.getItem('login') : '')
  const values = {
    login,
    setLogin,
  }

  return(
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;

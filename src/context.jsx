 import {createContext, useState, useContext}  from "react"
const AppContext = createContext()
  export const AppProvider = ({children}) =>{
    const [IsSidebarOpen, setIsSidebarOpen] = useState(false)
     const[pageId, setPageId] = useState(null)
    const openSidebar =() =>{
         setIsSidebarOpen(true)
  }
    const closeSidebar =() =>{
         setIsSidebarOpen(false)
  }
  return <AppContext.Provider value={{IsSidebarOpen,openSidebar,closeSidebar,pageId, setPageId}}>

    {children}
  </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
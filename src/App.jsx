  import React from 'react'
import  {useGlobalContext} from"./context"
const App = () => {
  const {IsSidebarOpen} = useGlobalContext()
  console.log(IsSidebarOpen)
  return (
    <div>App</div>
  )
}

export default App
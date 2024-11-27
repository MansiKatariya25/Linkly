import { useState } from 'react'
import Home from './Component/Home'
import { BrowserRouter ,Route,  Routes} from 'react-router-dom'
import Url from './Component/Url'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
 axios.defaults.baseURL = "https://liinkly-server.vercel.app"
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/m/:id'} element={<Url/>} />
          <Route path={'*'} element={<Url/>}/>
         </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

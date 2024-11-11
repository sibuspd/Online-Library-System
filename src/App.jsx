import "./components/style.css"
import Header from "./components/Header"
import {Outlet} from "react-router-dom"

function App() {



  return (
    <> 
        <h1 id="Heading">Welcome to Book Management Application</h1>
        <Header/>
        <Outlet/>
    </>
  )
}
export default App

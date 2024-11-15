import "./components/style.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Outlet} from "react-router-dom"

function App() {



  return (
    <> 
        <h1 id="Heading">Welcome to Book Management Application</h1>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
export default App

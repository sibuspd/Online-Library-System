import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from "./components/Contact.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from "./components/Error.jsx"
import BookList from './components/BookList.jsx'
import BookDetail from './components/BookDetail.jsx'


// Creating Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <BookList/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/book-isbn/:isbn",
        element: <BookDetail/>
      }
    ] 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)



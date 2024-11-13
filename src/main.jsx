import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from "./components/Contact.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from "./components/Error.jsx"
import BookList from './components/BookList.jsx'
import BookListII from './components/BookListII.jsx'
import BookDetail from './components/BookDetail.jsx'
import BookDetail_II from './components/BookDetail_II.jsx'

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
        path: "/2nd_bookList",
        element: <BookListII/>
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
      },
      {
        path: "/book-id/:id",
        element: <BookDetail_II/>
      }
    ] 
  } 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)



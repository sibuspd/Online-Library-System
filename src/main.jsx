import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from "./components/Error.jsx"
import BookList from './components/BookList.jsx'
// import BookListII from './components/BookListII.jsx'
import BookDetail from './components/BookDetail.jsx'
import BookDetail_II from './components/BookDetail_II.jsx'
import ReadingList from './components/ReadingList.jsx'
import { lazy, Suspense } from "react"
import AddBook from './components/AddBook.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'

const About = lazy(()=>import ("./components/About.jsx"));
const Contact = lazy(()=>import ("./components/Contact.jsx"));
const BookListII = lazy(()=>import ("./components/BookListII.jsx"));



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
        element: <Suspense fallback={<h1>Fetching data 🔄..........Please wait</h1>}>
                    <BookListII/>
                  </Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading 🔄..........Please wait</h1>}>
                  <About/>
                </Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Loading 🔄..........Please wait</h1>}>
                  <Contact/>
                  </Suspense>,
      },
      {
        path: "/book-isbn/:isbn",
        element: <BookDetail/>
      },
      {
        path: "/book-id/:id",
        element: <BookDetail_II/>
      },
      {
        path: "/reading-list",
        element: <ReadingList/>
      },
      {
        path: "/add-book",
        element: <AddBook/>
      },
      {
        path: "/browse-books",
        element: <BrowseBooks/>
      },
      {
        path: "/browse-books/:category", // Path parameter configured for categorized Books
        element: <BrowseBooks/>
      }
    ] 
  } 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)



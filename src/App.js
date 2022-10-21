import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavLayout from "./Layouts/NavLayout";
import HomePage from "./Pages/HomePage"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ])
  
  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
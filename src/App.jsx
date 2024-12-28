import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";


const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'room/:id',
      element:<VideoPage/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
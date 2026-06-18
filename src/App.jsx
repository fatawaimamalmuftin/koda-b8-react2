import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingRicknMorty from './pages/LandingRicknMorty';


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <LandingRicknMorty />
    </>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
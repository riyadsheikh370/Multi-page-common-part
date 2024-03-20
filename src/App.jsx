import RootLayout from "./Components/root/RootLayout";
import Home from "./pages/Home"
import Service from "./pages/Service"
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
  </Route>
))



function App() {


  return (
    <>
 <RouterProvider router={router}/>
    </>
  )
}

export default App

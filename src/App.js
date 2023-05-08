import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFount/NotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductProvider, { ProductContext } from './Contexts/ProductContext';
function App() {
  let router =createBrowserRouter([{
    path:"",element:<Layout></Layout>,children:[
      {index:true,element: <Home/> },
      {path:"cart",element:<Cart/> },
      {path:"details/:id",element: <Details></Details>},
      {path:"*",element: <NotFound/>},
    ]
  }])
  return (
   <>
   <ProductProvider>
   <RouterProvider router={router}></RouterProvider>
   </ProductProvider>
    
   </>
  );
}

export default App;

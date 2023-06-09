import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFount/NotFound'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import ProductProvider, { ProductContext } from './Contexts/ProductContext';
import CartProvider from './Contexts/CartContext';
function App() {
  let router =createHashRouter([{
    path:"",element:<Layout></Layout>,children:[
      {index:true,element: <Home/> },
      {path:"cart",element:<Cart/> },
      {path:"details/:id",element: <Details></Details>},
      {path:"*",element: <NotFound/>},
    ]
  }])
  return (
   <>
   <CartProvider>

  <ProductProvider>
   <RouterProvider router={router}></RouterProvider>
   </ProductProvider>
    
   </CartProvider>
 
   </>
  );
}

export default App;

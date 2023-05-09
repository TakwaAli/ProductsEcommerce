import React, { useContext } from 'react'
import { ProductContext } from '../../Contexts/ProductContext';
import styles from './Home.css'
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer'
export default function Home() {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <>
    
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-center ">

          {products.map((product) => {
            return (
              <>

                 <div className='col-lg-3 col-md-6 col-10  mt-3 zoom' key={product.id}>
                 <Link className='text-decoration-none' to={`/details/${product.id}`}>
                  <img src={product.image} className='w-50 h-75'></img>
                  <h5>{product.category}</h5>
                  <h5 className='price-color'>{product.price} EGP</h5>
                  </Link>
                </div>
           
              </>

            )
          })}

        </div>
      </div>
     <Footer></Footer>
    </>
  )
}
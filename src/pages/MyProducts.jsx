import React, { useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";

const MyProducts = () => {

    
  const [products, setProducts] = useState([])

  useEffect( () => {
    fetch("http://localhost:5000/blogs")
    .then( (res) => res.json() )
    .then ( (data) => setProducts(data)) ;
  }, []) ;


  const handleDeleteProduct = (id) => {
    setProducts(products.filter( (product) => product.id !== id )) ;
  };

  
  console.log(products);


    return (
        <div>
        <h1 className="text-orange-500 text-3xl font-bold text-center mb-5">You Have {products.length} Blogs</h1>
  
        <div className="grid grid-cols-3 gap-4 ">
         
            {products.map((item) => (
             <div className="col-span-1">  <SingleProduct item={item} onDelete={handleDeleteProduct}></SingleProduct> </div>
            ))}
         
        </div>
      </div>
    );
};

export default MyProducts;
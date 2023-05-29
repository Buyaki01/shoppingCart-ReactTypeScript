import React, { useEffect, useState } from "react"
import axiosInstance from "./axiosInstance"

const DisplayAllProducts: React.FC = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axiosInstance.get('/products')
      setProducts(response.data)
    }
    fetchProducts()
  })

  return(
    <div className="m-3 grid grid-cols-6">
      {products.map((product: any) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default DisplayAllProducts

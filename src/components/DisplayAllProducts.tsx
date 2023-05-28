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
    <div>
      <h2>Pearls</h2>
      {products.map((product: any) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default DisplayAllProducts

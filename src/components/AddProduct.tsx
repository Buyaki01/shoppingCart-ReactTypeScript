import React, { useState } from 'react'
import axiosInstance from './axiosInstance'
interface ProductForm {
  sku: string
  name: string
  price: number
}

const AddProduct: React.FC = () => {
  const [productForm, setProductForm] = useState<ProductForm>({
    sku: '',
    name: '',
    price: 0,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProductForm({ ...productForm, [name]: value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await axiosInstance.post('/products', productForm)
      setProductForm({ sku: '', name: '', price: 0 })
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  return (
    <div>
      <h2 className='flex justify-center text-2xl'>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={productForm.sku}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productForm.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productForm.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className='primary'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct

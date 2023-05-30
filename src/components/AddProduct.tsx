import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProductForm({ ...productForm, [name]: value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await axiosInstance.post('/products', productForm)
      setProductForm({ sku: '', name: '', price: 0 })
      navigate('/')
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  return (
    <div className='m-3'>
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

        <div>
          <label htmlFor="image" className="h-32 w-48 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            // onChange={handleImageChange}
            required
            className='hidden'
          />
            Upload&nbsp;Photo
          </label>
        </div>

        <button type="submit" className='primary'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct

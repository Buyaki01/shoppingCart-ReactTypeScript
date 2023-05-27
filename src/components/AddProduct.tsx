import React, { useState } from 'react'

interface AddProductProps {
  
}

interface ProductForm {
  sku: string
  name: string
  price: number
}

const AddProduct: React.FC<AddProductProps> = () => {
  const [productForm, setProductForm] = useState<ProductForm>({
    sku: '',
    name: '',
    price: 0,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProductForm({ ...productForm, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can handle the form submission and make an API request to send the product data to the backend
    console.log(productForm); // Example: Log the form data
  }

  return (
    <div>
      <h2>Add Product</h2>
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct

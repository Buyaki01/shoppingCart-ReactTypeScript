import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return(
    <nav className="flex gap-2 justify-center">
      <div className="border rounded-lg p-2">
        <Link to={'/profile'}>
          My Profile
        </Link>
      </div>
      <div className="border rounded-lg p-2">
        <Link to={'/product/new'}>
          Add Product
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return(
    <div className="m-2">
      <Link to={'/'}>
        <h2 className="header text-4xl">Pearls</h2>
      </Link>
    </div>
  )
}

export default Header

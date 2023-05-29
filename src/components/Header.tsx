import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return(
    <div className="m-2">
      <Link to={'/'}>
        <h2 className="text-2xl">Pearls</h2>
      </Link>
    </div>
  )
}

export default Header

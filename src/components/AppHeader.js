import { Link } from "react-router-dom"
import "./AppHeader.css"

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <h1>Our Site</h1>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader

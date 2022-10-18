import React from "react"
import { Link } from "react-router-dom"

// styles
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/home" className="brand">
                <h1>FridgeEase</h1>
            </Link>
            <Link to="/fridge"><li>My Fridge</li></Link>
            <Link to="/homeRecipe"><li>Recipes</li></Link>
            <Link to="/groceryList"><li>Grocery List</li></Link>
            <Link to="/user"><li>User</li></Link>
        </nav>
   </div>
  )
}

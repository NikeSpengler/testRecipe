import React from "react"
import { Link } from "react-router-dom"

// styles
import "./Navbar.css"

// components
import Searchbar from "./Searchbar"

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/home" className="brand">
                <h1>FridgeEase</h1>
            </Link>
            <Link to="/fridge"><li>Mitt kylksåp</li></Link>
            <Link to="/homeRecipe"><li>Recept</li></Link>
            <Link to="/groceryList"><li>Inköpslista</li></Link>
            <Link to="/user"><li>Min sida</li></Link>
        </nav>
        <Searchbar/>
   </div>
   
    
   
  )
}

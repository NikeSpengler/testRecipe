import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import HomeRecipe from "./pages/homeRecipe/HomeRecipe";
import Create from "./pages/create/Create";
import Fridge from "./pages/fridge/Fridge";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import GroceryList from "./pages/groceryList/GroceryList";
import User from "./pages/user/User";

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/fridge" element={<Fridge/>}/> 
          <Route path="/homeRecipe" element={<HomeRecipe/>}/>
          <Route path="/recipes:id" element={<Recipe/>}/>
          <Route path="/groceryList:id" element={<GroceryList/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

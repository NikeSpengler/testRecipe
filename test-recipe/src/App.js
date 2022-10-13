import { BrowserRouter, Switch, Route } from "react-router-dom";

// styles
import './App.css';

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Fridge from "./pages/fridge/Fridge";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import GroceryList from "./pages/groceryList/GroceryList";
import User from "./pages/user/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch exact path="/">
          <Route>
            <Home />
          </Route>
          <Route path="/fridge">
            <Fridge />
          </Route>
          <Route path="/recipes:id">
            <Recipe />
          </Route>
          <Route path="/groceryList:id">
            <GroceryList/>
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App

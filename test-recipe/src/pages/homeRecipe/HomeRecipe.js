import { useFetch } from "../../hooks/useFetch";
import React from 'react';

//styles
import "./homeRecipe.css"

// components
import RecipeList from "../../components/RecipeList";

export default function HomeRecipe() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes")

  return (
    <div className="homeRecipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

import { useState, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch';

// styles
import './fridge.css'

export default function Fridge() {  
  // const [title, setTitle] = useState('')
  // const [method, setMethod] = useState('')
  // const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null)

  const { postData, data, error } = useFetch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ingredients)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient("")
    ingredientInput.current.focus()
  }

  return (
    <div className="create">
      <h2 className="page-title">Mitt kylskåp</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Lägg till en vara...</span>
          <div className='ingredients'>
          <input 
            type="text" 
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
            required
          />
          <button onClick={handleAdd} className="btn">Lägg till</button>
          </div>
        </label>
        <p>Varor: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        {/* recipe ingredients here */}
{/* 
        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label> */}

        
      </form>
    </div>
  )
}

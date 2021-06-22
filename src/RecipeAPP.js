import './search.css';
import React,{useEffect,useState} from "react";
import Recipe from "./RecipeAPP_box";
import Button from '@material-ui/core/Button';
//import {BrowserRouter as Router ,Switch,Route} 
import { v4 as uuidv4 } from "uuid";
const RecipeAPP = () => {
  const APP_ID="42d10254";
  const APP_KEY="49e97f76cc497d2263d74d26a82d922f";

  const [recipes,setRecipes]= useState([]);
  const [search, setsearch]= useState('');
  const [s_Value, sets_Value]=useState('Banana');

  useEffect(() => {
    getRecipes();
  }, [s_Value]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${s_Value}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  };

  const updateSearch=e=>{
    setsearch(e.target.value);
    //console.log(search);
  }

  const getSearch =e =>{
    e.preventDefault();
    sets_Value(search);
    setsearch('');
  }

  return(
    <div className="APP">
      
      <form className="search_box" onSubmit={getSearch}>
        <input className="search_place" type="text" value={search} onChange={updateSearch}/>
        <Button 
          type="submit" 
          color="primary"
          variant="contained"
        >
            Search
        </Button>
      </form>
      <div className="text_box">
        {recipes !== [] &&
        recipes.map(recipe =>(<Recipe key={uuidv4()} recipe={recipe} />
       
        ))}
      </div>
    </div>
  );
};

export default RecipeAPP;
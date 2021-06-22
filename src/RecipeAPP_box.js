import React,{ useState } from "react";
import './recipe.css';
import RecipeDetails from "./RecipeDetails";
//import {Link} from 'react-router-dom';
//import Fact from './Fact';
//import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

const Recipe = ({recipe}) => {
    
    const [show, setShow] = useState(false);
    const { label,calories,image,ingredients ,totalNutrients} = recipe.recipe;
    const cal=parseInt(calories);
    
    return(
        <div className="Rbox">
            <div className="Rtitle">
                <h1 className="Runderline">{label}</h1>
            </div>
            <h3 >Calories: {cal} cal</h3>
            <h2>Ingredient</h2>
            <ol>
                {ingredients.map(ingredient =>(
                    <li className="Rtext">{ingredient.text}</li>
                ))}
            </ol>
            <button className="Rshow-button" onClick={() => setShow(!show)}>&emsp;MORE NUTRIENTS DETAIL&emsp;</button>
            {show && <RecipeDetails                         
                        ENERC_KCAL={totalNutrients.ENERC_KCAL}
                        CHOCDF={totalNutrients.CHOCDF}
                        PROCNT={totalNutrients.PROCNT}
                        CHOLE={totalNutrients.CHOLE}
                        CA={totalNutrients.CA}
                        FE={totalNutrients.FE}
                        NA={totalNutrients.NA}
                        MG={totalNutrients.MG}
                        />}       
            <img  className="Rimg" src={image} alt="NO PICTURE"/>
        </div>
    ); 
}

export default Recipe;
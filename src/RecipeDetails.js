import React from "react";
import { v4 as uuidv4 } from "uuid";
import './recipe.css';

const RecipeDetails = ({ ENERC_KCAL,CHOCDF,PROCNT,CHOLE,CA,FE,NA,MG }) => {
  
  const ENERC_KCAL_quantity=parseInt(ENERC_KCAL.quantity);
  const CHOCDF_quantity=parseInt(CHOCDF.quantity);
  const PROCNT_quantity=parseInt(PROCNT.quantity);
  const CHOLE_quantity=parseInt(CHOLE.quantity);
  const CA_quantity=parseInt(CA.quantity);
  const FE_quantity=parseInt(FE.quantity);
  const NA_quantity=parseInt(NA.quantity);
  const MG_quantity=parseInt(MG.quantity);
  return(
  <div>
  <ul className="ingredient-list">
    <li className="text-nu">{ENERC_KCAL.label} &emsp;{ENERC_KCAL_quantity} {ENERC_KCAL.unit}</li>
    <li className="text-nu">{CHOCDF.label}&emsp; {CHOCDF_quantity} {CHOCDF.unit}</li>
    <li className="text-nu">{PROCNT.label} &emsp;{PROCNT_quantity} {PROCNT.unit}</li>
    <li className="text-nu">{CHOLE.label} &emsp;{CHOLE_quantity} {CHOLE.unit}</li>
    <li className="text-nu">{CA.label}&emsp; {CA_quantity} {CA.unit}</li>
    <li className="text-nu">{FE.label} &emsp;{FE_quantity} {FE.unit}</li>
    <li className="text-nu">{NA.label} &emsp;{NA_quantity} {NA.unit}</li>
    <li className="text-nu">{MG.label}&emsp; {MG_quantity} {MG.unit}</li>
  </ul>
  </div>
  );
};

export default RecipeDetails;

import React from "react";
import './intro.css';


const Introduction = () => {
    
    return(
        <div className="Ibody">
            
            <div className="Ititle">INRODUCTION</div>
            
                <div className="Ibox">
                    <div  className="Ipicture">
                        <img src="https://developer.edamam.com/images/logo-dev.png"></img>
                        
                    </div>
                    <table> 
                    <tr>
                            <td className="Itext">
                            <h2>Recipe Search </h2>
                            
                            <p>2.3+ million nutritionally analyzed recipes
                                Detailed macro and micronutrient data
                                Filter by calories, diets and allergens</p>
                            
                            </td>
                            <td className="Itext">
                            <h2>Meal Recommendation</h2>
                            <p>Personalized meal recommendations using 28 nutrients and 40 diets/allergies</p>

                            </td> 
                            <td className="Itext">
                            <h2>Nutrition Analysis </h2>
                            <p>Analyze any recipe or ingredient list
                                Automatic tagging for allergens and popular diets
                                Database of close to 900,000 food items</p>
                            </td>
                        </tr>
                </table>
            </div>
        </div>
    ); 
}

export default Introduction;
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


export default function TButton() {
    return (
        <nav>
            <div class="link">
            <Link to="/reciepe">           
                <Button variant="contained" color="primary">真·Enter</Button>
            </Link>            
            </div>
        </nav>
    );
    
}


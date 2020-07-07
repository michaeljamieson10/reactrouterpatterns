import React, { useState } from "react";
import { Redirect, useParams, Link, useHistory } from 'react-router-dom';

// import {NavLink} from "react-router-dom";
function Color({colors}) {
 const {color} = useParams();
 const history = useHistory();
 if (colors) {
     const currentColor = colors.find(
         colors => colors.color.toLowerCase() === color.toLowerCase()
         );
         console.log(color, " ", currentColor,'inside color')
         if(currentColor === undefined){
             console.log("you reached it")
            return <Redirect to="/"/>
        }else{
        document.body.style.backgroundColor = `${currentColor.color}`;
        return (
        <div>
        {currentColor}
        this is the color page
        <Link to="/colors">Go Back</Link>
        </div>
        )
    }
  }
}

export default Color;
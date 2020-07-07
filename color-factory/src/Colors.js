import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import {NavLink} from "react-router-dom";

function Colors({colors}) {
    return (
    <div>
        {/* {colors.map(({ id, name, qty }) => <Item id={id} name={name} qty={qty} key={id} />)} */}
        {colors.map((color) =>   
        <NavLink exact to={`colors/${color.color}`}>
      {color.color}
      </NavLink>
      ) }
      
    </div>
    )
}

export default Colors;
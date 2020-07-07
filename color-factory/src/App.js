import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import CreateColorForm from "./CreateColorForm";
import Colors from "./Colors";
import Color from "./Color";
import { v4 as uuid } from 'uuid';

function App() {
  const INITIAL_STATE = [
    {color:"blue", id: uuid()},
    { color:"pink", id: uuid()}
  ]
const [colors, setColors] = useState(INITIAL_STATE);
const addColor = (newColor) => {
  setColors(colors => [...colors, { ...newColor, id: uuid() }])
}
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors/new" >
          <CreateColorForm addColor={addColor}/>
        </Route>
        <Route exact path="/colors/:color" >
          <Color colors={colors} />
        </Route>
        <Route exact path="/colors" >
          <Colors colors={colors} />
        </Route>
       
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

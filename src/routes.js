import React from "react"
import { Switch, Route } from "react-router-dom"
import Turtles from "./Components/Turtles/Turtles"
import Food from "./Components/Food/Food"

export default (
    <Switch>
        <Route exact path="/Turtles" component={Turtles} />
        <Route path="/" component={Food}/>
    </Switch>
)

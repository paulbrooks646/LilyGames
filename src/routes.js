import React from "react"
import { Switch, Route } from "react-router-dom"
import Turtles from "./Components/Turtles/Turtles"
import Bawk from "./Components/Bawk/Bawk"

export default (
    <Switch>
        <Route exact path="/Turtles" component={Turtles} />
        <Route  exact path="/Bawk" component={Bawk}/>
    </Switch>
)

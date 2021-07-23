import React from "react"
import "./Food.scss"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

export default function Food() {

    return (
        <div>
            <nav>
                <Link to="/">
                    <Button color="primary" variant="contained">Turtles</Button>
</Link>
            </nav>
        <h1>Food</h1>
      </div>
    );
}
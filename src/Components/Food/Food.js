import React from "react"
import "./Food.scss"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

export default function Food() {

    const toggleStartOver = () => {
        
    }

    return (
      <div className="main">
        <nav className="food-nav">
          <div className="food-current">
            <Typography variant="h5" color="primary" className="food-nav-text">
              YOU ARE CURRENTLY HOLDING:
            </Typography>
          </div>
          <div className="food-button-div">
            <Link to="/Turtles">
              <Button color="primary" variant="contained">
                Turtles
              </Button>
                    </Link>
                    <Button color="secondary" variant="contained" onClick={toggleStartOver}>START OVER</Button>
          </div>
        </nav>
        <h1>Food</h1>
      </div>
    );
}
import React from "react";
import "./Food.scss";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import House from "../House/House";

export default function Food() {
  const toggleStartOver = () => {};

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
              Naps
            </Button>
          </Link>
          <Button
            color="secondary"
            variant="contained"
            onClick={toggleStartOver}
          >
            START OVER
          </Button>
        </div>
      </nav>
      <House />
      <div className="big-red-chicken">
        <div className="chicken-hair"></div>
        <div className="chicken-head">
          <div className="chicken-brows">
            <div className="chicken-brow-left"></div>
            <div className="chicken-brow-right"></div>
          </div>
          <div className="chicken-face">
            <div className="chicken-eyes">
              <div className="chicken-eye">
                <div className="chicken-pupil"></div>
              </div>
              <div className="chicken-eye">
                <div className="chicken-pupil"></div>
              </div>
            </div>
            <div className="chicken-beak"></div>
          </div>
        </div>
        <div className="chicken-center">
          <div className="chicken-arm-left">
            <div className="chicken-finger-one"></div>
            <div className="chicken-finger-two"></div>
            <div className="chicken-finger-three"></div>
            <div className="chicken-finger-four"></div>
          </div>
          <div className="chicken-body">
            <div className="chicken-body-middle">
              <div className="chicken-body-middle-main">
                <div className="chicken-body-top">
                  <div className="chicken-beard-one"></div>
                  <div className="chicken-beard-two"></div>
                  <div className="chicken-beard-three"></div>
                  <div className="chicken-body-top-frills">
                    <div className="chicken-body-top-frill-one"></div>
                    <div className="chicken-body-top-frill-two"></div>
                    <div className="chicken-body-top-frill-three"></div>
                    <div className="chicken-body-top-frill-four"></div>
                    <div className="chicken-body-top-frill-five"></div>
                    <div className="chicken-body-top-frill-six"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chicken-arm-right">
            <div className="chicken-finger-one"></div>
            <div className="chicken-finger-two"></div>
            <div className="chicken-finger-three"></div>
            <div className="chicken-finger-four"></div>
          </div>
        </div>
        <div className="chicken-legs">
          <div className="chicken-leg">
            <div className="chicken-foot">
              <div className="chicken-toe-one"></div>
              <div className="chicken-toe-two"></div>
              <div className="chicken-toe-three"></div>
              <div className="chicken-toe-four"></div>
            </div>
          </div>
          <div className="chicken-leg">
            <div className="chicken-foot">
              <div className="chicken-toe-one"></div>
              <div className="chicken-toe-two"></div>
              <div className="chicken-toe-three"></div>
              <div className="chicken-toe-four"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

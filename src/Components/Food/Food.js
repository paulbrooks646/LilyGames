import React, { useState } from "react";
import "./Food.scss";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import House from "../House/House";

export default function Food() {
  return (
    <div className="main">
      <nav className="food-nav"></nav>
      <House />
      <div className="food-top-left"></div>
      <div className="food-top-middle"></div>
      <div className="food-top-right"></div>
      <div className="food-middle-left">
        <div className="bone-div">
          <div className="bone">
            <div className="bone-left">
              <div className="bone-top-corner"></div>
              <div className="bone-bottom-corner"></div>
            </div>
            <div className="bone-middle"></div>
            <div className="bone-right">
              <div className="bone-top-corner"></div>
              <div className="bone-bottom-corner"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-middle-middle">
        <div className="pizza-div">
          <div className="pizza">
            <div className="pizza-horizontal-line"></div>
            <div className="pizza-vertical-line"></div>
            <div className="pepperoni-outer">
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
            </div>
            <div className="pepperoni-innner">
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
            </div>
            <div className="pepperoni-innner">
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
            </div>
            <div className="pepperoni-outer">
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
              <div className="pepperoni"></div>
            </div>
          </div>
          <div className="pizza-slice"></div>
        </div>
      </div>
      <div className="food-middle-right">
        <div className="corn-div">
          <div className="corn">
            <div className="corn-line"></div>
            <div className="corn-line"></div>
            <div className="corn-line"></div>
            <div className="corn-line"></div>
            <div className="corn-line"></div>
          </div>
        </div>
      </div>
      <div className="food-bottom-left"></div>
      <div className="food-bottom-middle"></div>
      <div className="food-bottom-right"></div>
    </div>
  );
}

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
      <div className="food-bottom-left">
        <div className="bowl-div">
          <div className="bowl">
            <div className="inner-bowl">
              <div className="bowl-row-one">
                <div className="mnm-red">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-yellow">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-blue">
                  <p className="mnmm">m</p>
                </div>
              </div>
              <div className="bowl-row-two">
                <div className="mnm-green">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-orange">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-brown">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-red">
                  <p className="mnmm">m</p>
                </div>
              </div>
              <div className="bowl-row-three">
                <div className="mnm-yellow">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-blue">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-green">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-orange">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-brown">
                  <p className="mnmm">m</p>
                </div>
              </div>
              <div className="bowl-row-four">
                <div className="mnm-red">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-yellow">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-blue">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-green">
                  <p className="mnmm">m</p>
                </div>
              </div>
              <div className="bowl-row-five">
                <div className="mnm-orange">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-brown">
                  <p className="mnmm">m</p>
                </div>
                <div className="mnm-red">
                  <p className="mnmm">m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-bottom-middle">
        <div className="nut-div">
          <div className="nut">
            <div className="nut-stem"></div>
            <div className="nut-top"></div>
            <div className="nut-bottom"></div>
          </div>
        </div>
      </div>
      <div className="food-bottom-right">
              <div className="banana-div">
                  <div className="banana-top"></div>
                  <div className="bananas">
                      <div className="banana-line"></div>
            <div className="banana-one"></div>
            <div className="banana-two"></div>
            <div className="banana-three"></div>
            <div className="banana-four"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="food-top">
        {/* <div className="food-top-left"></div>
      <div className="food-top-middle"></div>
        <div className="food-top-right"></div> */}
        <div className="food-shelf">
          <div className="food-shelf-left"></div>
          <div className="food-shelf-middle">
            <div className="food-shelf-board"></div>
            <div className="food-shelf-space">
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
            <div className="food-shelf-board"></div>
            <div className="food-shelf-space">
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
            <div className="food-shelf-board"></div>
            <div className="food-shelf-space">
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
              <div className="nut-div">
                <div className="nut">
                  <div className="nut-stem"></div>
                  <div className="nut-top"></div>
                  <div className="nut-bottom"></div>
                </div>
              </div>
            </div>
            <div className="food-shelf-board"></div>
          </div>
          <div className="food-shelf-right"></div>
        </div>
        <div className="lily-sign-div">
          <div className="lily-sign">
            <Typography variant="h4" className="food-sign">
              Lily's Store
            </Typography>
          </div>
        </div>
        <div className="food-shelf">
          <div className="food-shelf-left"></div>
          <div className="food-shelf-middle">
            <div className="food-shelf-board"></div>
            <div className="food-shelf-space">
              <div className="banana-div">
                <div className="banana-top"></div>
                <div className="bananas">
                  <div className="banana-one"></div>
                  <div className="banana-two"></div>
                  <div className="banana-three"></div>
                  <div className="banana-four"></div>
                </div>
              </div>
              <div className="cheese-div">
                <div className="cheese">
                  <div className="cheese-top">
                    <div className="cheese-hole"></div>
                  </div>
                  <div className="cheese-bottom">
                    <div className="cheese-hole"></div>
                    <div className="cheese-hole-two"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="food-shelf-board"></div>
            <div className="food-shelf-space">
              <div className="cookie-div">
                <div className="cookie">
                  <div className="cookie-top">
                    <div className="chocolate-chip"></div>
                    <div className="chocolate-chip"></div>
                  </div>
                  <div className="cookie-middle">
                    <div className="chocolate-chip"></div>
                  </div>
                  <div className="cookie-bottom">
                    <div className="chocolate-chip"></div>
                    <div className="chocolate-chip"></div>
                  </div>
                </div>
              </div>
              <div className="cake">
                <div className="cake-top"></div>
                <div className="cake-middle"></div>
                <div className="cake-bottom"></div>
              </div>
            </div>
            <div className="food-shelf-board"></div>
            <div className="food-shelf-space">
              <div className="pie-div">
                <div className="pie">
                  <div className="cherry-div">
                    <div className="cherry-stem"></div>
                    <div className="cherry-main"></div>
                  </div>
                  <div className="pie-top">
                    <div className="cherry-hole-one"></div>
                    <div className="cherry-hole-two"></div>
                    <div className="cherry-hole-three"></div>
                    <div className="cherry-hole-four"></div>
                    <div className="cherry-hole-five"></div>
                  </div>
                  <div className="pie-middle">
                    <div className="pie-frill"></div>
                    <div className="pie-frill"></div>
                    <div className="pie-frill"></div>
                    <div className="pie-frill"></div>
                    <div className="pie-frill"></div>
                    <div className="pie-frill"></div>
                  </div>
                  <div className="pie-bottom"></div>
                </div>
              </div>
              <div className="lollipop-div">
                <div className="lollipop">
                  <div className="lollipop-top"></div>
                  <div className="lollipop-stick"></div>
                </div>
              </div>
            </div>
            <div className="food-shelf-board"></div>
          </div>
          <div className="food-shelf-right"></div>
        </div>
      </div>
      <div className="food-middle-left"></div>
      <div className="food-middle-middle"></div>
      <div className="food-middle-right"></div>
      <div className="food-bottom-left"></div>
      <div className="food-bottom-middle">
        {/* <div className="dog">
          <div className="dog-top">
            <div className="dog-left-ear"></div>
            <div className="dog-face">
              <div className="dog-eye-div">
                <div className="dog-eye">
                  <div className="dog-pupil"></div>
                </div>
                <div className="dog-eye">
                  <div className="dog-pupil"></div>
                </div>
              </div>
              <div className="dog-nose"></div>
              <div className="dog-smile">
                <div className="dog-mouth"></div>
                <div className="dog-tongue">
                  <div className="tongue-line"></div>
                </div>
              </div>
            </div>
            <div className="dog-right-ear"></div>
          </div>
          <div className="dog-bottom">
            <div className="dog-body">
              <div className="dog-torso"></div>
              <div className="dog-leg-div">
                <div className="dog-leg-one">
                  <div className="dog-paw"></div>
                </div>
                <div className="dog-leg-two">
                  <div className="dog-paw"></div>
                </div>
                <div className="dog-leg-one">
                  <div className="dog-paw"></div>
                </div>
                <div className="dog-leg-two">
                  <div className="dog-paw"></div>
                </div>
              </div>
            </div>
            <div className="dog-tail"></div>
          </div>
        </div> */}
        
      </div>
      <div className="food-bottom-right"></div>
    </div>
  );
}

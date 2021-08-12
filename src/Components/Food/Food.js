import React, { useState } from "react";
import "./Food.scss";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import House from "../House/House";
import Swiper from "../Swiper/Swiper";

export default function Food() {
  const [dog, setDog] = useState(false);
  const [turtles, setTurtles] = useState(false);
  const [chicken, setChicken] = useState(false);
  const [swiper, setSwiper] = useState(false);
  const [tico, setTico] = useState(false);
  const [boots, setBoots] = useState(true);
  const [mouse, setMouse] = useState(false);
  const [monster, setMonster] = useState(false);
  const [pig, setPig] = useState(false);
  const [grandpa, setGrandpa] = useState(false);
  const [ember, setEmber] = useState(false);

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
        <div className={`${dog ? "dog" : "dog-closed"}`}>
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
        </div>

        <div className={`${turtles ? "turtle" : "turtle-closed"}`}>
          <div className="michaelangelo">
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
          </div>
          <div className="turtle-mouth"></div>
        </div>
        <div className={`${turtles ? "turtle" : "turtle-closed"}`}>
          <div className="donatello">
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
          </div>

          <div className="turtle-mouth"></div>
        </div>

        <div className={`${turtles ? "turtle" : "turtle-closed"}`}>
          <div className="raphael">
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
          </div>

          <div className="turtle-mouth"></div>
        </div>
        <div className={`${turtles ? "turtle" : "turtle-closed"}`}>
          <div className="leonardo">
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
            <div className="turtle-eye">
              <div className="turtle-pupil"></div>
            </div>
          </div>
          <div className="turtle-mouth"></div>
        </div>
        <div className={`${chicken ? "chicken" : "chicken-closed"}`}>
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
                <div className="chicken-body-middle-frills">
                  <div className="chicken-body-middle-frill-one"></div>
                  <div className="chicken-body-middle-frill-two"></div>
                  <div className="chicken-body-middle-frill-three"></div>
                  <div className="chicken-body-middle-frill-four"></div>
                  <div className="chicken-body-middle-frill-five"></div>
                  <div className="chicken-body-middle-frill-six"></div>
                  <div className="chicken-body-middle-frill-seven"></div>
                  <div className="chicken-body-middle-frill-eight"></div>
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
        <div className={swiper ? "swiper" : "swiper-closed"}>
          <div className="swiper-head">
            <div className="swiper-ears">
              <div className="swiper-ear-left">
                <div className="swiper-inner-ear"></div>
              </div>
              <div className="swiper-ear-right">
                <div className="swiper-inner-ear"></div>
              </div>
            </div>
            <div className="swiper-face">
              <div className="swiper-mask">
                <div className="swiper-brows">
                  <div className="swiper-brow-left"></div>
                  <div className="swiper-brow-right"></div>
                </div>
                <div className="swiper-eyes">
                  <div className="swiper-eye">
                    <div className="swiper-pupil"></div>
                  </div>
                  <div className="swiper-eye">
                    <div className="swiper-pupil"></div>
                  </div>
                </div>
                <div className="swiper-nose">
                  <div className="swiper-nose-tip"></div>
                  <div className="swiper-whiskers">
                    <div className="swiper-whiskers-top">
                      <div className="whisker-left"></div>
                      <div className="whisker-middle"></div>
                      <div className="whisker-right"></div>
                    </div>
                    <div className="swiper-whiskers-bottom">
                      <div className="whisker-left"></div>
                      <div className="whisker-middle"></div>
                      <div className="whisker-right"></div>
                    </div>
                  </div>
                </div>
                <div className="swiper-mouth">
                  <div className="swiper-mouth-top">
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                  </div>
                  <div className="swiper-mouth-bottom">
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                    <div className="swiper-tooth"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-body">
            <div className="swiper-left-arm">
              <div className="swiper-glove">
                <div className="swiper-finger-one"></div>
                <div className="swiper-finger-two"></div>
                <div className="swiper-finger-three"></div>
                <div className="swiper-finger-four"></div>
              </div>
            </div>
            <div className="swiper-tummy"></div>
            <div className="swiper-right-arm">
              <div className="swiper-glove">
                <div className="swiper-finger-one"></div>
                <div className="swiper-finger-two"></div>
                <div className="swiper-finger-three"></div>
                <div className="swiper-finger-four"></div>
              </div>
            </div>
          </div>
          <div className="swiper-tail">
            <div className="swiper-tail-one"></div>
            <div className="swiper-tail-two"></div>
            <div className="swiper-tail-three"></div>
            <div className="swiper-tail-four"></div>
            <div className="swiper-tail-five"></div>
          </div>
          <div className="swiper-legs">
            <div className="swiper-leg">
              <div className="swiper-foot"></div>
            </div>
            <div className="swiper-leg">
              <div className="swiper-foot"></div>
            </div>
          </div>
        </div>
        <div className={`${tico ? "tico" : "tico-closed"}`}>
          <div className="tico-hair">
            <div className="tico-hair-frills">
              <div className="tico-frill-one"></div>
              <div className="tico-frill-two"></div>
              <div className="tico-frill-three"></div>
            </div>
            <div className="tico-hair-main">
              <div className="tico-left-brow"></div>
              <div className="tico-right-brow"></div>
            </div>
          </div>
          <div className="tico-head">
            <div className="tico-left-ear">
              <div className="tico-left-inner-ear"></div>
            </div>
            <div className="tico-face">
              <div className="tico-eyes">
                <div className="tico-eye">
                  <div className="tico-pupil"></div>
                </div>
                <div className="tico-eye">
                  <div className="tico-pupil"></div>
                </div>
              </div>
              <div className="tico-nose">
                <div className="tico-nose-tip"></div>
              </div>
              <div className="tico-mouth">
                <div className="tico-top-teeth">
                  <div className="tico-tooth"></div>
                  <div className="tico-tooth"></div>
                </div>
                <div className="tico-bottom-teeth">
                  <div className="tico-tooth"></div>
                  <div className="tico-tooth"></div>
                </div>
              </div>
            </div>
            <div className="tico-right-ear">
              <div className="tico-right-inner-ear"></div>
            </div>
          </div>
          <div className="tico-body">
            <div className="tico-left-arm"></div>
            <div className="tico-left-vest">
              <div className="tico-pocket"></div>
            </div>
            <div className="tico-tummy">
              <div className="tico-inner-tummy"></div>
            </div>
            <div className="tico-right-vest">
              <div className="tico-pocket"></div>
            </div>
            <div className="tico-right-arm"></div>
          </div>
          <div className="tico-legs">
            <div className="tico-leg"></div>
            <div className="tico-leg"></div>
            <div className="tico-tail"></div>
          </div>
        </div>
        <div className="boots">
          <div className="boots-hair">
            <div className="boots-hair-one"></div>
            <div className="boots-hair-two"></div>
            <div className="boots-hair-three"></div>
          </div>
          <div className="boot-upper-head">
            <div className="boots-left-ear">
              <div className="boots-left-inner-ear"></div>
            </div>
            <div className="boots-upper-face">
              <div className="boots-upper-face-left">
                <div className="boots-eye">
                  <div className="boots-pupil"></div>
                </div>
              </div>
              <div className="boots-upper-face-right">
                <div className="boots-eye">
                  <div className="boots-pupil"></div>
                </div>
              </div>
            </div>
            <div className="boots-right-ear">
              <div className="boots-right-inner-ear"></div>
            </div>
          </div>
          <div className="boots-lower-head">
            <div className="boots-nose">
              <div className="boots-left-nostril"></div>
              <div className="boots-right-nostril"></div>
            </div>
            <div className="boots-mouth">
              <div className="boots-tongue"></div>
            </div>
          </div>

          <div className="boots-body">
            <div className="boots-left-arm">
              <div className="boots-left-hand">
                <div className="boots-finger-one"></div>
                <div className="boots-finger-two"></div>
                <div className="boots-finger-three"></div>
                <div className="boots-finger-four"></div>
                <div className="boots-finger-five"></div>
              </div>
            </div>
            <div className="boots-tummy">
              <div className="boots-inner-tummy"></div>
            </div>
            <div className="boots-right-arm">
              <div className="boots-right-hand">
                <div className="boots-finger-one"></div>
                <div className="boots-finger-two"></div>
                <div className="boots-finger-three"></div>
                <div className="boots-finger-four"></div>
                <div className="boots-finger-five"></div>
              </div>
            </div>
            <div className="boots-tail"></div>
          </div>
          <div className="boots-legs">
            <div className="boots-leg">
              <div className="boots-boot"></div>
            </div>
            <div className="boots-leg">
              <div className="boots-boot"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-bottom-right"></div>
    </div>
  );
}

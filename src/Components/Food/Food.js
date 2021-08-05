import React, { useState } from "react";
import "./Food.scss";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import House from "../House/House";

export default function Food() {
  const [bucket, setBucket] = useState(false);
  const [cake, setCake] = useState(false);
  const [umbrella, setUmbrella] = useState(false);
  const [ants, setAnts] = useState(false);
  const [scratcher, setScratcher] = useState(false)
  const [finished, setFinished] = useState(false);

  const toggleStartOver = () => {};
  const toggleLadder = () => {};
  const toggleTreats = () => {};
  const togglescratcher = () => {};
  const toggleumbrella = () => {};
  const toggleLotion = () => {};

  return (
    <div className="main">
      <nav className="food-nav">
        <div className="food-current">
          <Typography variant="h6" color="primary" className="food-nav-text">
            BACKPACK CONTAINS:
          </Typography>
          <div
            className={`${cake ? "ladder-div-closed" : "ladder-div"}`}
            onClick={toggleLadder}
          >
            <div className="ladder">
              <div className="ladder-left"></div>
              <div className="ladder-middle">
                <div className="ladder-wrung"></div>
                <div className="ladder-wrung"></div>
                <div className="ladder-wrung"></div>
                <div className="ladder-wrung"></div>
                <div className="ladder-wrung"></div>
              </div>
              <div className="ladder-right"></div>
            </div>
            <Typography variant="overline-text" className="ladder-text">
              LADDER
            </Typography>
          </div>
          <div
            className={`${bucket ? "lotion-div-closed" : "lotion-div"}`}
            onClick={toggleLotion}
          >
            <div className="lotion">
              <div className="lotion-lid"></div>
              <div className="lotion-bottle"></div>
            </div>
            <Typography className="lotion-text" variant="overline-text">
              LOTION
            </Typography>
          </div>
          <div
            className={`${ants ? "scratcher-div-closed" : "scratcher-div"}`}
            onClick={togglescratcher}
          >
            <div className="scratcher">
              <div className="scratcher-top">
                <div className="scratcher-tine"></div>
                <div className="scratcher-tine"></div>
                <div className="scratcher-tine"></div>
                <div className="scratcher-tine"></div>
              </div>
              <div className="scratcher-middle"></div>
              <div className="scratcher-bottom"></div>
            </div>
            <Typography variant="overline-text" className="scratcher-text">
              SCRATCHER
            </Typography>
          </div>
          <div
            className={`${umbrella ? "umbrella-div-closed" : "umbrella-div"}`}
            onClick={toggleumbrella}
          >
            <div className="umbrella">
              <div className="umbrella-top"></div>
              <div className="umbrella-middle"></div>
              <div className="umbrella-bottom"></div>
            </div>
            <Typography variant="overline-text" className="umbrella-text">
              UMBRELLA
            </Typography>
          </div>
          <div
            className={`${finished ? "treat-div-closed" : "treat-div"}`}
            onClick={toggleTreats}
          >
            <div className="treat">
              <div className="sucker">
                <div className="sucker-top"></div>
                <div className="sucker-bottom"></div>
              </div>
              <div className="sticker">
                <div className="sticker-main">
                  <div className="sticker-picture">
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
                </div>
              </div>
            </div>
            <Typography variant="overline-text" className="treat-text">
              TREATS
            </Typography>
          </div>
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
        <div
          className={`${cake ? "chicken-hair" : "chicken-hair-closed"}`}
        ></div>
        <div className={`${cake ? "cake-closed" : "cake"}`}>
          <div className="cake-candle-div">
            <div className="cake-candle-one-div">
              <div className="candle-one-wick"></div>
              <div className="candle-one-main"></div>
            </div>
            <div className="cake-candle-two-div">
              <div className="candle-two-wick"></div>
              <div className="candle-two-main"></div>
            </div>
            <div className="cake-candle-three-div">
              <div className="candle-three-wick"></div>
              <div className="candle-three-main"></div>
            </div>
          </div>
          <div className="cake-top"></div>
          <div className="cake-middle"></div>
          <div className="cake-bottom"></div>
        </div>
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
              <div className={`${scratcher ? "ant-div-closed" : "ant-div"}`}>
                <div className="ant-div-top">
                  <div className="ant-one">
                    <div className="ant-pincers"></div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                  </div>
                  <div className="ant-two">
                    <div className="ant-pincers"></div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                  </div>
                </div>
                <div className="ant-div-bottom">
                  <div className="ant-three">
                    <div className="ant-pincers"></div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                  </div>
                  <div className="ant-four">
                    <div className="ant-pincers"></div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
                    <div className="ant-segment">
                      <div className="ant-leg"></div>
                      <div className="ant-body"></div>
                      <div className="ant-leg"></div>
                    </div>
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
          <div className={`${bucket ? "chicken-leg" : "chicken-leg-closed"}`}>
            <div className="chicken-foot">
              <div className="chicken-toe-one"></div>
              <div className="chicken-toe-two"></div>
              <div className="chicken-toe-three"></div>
              <div className="chicken-toe-four"></div>
            </div>
          </div>
          <div className={`${bucket ? "bucket-div-closed" : "bucket-div"}`}>
            <div className="bucket-top"></div>
            <div className="bucket-bottom">
              <div className="bucket-line"></div>
              <div className="bucket-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

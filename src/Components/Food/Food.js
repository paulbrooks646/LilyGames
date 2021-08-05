import React, { useState } from "react";
import "./Food.scss";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import House from "../House/House";

export default function Food() {
  const [bucket, setBucket] = useState(false);
  const [cake, setCake] = useState(false);
  const [umbrella, setUmbrella] = useState(false);
  const [ants, setAnts] = useState(false);
  const [finished, setFinished] = useState(false);
  const [current, setCurrent] = useState("cake");
  const [task, setTask] = useState("blah")
  const [rejectionCard, setRejectionCard] = useState(false)
  const [introductionCard, setIntroductionCard] = useState(false)
  const [treatCard, setTreatCard] = useState(false)
  const [treatrejectionCard, setTreatRejectionCard] = useState(false)
  const [ladderCard, setLadderCard] = useState(false)
  const [ladderRejectionCard, setLadderRejectionCard] = useState(false)
  const [umbrellaCard, setUmbrellaCard] = useState(false)
  const [umbrellaRejectionCard, setUmbrellaRejectionCard] = useState(false)
  const [scratcherCard, setScratcherCard] = useState(false)
  const [scratcherRejectionCard, setScratcherRejectionCard] = useState(false)
  const [lotionCard, setLotionCard] = useState(false)
  const [lotionRejectionCard, setLotionRejectionCard] = useState(false)
  const [handleCard, setHandleCard] = useState(false)
  const [cakeCard, setCakeCard] = useState(false)
  const [bucketCard, setBucketCard] = useState(false)
  const [antsCard, setAntsCard] = useState(false)

  const toggleStartOver = () => {
    setBucket(false);
    setCake(false);
    setUmbrella(false);
    setAnts(false);
    setFinished(false);
    setCurrent("");
  };
  const toggleLadder = () => {
    if (current === "") {
      setRejectionCard(true)
    } else if (current !== "cake") {
      setLadderRejectionCard(true)
    } else {
      setLadderCard(true)
      setCake(true)
    }
  };
  const toggleTreats = () => {
    if (current === "") {
      setRejectionCard(true)
    } else if (cake === true && umbrella === true && bucket === true && ants === true) {
      setTreatCard(true)
      setFinished(true)
    } else {
      setTreatRejectionCard(true)

    }
  };
  const toggleScratcher = () => {
    if (current === "") {
      setRejectionCard(true)
    } else if (current !== "ants") {
      setScratcherRejectionCard(true)
    } else {
      setScratcherCard(true)
      setAnts(true)
    }
  };
  const toggleUmbrella = () => {
    if (current === "") {
      setRejectionCard(true)
    } else if (current !== "umbrella") {
      setUmbrellaRejectionCard(true)
    } else {
      setUmbrellaCard(true)
      setUmbrella(true)
    }
  };
  const toggleLotion = () => {
    if (current === "") {
      setRejectionCard(true)
    } else if (current !== "bucket") {
      setLotionRejectionCard(true)
    } else {
      setLotionCard(true)
      setBucket(true)
    }
  };
  const toggleCake = () => {
    setCakeCard(true)
    setCurrent("cake")
    setTask(" you reach the cake.")
  };
  const toggleHandle = () => {
    setHandleCard(true)
    setCurrent("umbrella")
    setTask("protect the Big Red Chicken from rain.")
  };
  const toggleAnts = () => {
    setAntsCard(true)
    setCurrent("ants")
    setTask("get rid of the tickle ants and scratch his tickly itch.")
  };
  const toggleBucket = () => {
    setBucketCard(true)
    setCurrent("bucket")
    setTask("the bucket slip off of his foot.")
  };

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
            onClick={toggleScratcher}
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
            onClick={toggleUmbrella}
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
        <div
          className={`${cake ? "cake-closed" : "cake"}`}
          onClick={toggleCake}
        >
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
              <div
                className={`${ants ? "ant-div-closed" : "ant-div"}`}
                onClick={toggleAnts}
              >
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
            <div
              className={`${umbrella ? "umbrella-div" : "umbrella-div-closed"}`}
              onClick={toggleHandle}
            >
              <div className="umbrella">
                <div className="umbrella-top"></div>
                <div className="umbrella-middle"></div>
                <div className="umbrella-bottom"></div>
              </div>
            </div>
            <div
              className={`${umbrella ? "handle-div-closed" : "handle-div"}`}
            ></div>
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
          <div
            className={`${bucket ? "bucket-div-closed" : "bucket-div"}`}
            onClick={toggleBucket}
          >
            <div className="bucket-top"></div>
            <div className="bucket-bottom">
              <div className="bucket-line"></div>
              <div className="bucket-line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-middle-left">
        <div className={`${bucket ? "bucket-div" : "bucket-div-closed"}`}>
          <div className="bucket-top"></div>
          <div className="bucket-bottom">
            <div className="bucket-line"></div>
            <div className="bucket-line"></div>
          </div>
        </div>
      </div>
      <div className="food-middle-right">
        <div
          className={`${umbrella ? "handle-div" : "handle-div-closed"}`}
        ></div>
      </div>
      <div className="food-bottom-left">
        <div className={`${ants ? "ant-div" : "ant-div-closed"}`}>
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
      <div className="food-bottom-right">
        <div className={`${cake ? "cake" : "cake-closed"}`}>
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
        <div className="table-div">
          <div className="table-top"></div>
          <div className="table-legs">
            <div className="table-leg"></div>
            <div className="table-leg"></div>
          </div>
        </div>
      </div>
      <Card
        className={`${introductionCard ? "food-card" : "food-card-closed"}`}
      >
        <Typography variant="h4" color="primary" className="food-card-text">
          "Bawk bawk!" The Big Red Chicken needs your help. He can't find the
          cake, there are tickle ants all over him, there is a bucket stuck on
          his foot and his umbrella is broken.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="food-card-button"
          onClick={() => setIntroductionCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${cakeCard ? "food-card" : "food-card-closed"}`}>
        <Typography variant="h4" color="primary" className="food-card-text">
          There's a cake on the Big Red Chicken's head but it is too high for
          you to reach. Is there anything in your backpack that could help you
          reach up high?
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="food-card-button"
          onClick={() => setCakeCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${umbrellaCard ? "food-card" : "food-card-closed"}`}>
        <Typography variant="h4" color="primary" className="food-card-text">
          The Big Red Chicken's umbrella is broken. Is there anything in your
          backpack that could protect him from rain?
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="food-card-button"
          onClick={() => setUmbrellaCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${bucketCard ? "food-card" : "food-card-closed"}`}>
        <Typography variant="h4" color="primary" className="food-card-text">
          The Big Red Chicken's foot is stuck in a bucket. Is there anything in
          your backpack that could help him slip out?
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="food-card-button"
          onClick={() => setBucketCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${antsCard ? "food-card" : "food-card-closed"}`}>
        <Typography variant="h4" color="primary" className="food-card-text">
          There are tickle ants on the Big Red Chicken. Is there anything in
          your backpack that could help scratch his tickly itch?
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="food-card-button"
          onClick={() => setAntsCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${scratcherRejectionCard ? "food-card" : "food-card-closed"}`}>
        <Typography variant="h4" color="primary" className="food-card-text">
          The scratcher won't help you {task}
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="food-card-button"
          onClick={() => setScratcherRejectionCard(false)}
        >
          CLOSE
        </Button>
      </Card>
    </div>
  );
}

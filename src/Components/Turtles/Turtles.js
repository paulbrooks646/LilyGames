import React, { useState } from "react";
import "./Turtles.scss";
import House from "../House/House";
import Swiper from "../Swiper/Swiper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button";

export default function Turtles() {
  const [animationOne, setAnimationOne] = useState(false);
  const [animationTwo, setAnimationTwo] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [leonardoCrib, setLeonardoCrib] = useState(false);
  const [donatelloCrib, setDonatelloCrib] = useState(false);
  const [michelangeloCrib, setMichelangeloCrib] = useState(false);
  const [raphaelCrib, setRaphaelCrib] = useState(false);
  const [leonardoTaken, setLeonardoTaken] = useState(false);
  const [donatelloTaken, setDonatelloTaken] = useState(false);
  const [michelangeloTaken, setMichelangeloTaken] = useState(false);
  const [raphaelTaken, setRaphaelTaken] = useState(false);
  const [introductionCard, setIntroductionCard] = useState(true);
  const [swipedCard, setSwipedCard] = useState(false);
  const [basketCard, setBasketCard] = useState(false);
  const [bookCard, setBookCard] = useState(false);
  const [pinkyCard, setPinkyCard] = useState(false);
  const [blockCard, setBlockCard] = useState(false);
  const [ninjaCard, setNinjaCard] = useState(false);
  const [basketFailureCard, setBasketFailureCard] = useState(false);
  const [bookFailureCard, setBookFailureCard] = useState(false);
  const [pinkyFailureCard, setPinkyFailureCard] = useState(false);
  const [blockFailureCard, setBlockFailureCard] = useState(false);
  const [completionCard, setCompletionCard] = useState(false);
  const [instructionsCard, setInstructionsCard] = useState(false);
  const [currentTurtle, setCurrentTurtle] = useState("");
  const [cribRejectionCard, setCribRejectionCard] = useState(false);
  const [cribRejectionCardTwo, setCribRejectionCardTwo] = useState(false)
  const [cribCard, setCribCard] = useState(false);
  const [otherTurtleCard, setOtherTurtleCard] = useState(false);

  const toggleStartOver = () => {
    setMichelangeloTaken(false)
    setDonatelloTaken(false)
    setLeonardoTaken(false)
    setRaphaelTaken(false)
    setMichelangeloCrib(false)
    setDonatelloCrib(false)
    setLeonardoCrib(false)
    setRaphaelCrib(false)
    setIntroductionCard(true)
  }

  const toggleBasket = () => {
    if (michelangeloTaken) {
      setBasketFailureCard(true);
    } else if (currentTurtle === "") {
      setBasketCard(true);
      setMichelangeloTaken(true)
      setCurrentTurtle("Michelangelo");
    } else {
      setOtherTurtleCard(true);
    }
  };

  const toggleBook = () => {
    if (donatelloTaken) {
      setBookFailureCard(true);
    } else if (currentTurtle === "") {
      setBookCard(true);
      setDonatelloTaken(true);
      setCurrentTurtle("Donatello");
    } else {
      setOtherTurtleCard(true);
    }
  };

  const togglePinky = () => {
    if (leonardoTaken) {
      setPinkyFailureCard(true);
    } else if (currentTurtle === "") {
      setPinkyCard(true);
      setLeonardoTaken(true);
      setCurrentTurtle("Leonardo");
    } else {
      setOtherTurtleCard(true);
    }
  };

  const toggleBlock = () => {
    if (raphaelTaken) {
      setBlockFailureCard(true);
    } else if (currentTurtle === "") {
      setBlockCard(true);
      setRaphaelTaken(true);
      setCurrentTurtle("Raphael");
    } else {
      setOtherTurtleCard(true);
    }
  };

  const toggleAnimationOne = () => {
    setIntroductionCard(false)
    setAnimationOne(true)
  }

  const toggleAnimationTwo = () => {
    setSwipedCard(false)
    setAnimationOne(false)
    setAnimationTwo(true)
  }

  const toggleMichelangeloCrib = () => {
    if (!currentTurtle) {
      setCribRejectionCard(true)
    } else if (currentTurtle !== "Michelangelo") {
      setCribRejectionCardTwo(true)
    } else {
      setMichelangeloCrib(true)
      setCribCard(true)
    
    }
  }

  const toggleDonatelloCrib = () => {
if (!currentTurtle) {
  setCribRejectionCard(true);
} else if (currentTurtle !== "Donatello") {
  setCribRejectionCardTwo(true);
} else {
  setDonatelloCrib(true);
  setCribCard(true);
}
  }

  const toggleLeonardoCrib = () => {
if (!currentTurtle) {
  setCribRejectionCard(true);
} else if (currentTurtle !== "Leonardo") {
  setCribRejectionCardTwo(true);
} else {
  setLeonardoCrib(true);
  setCribCard(true);
}
  }

  const toggleRaphaelCrib = () => {
if (!currentTurtle) {
  setCribRejectionCard(true);
} else if (currentTurtle !== "Raphael") {
  setCribRejectionCardTwo(true);
} else {
  setRaphaelCrib(true);
  setCribCard(true);
}
  }

  const toggleCurrentTurtle = () => {
    if (michelangeloCrib && donatelloCrib && leonardoCrib && raphaelCrib) {
       setCribCard(false);
      setCurrentTurtle("");
      setCompletionCard(true)
    }
    setCribCard(false)
    setCurrentTurtle("")
  }

  return (
    <div className="main">
      <nav className="turtles-nav">
        <div className="turtles-current">
          <Typography variant="h5" color="primary" className="turtles-nav-text">
            YOU ARE CURRENTLY HOLDING:
          </Typography>
          <div
            className={`${currentTurtle ? "turtle" : "turtle-closed"}`}
            onClick={() => setNinjaCard(true)}
          >
            <div className={currentTurtle.toLowerCase()}>
              <div className="turtle-eye">
                <div className="turtle-pupil"></div>
              </div>
              <div className="turtle-eye">
                <div className="turtle-pupil"></div>
              </div>
            </div>
            <div className="turtle-mouth"></div>
          </div>
        </div>
        <div className="turtles-button-div">
          <Link to="/Bawk">
            <Button color="primary" variant="contained">
              Bawk
            </Button>
          </Link>
          <Button color="secondary" variant="contained" onClick={toggleStartOver}>
            START OVER
          </Button>
        </div>
      </nav>
      <House />
      <div className="turtles-top">
        <div
          className={`${
            michelangeloCrib ? "turtles-crib-closed" : "turtles-crib"
          }`}
          onClick={toggleMichelangeloCrib}
        >
          <div className="turtles-crib-michelangelo">
            <h3>Michelangelo</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-michelangelo"></div>
            <div
              className={`${michelangeloCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
        <div
          className={`${
            !michelangeloCrib ? "turtles-crib-closed" : "turtles-crib-filled"
          }`}
        >
          <div className="turtles-crib-michelangelo">
            <h3>Michelangelo</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-michelangelo"></div>
            <div
              className={`${michelangeloCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
        <div
          className={`${
            donatelloCrib ? "turtles-crib-closed" : "turtles-crib"
          }`}
          onClick={toggleDonatelloCrib}
        >
          <div className="turtles-crib-donatello">
            <h3>Donatello</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-donatello"></div>
            <div
              className={`${donatelloCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
        <div
          className={`${
            !donatelloCrib ? "turtles-crib-closed" : "turtles-crib-filled"
          }`}
        >
          <div className="turtles-crib-donatello">
            <h3>Donatello</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-donatello"></div>
            <div
              className={`${donatelloCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
        <div
          className={`${leonardoCrib ? "turtles-crib-closed" : "turtles-crib"}`}
          onClick={toggleLeonardoCrib}
        >
          <div className="turtles-crib-leonardo">
            <h3>Leonardo</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-leonardo"></div>
            <div
              className={`${leonardoCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
        <div
          className={`${
            !leonardoCrib ? "turtles-crib-closed" : "turtles-crib-filled"
          }`}
        >
          <div className="turtles-crib-leonardo">
            <h3>Leonardo</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-leonardo"></div>
            <div
              className={`${leonardoCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
        <div
          className={`${raphaelCrib ? "turtles-crib-closed" : "turtles-crib"}`}
          onClick={toggleRaphaelCrib}
        >
          <div className="turtles-crib-raphael">
            <h3>Raphael</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-raphael"></div>
            <div
              className={`${raphaelCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
        <div
          className={`${
            !raphaelCrib ? "turtles-crib-closed" : "turtles-crib-filled"
          }`}
        >
          <div className="turtles-crib-raphael">
            <h3>Raphael</h3>
          </div>
          <div className="turtles-crib-middle">
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-bar"></div>
            <div className="turtles-crib-matress"></div>
            <div className="turtles-blanket-raphael"></div>
            <div
              className={`${raphaelCrib ? "turtle" : "turtle-closed"}`}
              onClick={() => setNinjaCard(true)}
            >
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
          </div>
          <div className="turtles-crib-bottom"></div>
          <div className="turtles-crib-legs">
            <div className="turtles-crib-leg"></div>
            <div className="turtles-crib-leg"></div>
          </div>
        </div>
      </div>

      <div className="turtles-middle-left">
        <div className="basket" onClick={toggleBasket}>
          <div className="basket-handle"></div>
          <div className="basket-bottom"></div>
        </div>
      </div>
      <div className="turtles-middle-middle">
        <div className="turtles-middle-middle-top">
          <div className={!swiped ? "turtle" : "turtle-closed"}>
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
          <div className={!swiped ? "turtle" : "turtle-closed"}>
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
        </div>
        <div className="turtles-middle-middle-bottom">
          <div className={!swiped ? "turtle" : "turtle-closed"}>
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
          <div className={!swiped ? "turtle" : "turtle-closed"}>
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
        </div>
      </div>
      <div className="turtles-middle-right">
        <div className="turtles-book-div" onClick={toggleBook}>
          <div className="turtles-book-cover-front">
            <div className="turtles-book-title">
              <h6>ABC</h6>
            </div>
          </div>
          <div className="turtles-book-page"></div>
          <div className="turtles-book-page"></div>
          <div className="turtles-book-page"></div>
          <div className="turtles-book-page"></div>
          <div className="turtles-book-page"></div>
          <div className="turtles-book-cover-back"></div>
        </div>
      </div>

      <div className="turtles-bottom">
        <div className="turtles-bottom-left">
          <div className="pinky" onClick={togglePinky}>
            <div className="pinky-horizontal-strands">
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
              <div className="pinky-horizontal-strand"></div>
            </div>
            <div className="pinky-vertical-strands">
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
              <div className="pinky-vertical-strand"></div>
            </div>
          </div>
        </div>
        <div className="turtles-bottom-middle">
          <Swiper
            one={animationOne}
            two={animationTwo}
            animation={(one) => setAnimationOne(one)}
            tooLate={() => setSwipedCard(true)}
            instructions={() => setInstructionsCard(true)}
            hasSwiped={() => setSwiped(true)}
          />
        </div>
        <div className="turtles-bottom-right">
          <div className="block-tower" onClick={toggleBlock}>
            <div className="block-tower-row-one">
              <div className="block-tower-block">
                <h2>1</h2>
              </div>
            </div>
            <div className="block-tower-row-two">
              <div className="block-tower-block">
                <h2>2</h2>
              </div>
              <div className="block-tower-block">
                <h2>3</h2>
              </div>
            </div>
            <div className="block-tower-row-three">
              <div className="block-tower-block">
                <h2>4</h2>
              </div>
              <div className="block-tower-block">
                <h2>5</h2>
              </div>
              <div className="block-tower-block">
                <h2>6</h2>
              </div>
            </div>
            <div className="block-tower-row-four">
              <div className="block-tower-block">
                <h2>7</h2>
              </div>
              <div className="block-tower-block">
                <h2>8</h2>
              </div>
              <div className="block-tower-block">
                <h2>9</h2>
              </div>
              <div className="block-tower-block">
                <h2>10</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card
        className={`${basketCard ? "turtles-card" : "turtles-card-closed"}`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Yay!!! You found baby Michelangelo hiding in the basket.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setBasketCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          basketFailureCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          You find nothing else in the basket.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setBasketFailureCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          otherTurtleCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          First, figure out which crib to put baby {currentTurtle} in.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setOtherTurtleCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${ninjaCard ? "turtles-card" : "turtles-card-closed"}`}>
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Inja Inja
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setNinjaCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          introductionCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          The baby ninja turtles need a nap before Lily's party. Please put them
          in the right crib.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={toggleAnimationOne}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          instructionsCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Oh no! Swiper swiped the baby ninja turtles. Now you need to find them
          before you can put them down for their naps.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setInstructionsCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${swipedCard ? "turtles-card" : "turtles-card-closed"}`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          You're too late! You'll never find the baby ninja turtles now! Ha ha
          ha!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={toggleAnimationTwo}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${bookCard ? "turtles-card" : "turtles-card-closed"}`}>
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Yay!!! You found baby Donatello hiding behind the book.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setBookCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          bookFailureCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          You find nothing else behind the book.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setBookFailureCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${pinkyCard ? "turtles-card" : "turtles-card-closed"}`}>
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Yay!!! You found baby Leonardo hiding under Pinky.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setPinkyCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          pinkyFailureCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          You find nothing else under Pinky.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setPinkyFailureCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${blockCard ? "turtles-card" : "turtles-card-closed"}`}>
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Yay!!! You found baby Raphael hiding behind the blocks.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setBlockCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          blockFailureCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          You find nothing else behind the blocks.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setBlockFailureCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          cribRejectionCard ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          You don't have a baby ninja turtle to put in the crib.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setCribRejectionCard(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${
          cribRejectionCardTwo ? "turtles-card" : "turtles-card-closed"
        }`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Uh oh! That is not {currentTurtle}'s bed!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setCribRejectionCardTwo(false)}
        >
          CLOSE
        </Button>
      </Card>
      <Card className={`${cribCard ? "turtles-card" : "turtles-card-closed"}`}>
        <Typography variant="h4" color="primary" className="turtles-card-text">
          Yay! {currentTurtle} is now in his crib!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={toggleCurrentTurtle}
        >
          CLOSE
        </Button>
      </Card>
      <Card
        className={`${completionCard ? "turtles-card" : "turtles-card-closed"}`}
      >
        <Typography variant="h4" color="primary" className="turtles-card-text">
          You did it! All the baby ninja turtles are taking their naps. They'll
          be ready for Lily's party.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          className="turtles-card-button"
          onClick={() => setCompletionCard(false)}
        >
          CLOSE
        </Button>
      </Card>
    </div>
  );
}

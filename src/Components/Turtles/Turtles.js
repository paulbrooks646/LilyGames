import React, { useState } from "react";
import "./Turtles.scss"
import House from "../House/House";
import Swiper from "../Swiper/Swiper";

export default function Turtles() {

  const [animationOne, setAnimationOne] = useState(false)
  const [animationTwo, setAnimationTwo] = useState(false)
  const [swiper, setSwiped] = useState(false)
  const [leonardoCrib, setLeonardoCrib] = useState(false)
  const [donatelloCrib, setDonatelloCrib] = useState(false)
  const [michelangeloCrib, setMichelangeloCrib] = useState(false)
  const [raphaelCrib, setRaphaelCrib] = useState(false)
  const [introductionCard, setIntroductionCard] = useState(false)
  const [swipedCard, setSwipedCard] = useState(false)
  const [basketCard, setBasketCard] = useState(false)
  const [bookCard, setBookCard] = useState(false)
  const [pinkyCard, setPinkyCard] = useState(false)
  const [blockCard, setBlockCard] = useState(false)
  const [ninjaCard, setNinjaCard] = useState(false)
  const [basketFailureCard, setBasketFailureCard] = useState(false)
  const [bookFailureCard, setBookFailureCard] = useState(false)
  const [pinkyFailureCard, setPinkyFailureCard] = useState(false)
  const [blockFailureCard, setBlockFailureCard] = useState(false)
  const [completionCard, setCompletionCard] = useState(false)
  const [instructionsCard, setInstructionsCard] = useState(false)

    return (
      <div className="main">
        <nav className="turtles-nav"></nav>
        <House />
        <div className="turtles-top">
          <div className="turtles-crib">
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
              <div className="turtles-crib-matress"></div>
              <div className="turtles-blanket-michelangelo"></div>
              <div className={`${michelangeloCrib ? "turtle" : "turtle-closed"}`}>
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
          <div className="turtles-crib">
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
              <div className="turtles-crib-matress"></div>
              <div className="turtles-blanket-donatello"></div>
              <div className={`${donatelloCrib ? "turtle" : "turtle-closed" }`}>
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
          <div className="turtles-crib">
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
              <div className="turtles-crib-matress"></div>
              <div className="turtles-blanket-leonardo"></div>
              <div className={`${leonardoCrib ? "turtle" : "turtle-closed"}`}>
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
          <div className="turtles-crib">
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
              <div className="turtles-crib-matress"></div>
              <div className="turtles-blanket-raphael"></div>
              <div className={`${raphaelCrib ? "turtle" : "turtle-closed"}`}>
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
          <div className="basket" onClick={`${michelangeloCrib ? () => setBasketFailureCard(true) : () => setBasketCard(true)}`}>
            <div className="basket-handle"></div>
            <div className="basket-bottom"></div>
          </div>
        </div>
        <div className="turtles-middle-middle">
          <div className="turtles-middle-middle-top">
            <div className="turtle">
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
            <div className="turtle">
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
            <div className="turtle">
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
            <div className="turtle">
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
          <div className="turtles-book-div">
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
            <div className="pinky">
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
            <Swiper />
          </div>
          <div className="turtles-bottom-right">
            <div className="block-tower">
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
        
      </div>
    );
}
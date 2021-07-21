import React from "react";
import "./Turtles.scss"
import House from "../House/House";

export default function Turtles() {
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
                    </div>
                    <div className="turtles-crib-bottom"></div>
                    <div className="turtles-crib-legs">
                        <div className="turtles-crib-leg"></div>
                        <div className="turtles-crib-leg"></div>
                    </div>
                </div>
                <div className="turtles-crib">
                    <div className="turtles-crib-leonardo"><h3>Leonardo</h3></div>
                    <div className="turtles-crib-middle">
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-matress"></div>
                        <div className="turtles-blanket-leonardo"></div>
                    </div>
                    <div className="turtles-crib-bottom"></div>
                    <div className="turtles-crib-legs">
                        <div className="turtles-crib-leg"></div>
                        <div className="turtles-crib-leg"></div>
                    </div>
                </div>
                <div className="turtles-crib">
                    <div className="turtles-crib-raphael"><h3>Raphael</h3></div>
                    <div className="turtles-crib-middle">
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-bar"></div>
                        <div className="turtles-crib-matress"></div>
                        <div className="turtles-blanket-raphael"></div>
                    </div>
                    <div className="turtles-crib-bottom"></div>
                    <div className="turtles-crib-legs">
                        <div className="turtles-crib-leg"></div>
                        <div className="turtles-crib-leg"></div>
                    </div>
                </div>
            </div>
            
                <div className="turtles-middle-left"></div>
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
                <div className="turtles-middle-right"></div>
            
            <div className="turtles-bottom">
                <div className="turtles-bottom-left"></div>
                <div className="turtles-bottom-middle"></div>
                <div className="turtles-bottom-right"></div>
            </div>

        </div>
    )
}
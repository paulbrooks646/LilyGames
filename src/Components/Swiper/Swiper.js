import React from "react";
import "./Swiper.scss";

export default function Swiper() {

    return (
      <div className="swiper">
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
    );
}

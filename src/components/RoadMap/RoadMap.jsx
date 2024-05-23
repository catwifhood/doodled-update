import React from "react";
import lines from "../../Assets/Group 28.png";
import "./RoadMap.css";

const RoadMap = () => {
  return (
    <div className="rMapContainer">
      <div className="rMapContent">
        <div className="rMapContent">
          <p className="whiterBorder"></p>
          <div className="rMapHead">
            <h1>ROADMAP</h1>
          </div>
          <div className="roadMaps">
            <ul className="roadMapUl">
              <li>
                <div style={{ display: "flex" }}>
                  <h3 className="rMapLeft">1</h3>
                  <p className="roadmap-list">
                    <ul className="dotslists">
                      <li>LAUNCH $MAGADOGE ON DEX</li>
                      <li>BURN LP</li>
                      <li>REMOVE MINT</li>
                    </ul>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  <h3 className="rMapLeft">2</h3>
                  <p className="roadmap-list">
                    <ul className="dotslists">
                      <li>DEXSCREENER TRENDING</li>
                      <li>UPDATE DEXSCREENER</li>
                      <li>PAY DEX ADS</li>
                      <li>CG + CMC LISTING</li>
                    </ul>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  {" "}
                  <h3 className="rMapLeft">3</h3>
                  <p className="roadmap-list">
                    <ul className="dotslists">
                      <li>GET KOLS INVOLVED</li>
                      <li>ACHIEVE COMMUNITY MILESTONES</li>
                      <li>TAKEOVER THE SOLANA CHAIN!</li>
                    </ul>
                  </p>
                </div>
              </li>
            </ul>
            <img className="linesImg" src={lines} alt="..." />
            {/* <ul className="roadMapUl">
              <li>
                <h3 className="rMapLeft">60%</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </li>
              <li>
                <h3 className="rMapLeft">80%</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </li>
              <li>
                <h3 className="rMapLeft">100%</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </li>
            </ul> */}
          </div>
          <p className="whiterBorder"></p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;

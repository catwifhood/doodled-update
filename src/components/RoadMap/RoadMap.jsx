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
            <h1>Roadmap</h1>
          </div>
          <div className="roadMaps">
            <ul className="roadMapUl">
              <li>
                <div style={{ display: "flex" }}>
                  <h3 className="rMapLeft">1</h3>
                  <p>
                    <ul className="dotslists">
                      <li>Launch DOODLED</li>
                      <li>CG CMC Listing</li>
                      <li>Dex Trending</li>
                      <li>1,000+ Holders</li>
                    </ul>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  <h3 className="rMapLeft">2</h3>
                  <p>
                    <ul className="dotslists">
                      <li>CEX Listings</li>
                      <li>Marketing Campaign</li>
                      <li>Community Partnerships</li>
                      <li>Build a $DOODLED Community</li>
                    </ul>
                  </p>
                </div>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  {" "}
                  <h3 className="rMapLeft">3</h3>
                  <p>
                    <ul className="dotslists">
                      <li>$1 Million+ MC</li>
                      <li>100,000+ Holders</li>
                      <li>T1 Exchange Listings</li>
                      <li>Takeover the Solana chain!</li>
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

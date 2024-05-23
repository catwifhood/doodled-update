import React from "react";
import v1 from "../../Assets/Vector 17.png";
import v2 from "../../Assets/Vector 14.png";
import v3 from "../../Assets/Vector 16.png";
import v4 from "../../Assets/Vector 15.png";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <div className="faqContainer">
        <div className="faqSection">
          <div className="faqHeadMain">
            <div className="faqHead">
              <h1>
                FAQ<span>s</span>
              </h1>
            </div>
            <img className="v1" src={v1} alt="..." />
            <img className="v2" src={v2} alt="..." />
            <img className="v3" src={v3} alt="..." />
            <img className="v4" src={v4} alt="..." />
          </div>
          <div className="faqContent">
            <div className="faqs">
              <p className="faqQ">WHERE WILL WE BE LAUNCHING?</p>
              <p className="faqAns">
                WE WILL BE STEALTH LAUNCHING ON PUMP FUN SO KEEP UPDATED ON OUR
                TWITTER.
              </p>
            </div>
            <div className="faqs">
              <p className="faqQ">WHAT WILL HAPPEN AFTER RAYDIUM?</p>
              <p className="faqAns">
                DEX WILL BE UPDATED, FOLLOWED BY TRENDING, AND THEN MOON!
              </p>
            </div>
            <div className="faqs">
              <p className="faqQ">
                HOW MANY QUESTION DOES A ROOSTER ASK BEFORE CROSSING THE ROAD ?
              </p>
              <p className="faqAns">
                TOO MANY QUESTION TO ANSWER AND WE JUST NEED TO SEE HOW LONG IT
                GOES!
              </p>
            </div>
            <div className="faqs">
              <p className="faqQ">WHAT IS YOUR TWITTER?</p>
              <p className="faqAns">
                WE POST ALL OF OUR UPDATES @DoodledDogeOnSol.
              </p>
            </div>
            <div className="faqs">
              <p className="faqQ">WHAT BLOCKCHAIN ARE YOU LAUNCHING ON?</p>
              <p className="faqAns">
                DOODLED DOGE IS HERE TO TAKEOVER THE SOLANA BLOCKCHAIN.
              </p>
            </div>
            {/* <div className="faqs">
            <p className="faqQ">
              HOW MANY QUESTION DOES A ROOSTER ASK BEFORE CROSSING THE ROAD ?
            </p>
            <p className="faqAns">
              TOO MANY QUESTION TO ANSWER AND WE JUST NEED TO SEE HOW LONG IT
              GOES!
            </p>
          </div> */}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          background: "rgba(36, 51, 60, 1)",
        }}></div>
    </>
  );
};

export default Faq;

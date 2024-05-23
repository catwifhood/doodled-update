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
              <p className="faqQ">STEP 1 - CREATE A WALLET</p>
              <p className="faqAns">
                DOWNLOAD A WALLET OF YOUR CHOICE. PHANTOM IS RECOMMENDED FOR EASE OF USE.
              </p>
            </div>
            <div className="faqs">
              <p className="faqQ">STEP 2 - GET SOME SOLANA</p>
              <p className="faqAns">
                YOU CAN PURCHASE SOLANA FROM INSIDE THE SOLANA APP.
              </p>
            </div>
            <div className="faqs">
              <p className="faqQ">
                STEP 3 - GO TO RAYDIUM
              </p>
              <p className="faqAns">
                CONNECT TO RAYDIUM.IO AND PASTE THE $MAGADOGE TOKEN ADDRESS.
              </p>
            </div>
            <div className="faqs">
              <p className="faqQ">STEP 4 - SWAP SOL for $MAGADOGE</p>
              <p className="faqAns">
              CONFIRM SWAP AND GET SOME $MAGADOGE.
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

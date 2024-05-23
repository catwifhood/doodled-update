import React, { useState } from 'react'
import lines from '../../Assets/Group 52.png'
import dog from '../../Assets/aPP_2Artboard 23 1.png'
import top from '../../Assets/Rectangle 10.png'
import lcdDog from '../../Assets/dog-final-1.png'
import lcdBottom from '../../Assets/lcd-bottom.png'
import './Transaction.css'

const Transaction = () => {
  const [dogs, setDogs] = useState([dog])
  const handleAdd = () => {
    if (dogs.length < 5) {
      setDogs([...dogs, dog])
    }
  }

  const handleMinus = () => {
    if (dogs.length > 1) {
      setDogs(dogs.slice(0, dogs.length - 1))
    }
  }

  return (
    <div className="transContainer">
      <div className="transSection">
        <div className="mintBtnSec">
          <img src={lines} alt="..." />
          <button className="mintBtnS">TELEGRAM</button>
          <button className="mintBtn">BUYNOW</button>
          <button className="mintBtnS">TWITTER</button>
        </div>
        {/* <div className="counterContent">
          <div className="counter">
            <button className="countBtn" onClick={handleAdd}>
              +
            </button>
            {dogs.map((dog, i) => (
              <img key={i} src={dog} alt="..." />
            ))}
            <button className="countBtn" onClick={handleMinus}>
              -
            </button>
          </div>
        </div> */}
        {/* <p className="msxTrans">MAX 5 PER TRANSACTION</p> */}
        <div className="lcdSection">
          <div className="lcdContent">
            <img className='borderTop' src={top} alt="..." />
            <div className="screen">
              <div className="screenPara">
                  <h3>DOODLED DOGE</h3>
                <p className="descriptionText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  tristique nec tortor eget lobortis. In blandit nulla ac
                  consequat finibus.
                </p>
                <p className="descriptionText">
                  Sed placerat sapien id arcu fermentum suscipit ut accumsan
                  nisi. Praesent pellentesque purus vitae metus tincidunt
                  malesuada.
                </p>
              </div>
              <div className="screnDog">
                  <img src={lcdDog} alt="..." />
              </div>
            </div>
            <img className='lcdBtm' src={lcdBottom} alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction

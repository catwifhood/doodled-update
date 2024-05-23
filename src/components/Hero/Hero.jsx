import React, { useState, useEffect } from 'react'
import withoutTree from '../../Assets/without tree.png'
import trees from '../../Assets/Group 49.png'
import tree1 from '../../Assets/aPP_2Artboard 22.png'
import tree2 from '../../Assets/aPP_2Artboard 22 (1).png'
import './Hero.css'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({})
  // const times = ['days', 'hours', 'minutes', 'seconds']
  let time = '08 nov 2021  00:00:00'
  useEffect(() => {
    const updateTime = () => {
      const timer = new Date(time || Date.now()).getTime()
      const now = Date.now()
      const remainingTime = timer - now
      const prevSeconds = Math.floor(remainingTime / 1000)
      const prevMinutes = Math.floor(prevSeconds / 60)
      const seconds = prevSeconds % 60
      const prevHours = Math.floor(prevMinutes / 60)
      const minutes = prevMinutes % 60
      const days = Math.floor(prevHours / 24)
      const hours = prevHours % 24
      if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0)
        setTimeLeft({ seconds, minutes, hours, days })
    }
    const myInterval = setInterval(updateTime, 1000)
    return () => clearInterval(myInterval)
  }, [time])
  // console.log(timeLeft)

  return (
    <div className="heroContainer">
      <div className="Hero">
        <div className="heroImg">
          <img src={withoutTree} alt="..." />
        </div>
        <div className="timerSection">
          <div className="timerContent">
            <div className="tresImgbg">
              <img className="bgtrees" src={trees} alt="..." />
              <div className="timerMain">
                <div className="timer">
                  <div className="days">
                    <h3>LP</h3>
                    <p>BURNT</p>
                  </div>
                  <img className="tree1" src={tree2} alt="..." />
                  <div className="days">
                    <h3>NO</h3>
                    <p>TAX</p>
                  </div>
                  <img className="tree2" src={tree1} alt="..." />
                  <div className="days">
                    <h3>Mint</h3>
                    <p>REVOKED</p>
                  </div>
                  <div className="days">
                    <h3>Supply</h3>
                    <p>100,000,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

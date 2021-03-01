import React, { useState, useEffect, useRef } from 'react'
import './tugas11.css'

function Tugas11(props) {
  const [counter, setCounter] = useState(null)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const counterRef = useRef(counter)
  counterRef.current = counter

  useEffect(() => {
    if (props.start !== undefined) {
      setCounter(props.start)
    }
    let counterTimeID = setInterval(() => {
      tick()
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(counterTimeID)
  }, [props.start])

  function tick() {
    let currCounter = counterRef.current
    if (currCounter === 0) {
      setCounter(props.start)
    } else {
      setCounter((currCounter) => currCounter - 1)
    }

    return currCounter
  }

  return (
    <>
      <div
        class="div_time"
        style={{ display: counter === 0 ? 'none' : 'block' }}
      >
        <h1 className="time">Sekarang Jam : {time}</h1>
        <h1 className="counter">Hitung Mundur : {counter}</h1>
      </div>
    </>
  )
}

export default Tugas11

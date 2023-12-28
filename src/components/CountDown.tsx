"use client"
import React from 'react'
import Countdown from 'react-countdown'
const endingDate = new Date("2023-12-30")
const CountDown = () => {
  return (
    <Countdown className='text-5xl font-bold text-yellow-300' date={endingDate}/>
  )
}

export default CountDown
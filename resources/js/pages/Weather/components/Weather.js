import React from 'react';

export default function Weather(props) {
  const {
    icon,
    date,
    weather,
    tempLow,
    tempHigh,
    temp,
    unit,
    likeMorn,
    likeDay,
    likeNight,
  } = props

  return (
    <div className="flex">
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
        <div className="text-sm text-gray-500">{date}</div>
        <div
          className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <img className="object-contain h-48 w-full" src={icon}/>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{Math.round(temp)}{unit}</div>
          <div className="flex flex-col items-center ml-6">
            <div>{weather}</div>
            <div className="mt-1">
              <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
              <span className="text-sm font-light text-gray-500">{Math.round(tempHigh)}{unit}</span>
            </div>
            <div>
              <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
              <span className="text-sm font-light text-gray-500">{Math.round(tempLow)}{unit}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Morning</div>
            <div className="text-sm text-gray-500">{Math.round(likeMorn)}{unit}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Day</div>
            <div className="text-sm text-gray-500">{Math.round(likeDay)}{unit}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Night</div>
            <div className="text-sm text-gray-500">{Math.round(likeNight)}{unit}</div>
          </div>
        </div>
      </div>
    </div>
  )
}



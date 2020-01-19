import React, { useState } from 'react';
import './Calendar.css';

const events = [
  {
    from: '15:30',
    to: '16:15'
  },
  {
    from: '18:00',
    to: '20:30'
  },
];


export function Calendar() { 
  const hours = Array.from({ length: 24 }, (_, i) => i).slice(8, 24);
  console.log(hours);

  function calcDuration (from, to) { // 15:30 16:15 => 0.75
    const [fromHours, fromMinutes] = from.split(':').map(Number);
    const [toHours, toMinutes] = to.split(':').map(Number);

    return (toHours + toMinutes / 60) - (fromHours + fromMinutes / 60);
  }
  
  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="selectDate">
          <button>←</button>
           14 декабря
          <button>→</button>
        </div>
        <div className="timeLine">
          {hours.map(hour => <div key={hour} className="timeLine__item">{hour}</div>)}
        </div>
      </div>
      
      <div className="calendar__body">
        <div className="row"> 
          <div className="row__aside">Название переговорки</div>
          <div className="row__main">
            {events.map(({ from, to }) => {
              const left = `${calcDuration('8:00', from) / 15 * 100}%`;
              const width = `${calcDuration(from, to) / 15 * 100}%`;

              return (
                <div className="row__event" style={{ left, width }} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
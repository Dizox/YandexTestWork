import React, { useState } from 'react';
import "./Meeting.css"

const meetingRooms = [
  { id: 0, timeStart: '16:00', timeEnd: '16:30', place: 'Готем', floor: 4 },
  { id: 1, timeStart: '16:00', timeEnd: '16:30', place: 'Поле непаханное', floor: 4 },
  { id: 2, timeStart: '16:00', timeEnd: '16:30', place: 'Тёмная башня', floor: 4 },
]

export function Meeting({ meetingSelected, setMeetingSelected }) {
  function selectRoom(event) {
    const { currentTarget } = event;
    const { id } = currentTarget.dataset;
    setMeetingSelected(+id);
  }

  function removeRoom() {
    setMeetingSelected(null);
  }

  if (meetingSelected === null) {
    return (
      <div className="meeting">
        <div className="input__title">Рекомендованные переговорки</div>
        <div className="meeting__list">
          {meetingRooms.filter(_ => true).map(room => (
            <div className="meeting__item" data-id={room.id} onMouseDown={selectRoom}>
              <div className="meeting__time">{room.timeStart} — {room.timeEnd}</div>
              <div className="meeting__place">{room.place}</div>
              <div className="meeting__floor">{room.floor} этаж</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const selectedRoom = meetingRooms.find(({ id }) => id === meetingSelected);

  return (
    <div className="meeting">
      <div className="input__title">Ваша переговорка</div>
      <div className="meeting__item meeting__item_selected" data-id={selectedRoom.id}>
        <div className="meeting__time">{selectedRoom.timeStart} — {selectedRoom.timeEnd}</div>
        <div className="meeting__place">{selectedRoom.place}</div>
        <div className="meeting__floor">{selectedRoom.floor} этаж</div>
        <button className="meeting__close" onMouseDown={removeRoom}></button>
      </div>
    </div>
  )
}
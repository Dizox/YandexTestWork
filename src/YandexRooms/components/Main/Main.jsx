import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Suggest } from '../Suggest/Suggest';
import { Meeting } from '../Meeting/Meeting';
import './Main.css';

const initialFormValues = {
  title: '',
  participants: [],
  room: null
};

export function Main() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const setFormValue = field => value => setFormValues(prev => ({
    ...prev,
    [field]: value
  }));

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
  }

  function handleReset(e) {
    e.preventDefault();
    setFormValues(initialFormValues);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className='form'>
      <div className="form__container">
        <div className="form__title">
          <span>Новая встреча</span>
          <button className="form__close"></button>
        </div>

        <div className="form__item">
          <Input
            placeholder="О чем будете говорить?"
            title="Тема"
            value={formValues.title}
            onChange={e => setFormValue('title')(e.target.value)}
          />
        </div>

        <div className="form__item">
          <Input
            placeholder="О чем будете говорить?"
            title="Тема"
            value={formValues.title}
            onChange={e => setFormValue('title')(e.target.value)}
          />
        </div>

        <div className="form__item">
          <Suggest
            title="Участники"
            value={formValues.participants}
            onChange={setFormValue('participants')}
          />
        </div>

        <div className="form__item">
          <Meeting
            meetingSelected={formValues.room}
            setMeetingSelected={setFormValue('room')}
          />
        </div>
      </div>

      <div className="form__buttons">
        <button type="reset" className="button">Отмена</button>
        <button type="submit" className="button button_blue">Создать встречу</button>
      </div>
    </form>
  )
}

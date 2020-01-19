import React, { useState } from 'react';
import { Input } from '../Input/Input';
import "./Suggest.css"

const persons = [{
  id: 0,
  img: 'https://sun9-22.userapi.com/c841420/v841420038/19258/gNijsLwsYnY.jpg?ava=1',
  names: 'Лекс Лютер',
  floor: 7
},
{
  id: 1,
  img: 'https://sun7-6.userapi.com/c846016/v846016566/131b2f/g2kt9_yaWUM.jpg?ava=1',
  names: 'Томас Лютер',
  floor: 15
},
{
  id: 2,
  img: 'https://sun9-22.userapi.com/c841420/v841420038/19258/gNijsLwsYnY.jpg?ava=1',
  names: 'Дарт Лютер',
  floor: 2
},
{
  id: 3,
  img: 'https://sun7-6.userapi.com/c846016/v846016566/131b2f/g2kt9_yaWUM.jpg?ava=1',
  names: 'Кларк Лютер',
  floor: 3
},
{
  id: 4,
  img: 'https://sun9-22.userapi.com/c841420/v841420038/19258/gNijsLwsYnY.jpg?ava=1',
  names: 'Кент Лютер',
  floor: 4
},
{
  id: 5,
  img: 'https://sun7-6.userapi.com/c846016/v846016566/131b2f/g2kt9_yaWUM.jpg?ava=1',
  names: 'Вейдер Лютер',
  floor: 12
}];


export function Suggest(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [findField, setFindField] = useState('');
  const { value, onChange } = props;

  function addPerson(event) {
    const { currentTarget } = event;
    const { id } = currentTarget.dataset;
    onChange([...value, Number(id)]);
  }

  function removePerson(event) {
    const { currentTarget } = event;
    const { id } = currentTarget.dataset;
    onChange(value.filter(item => item != id));
  }

  function changeFindField(event) {
    const { currentTarget } = event;
    const value = currentTarget.value;
    setFindField(value);
  }

  const filteredPersons = persons.filter(person =>
    !value.includes(person.id) && person.names.toLowerCase().includes(findField.toLowerCase())
  );

  return (
    <div className="persons">
      <Input title='Участники' onFocus={() => setIsVisible(true)} onBlur={() => setIsVisible(false)} onChange={changeFindField} />

      {isVisible && (
        <div className="persons__dropdown">
          {filteredPersons.length === 0 && (
            <div className="persons__item persons__item_notFound">Ничего не найдено!</div>
          )}
          {filteredPersons.map(person => (
            <div className="persons__item" data-id={person.id} onMouseDown={addPerson}>
              <img src={person.img} className="persons__img" />
              <div className="persons__names">{person.names}</div>
              <div className="persons__floor">{person.floor} этаж</div>
            </div>
          ))}
        </div>
      )}

      <div className="persons__cards">
        {value.map(id => {
          const person = persons.find(obj => obj.id === id)
          if (!person) return null;
          return (
            <div className="persons__card">
              <img className="persons__img" src={person.img} />
              <div className="persons__names">{person.names}</div>
              <button className="persons__delete" onMouseDown={removePerson} data-id={person.id}></button>
            </div>
          );
        })}
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./YandexRooms/components/Header/Header";
import { Main } from "./YandexRooms/components/Main/Main";
import { Calendar } from "./YandexRooms/components/Calendar/Calendar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/add">
            <Main/>
          </Route>
          <Route path="/">
            <Calendar/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// https://reacttraining.com/react-router/web/guides/quick-start

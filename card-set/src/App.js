import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './card-component'

function App() {
  
  return (
    <div className="cards">
      <UserCard userId="4"/>
      <UserCard userId="8"/>
      <UserCard userId="1"/>
      <UserCard userId="10"/>
      <UserCard userId="12"/>
      <UserCard userId="6"/>
    </div>
  );
}

export default App;

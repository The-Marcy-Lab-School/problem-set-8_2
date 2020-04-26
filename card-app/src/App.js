import React from 'react';
import './App.css';
import Card from './UserCard.jsx';
import getUsers from './getUsers.js';

function App() {
  console.log('connected')
  const { email, first_name, last_name, avatar } = getUsers('https://reqres.in/api/users');
  console.log(email, first_name, last_name, avatar)
  return (
    <main className='cards'>
      
      
      <Card />
    </main>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

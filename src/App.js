import React from 'react';
import Card from './Card';

function App() {
  const userIds = [1, 2, 3, 4, 5, 6]; 
  
  const displayCards = userIds.map(id => {
    return (
      <Card key={id} userId={id}/>
      );
  });
  
  return (
    <div>
      {displayCards}
    </div>
  );
}

export default App;

import React from 'react';
import SleepPlaceCard from './components/SleepPlaceCard';
import UserEntityFilter from './components/UserEntityFilter';

function App() {
  return (
    <div>
      <h1>Best Places for Sleep</h1>
      <UserEntityFilter />
      <SleepPlaceCard />
    </div>
  );
}

export default App;
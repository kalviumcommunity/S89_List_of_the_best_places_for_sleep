import React from 'react';

import PlaceCard from './components/PlaceCard';

const App = () => {
    const dummyData = {
        name: "Tranquil Beach Resort",
        location: "Maldives",
        description: "A serene beachside resort with stunning ocean views.",
        rating: 4.8,
        pricePerNight: 250,
    };

    return (
        <div>
            <h1>Welcome to Serenity Hub</h1>
            <PlaceCard {...dummyData} />
        </div>
    );
};

import SleepPlaceCard from './components/SleepPlaceCard';

function App() {
  return (
    <div>
      <h1>Best Places for Sleep</h1>
      <SleepPlaceCard />
    </div>
  );
}

export default App;
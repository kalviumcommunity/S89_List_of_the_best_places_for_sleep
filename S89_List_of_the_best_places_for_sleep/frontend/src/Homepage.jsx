import React from 'react';
const bestSleepPlaces = [
    {
      name: 'Silent Mountain Retreat',
      imageUrl: 'https://via.placeholder.com/300?text=Mountain',
      description: 'A secluded mountain cabin with breathtaking views and absolute silence.',
      rating: 4.9,
      amenities: ['Soundproof walls', 'Organic bedding', 'Meditation room'],
    },
    {
      name: 'Oceanic Dream Spa',
      imageUrl: 'https://via.placeholder.com/300?text=Ocean',
      description: 'A luxurious spa resort by the ocean, with gentle waves lulling you to sleep.',
      rating: 4.7,
      amenities: ['Aromatherapy baths', 'White noise machines', 'Memory foam mattresses'],
    },
    {
      name: 'Forest Canopy Hideaway',
      imageUrl: 'https://via.placeholder.com/300?text=Forest',
      description: 'A treehouse nestled in a tranquil forest, with the sounds of nature surrounding you.',
      rating: 4.6,
      amenities: ['Darkened rooms', 'Herbal teas', 'Hammocks'],
    },
    {
      name: 'Desert Starlight Sanctuary',
      imageUrl: 'https://via.placeholder.com/300?text=Desert',
      description: 'A remote desert oasis where you can sleep under a blanket of stars.',
      rating: 4.8,
      amenities: ['Cooling systems', 'Silk bedding', 'Star gazing equipment'],
    },
    {
      name: 'Urban Tranquility Pods',
      imageUrl: 'https://via.placeholder.com/300?text=City',
      description: 'Soundproof sleep pods in the heart of the city, offering a peaceful escape.',
      rating: 4.5,
      amenities: ['Individual climate control', 'Personalized soundscapes', 'Blackout blinds'],
    },
    {
      name: 'Arctic Aurora Lodge',
      imageUrl: 'https://via.placeholder.com/300?text=Arctic',
      description: 'A cozy lodge in the Arctic Circle, where you can watch the Northern Lights before drifting off to sleep.',
      rating: 4.9,
      amenities: ['Heated rooms', 'Warm blankets', 'Views of the Aurora Borealis'],
    },
    {
      name: 'Countryside Lavender Farm',
      imageUrl: 'https://via.placeholder.com/300?text=Lavender',
      description: 'A peaceful farm surrounded by lavender fields, known for its calming aroma.',
      rating: 4.7,
      amenities: ['Lavender infused air', 'Soft pillows', 'Quiet surroundings'],
    },
    {
      name: 'Underwater Serenity Suite',
      imageUrl: 'https://via.placeholder.com/300?text=Underwater',
      description: 'A suite located underwater, where you can sleep surrounded by the gentle sounds of the ocean.',
      rating: 4.8,
      amenities: ['Soundproof glass', 'Soft lighting', 'Gentle aquarium sounds'],
    },
      {
      name: 'Zen Garden Retreat',
      imageUrl: 'https://via.placeholder.com/300?text=Zen',
      description: 'A minimalist retreat centered around a zen garden, designed for ultimate relaxation.',
      rating: 4.6,
      amenities: ['Meditation cushions', 'Minimalist decor', 'Quiet garden'],
    },
      {
      name: 'Space Station Slumber Pods',
      imageUrl: 'https://via.placeholder.com/300?text=Space',
      description: 'Experience zero-gravity sleep in our state-of-the-art space station slumber pods.',
      rating: 5.0,
      amenities: ['Zero-gravity environment', 'Customizable lighting', 'Panoramic space views'],
    },
  ];
  
  console.log(bestSleepPlaces);
const Homepage = () => {
    return (
        <div>
            <h1>Welcome to the Best Places for Sleep</h1>
            <p>Discover the most relaxing and peaceful places to rest and recharge.</p>
        </div>
    );
};

export default Homepage;
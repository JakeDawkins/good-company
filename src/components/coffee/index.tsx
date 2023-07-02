import { useState } from 'react';

const coffeeData = {
  roaster: 'Little Wolf',
  // about the roaster -- where they're based, ethos, etc.
  roasterNotes: 'This coffee was roasted on June 13th.',
  roasterUrl: 'https://littlewolf.coffee/',
  name: 'Las Perlitas',
  tastingNotes: 'Plum, apple, and sugar',
  process: 'Honey Washed',
  region: 'Colombia',
  roastDate: 'June 13th',
  coffeeNotes:
    'This coffee was was processed through honey washing, which has nothing to do with actual honey. Honey washing is a way of removing the pulp from the coffee fruit without a lot of water. This process became popular in 2008 after an earthquake in Costa Rica left much of the country without adequate supplies of water.',
};

const Coffee = () => {
  const [showRoasterDetails, setShowRoasterDetails] = useState(false);
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-light border-b border-black">
        Today&apos;s Coffee
      </h2>

      <h3 className="mt-4 text-2xl">{coffeeData.name}</h3>
      <div className="flex flex-row">
        <p
          // role="button"
          onClick={() => {
            setShowRoasterDetails(!showRoasterDetails);
          }}
        >
          by{' '}
          <a target="_blank" href={coffeeData.roasterUrl} className="underline">
            {coffeeData.roaster}
          </a>{' '}
          (roasted on {coffeeData.roastDate})
          {/* {showRoasterDetails ? '▼' : '►'} */}
        </p>
      </div>

      <p className="mt-4">
        <span className="underline">Region:</span> {coffeeData.region}
      </p>

      <p className="mt-4">
        <span className="underline">Tasting Notes:</span>{' '}
        {coffeeData.tastingNotes}
      </p>

      <p className="mt-4">{coffeeData.coffeeNotes}</p>
    </div>
  );
};

const Roaster = () => {};

export default Coffee;

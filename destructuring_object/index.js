const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };

  console.log(player.club);

  const {name,club}=player;
  console.log(`${name}`);

  const {address:{city}}=player;
  console.log(`${city}`);

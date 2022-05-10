import RocketItem from './RocketItem';

const RocketsList = () => {
  const testItems = [
    {
      rocket_id: '1',
      rocket_name: 'Name',
      description: 'Description',
      flickrImage: 'image',
    },
    {
      rocket_id: '2',
      rocket_name: 'Name',
      description: 'Description',
      flickrImage: 'image',
    },
    {
      rocket_id: '3',
      rocket_name: 'Name',
      description: 'Description',
      flickrImage: 'image',
    },
  ];

  return (
    testItems.map((rocket) => (
      <RocketItem key={rocket.rocket_id} rocket={rocket} />
    ))
  );
};

export default RocketsList;

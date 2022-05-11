import rocketsReducer, { GET_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVE } from '../redux/rockets/rockets';

describe('Get rockets', () => {
  test('When Get Rockets is executed, it should return a list of rockets', () => {
    const initialState = [];
    const state = [
      {
        id: '0',
        name: 'Falcon0',
        description: 'Cool Rocket 0',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '1',
        name: 'Falcon1',
        description: 'Cool Rocket 1',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: true,
      },
      {
        id: '2',
        name: 'Falcon2',
        description: 'Cool Rocket 2',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
    ];

    const action = { type: GET_ROCKETS, payload: state };
    const result = rocketsReducer(initialState, action);
    expect(result).toEqual(state);
  });
});

describe('Add Reservation to rockets ', () => {
  test('When a rocket is reserved, its state should change to true', () => {
    const action = { type: RESERVE_ROCKET, id: '1' };
    const state = [
      {
        id: '0',
        name: 'Falcon0',
        description: 'Cool Rocket 0',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '1',
        name: 'Falcon1',
        description: 'Cool Rocket 1',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '2',
        name: 'Falcon2',
        description: 'Cool Rocket 2',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
    ];
    const result = rocketsReducer(state, action);
    const newState = [
      {
        id: '0',
        name: 'Falcon0',
        description: 'Cool Rocket 0',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '1',
        name: 'Falcon1',
        description: 'Cool Rocket 1',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: true,
      },
      {
        id: '2',
        name: 'Falcon2',
        description: 'Cool Rocket 2',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
    ];
    expect(result).toEqual(newState);
  });

  test('When a reservation is sent with a wrong id, it should return the same state', () => {
    const action = { type: RESERVE_ROCKET, id: '2' };
    const state = [
      {
        id: '0',
        name: 'Falcon0',
        description: 'Cool Rocket 0',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '1',
        name: 'Falcon1',
        description: 'Cool Rocket 1',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
    ];
    const result = rocketsReducer(state, action);
    expect(result).toEqual(state);
  });
});

describe('Remove reservation of rocket', () => {
  test('When a reservation is cancelled, its state should change to false', () => {
    const action = { type: CANCEL_RESERVE, id: '0' };
    const state = [
      {
        id: '0',
        name: 'Falcon0',
        description: 'Cool Rocket 0',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: true,
      },
      {
        id: '1',
        name: 'Falcon1',
        description: 'Cool Rocket 1',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '2',
        name: 'Falcon2',
        description: 'Cool Rocket 2',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
    ];
    const result = rocketsReducer(state, action);
    const newState = [
      {
        id: '0',
        name: 'Falcon0',
        description: 'Cool Rocket 0',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '1',
        name: 'Falcon1',
        description: 'Cool Rocket 1',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
      {
        id: '2',
        name: 'Falcon2',
        description: 'Cool Rocket 2',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
    ];
    expect(result).toEqual(newState);
  });

  test('When a cancellation is sent with a wrong id, it should return the same state', () => {
    const action = { type: CANCEL_RESERVE, id: '2' };
    const state = [
      {
        id: '0',
        name: 'Falcon0',
        description: 'Cool Rocket 0',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: true,
      },
      {
        id: '1',
        name: 'Falcon1',
        description: 'Cool Rocket 1',
        wikiLink: 'www.wikipedia.com',
        image: 'www.flickr.com',
        isReserved: false,
      },
    ];
    const result = rocketsReducer(state, action);
    expect(result).toEqual(state);
  });
});

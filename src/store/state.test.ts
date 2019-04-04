import initialState, { initialState as defaultState, RootState } from './state';

beforeEach(() => {
  // reset dom body to empty
  document.body.innerHTML = '';
});

it('returns the default state when no pre loaded state is found', () => {
  expect(initialState()).toEqual(defaultState);
});

it('returns the dom loaded state when present', () => {
  const expectedState: RootState = {
    counter: 3,
    posts: [
      {
        id: 1,
        body: 'Lorem ipsum',
        title: 'Lorem',
        userId: 3,
      },
      {
        id: 2,
        body: 'Lorem ipsum',
        title: 'Lorem',
        userId: 3,
      },
    ]
  };

  const domState = document.createElement('script');

  domState.id = 'app-state';
  domState.type = 'application/json';
  domState.innerHTML = JSON.stringify(expectedState);
  document.body.appendChild(domState);

  expect(initialState()).toEqual(expectedState);
});

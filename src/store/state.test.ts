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
    ],
    isInit: true,
  };

  const domState = document.createElement('script');

  domState.id = 'app-state';
  domState.type = 'application/json';
  domState.innerHTML = JSON.stringify(expectedState);
  document.body.appendChild(domState);

  expect(initialState()).toEqual(expectedState);
});

describe('empty state script tag', () => {
  beforeEach(() => {
    const appDomState = document.createElement('script');
    appDomState.id = 'app-state';
    appDomState.type = 'application/json';
    document.body.appendChild(appDomState);
  });

  it('doesnt fail when script is not valid JSON', () => {
    const expectedState: RootState = {
      counter: 0,
      posts: [],
      isInit: false,
    };

    expect(initialState()).toEqual(expectedState);
  });
});

import { h, render } from 'preact';

import { StoreWriter } from './';

let appMount: HTMLElement;
let appDomState: HTMLScriptElement;

beforeEach(() => {
  appMount = document.createElement('div');
  document.body.innerHTML = '';
  document.body.appendChild(appMount);

  appDomState = document.createElement('script');
  appDomState.id = 'app-state';
  appDomState.type = 'application/json';

  document.body.appendChild(appDomState);
});

it('writes the state to the dom', () => {
  const mockState = {
    app: {
      init: true,
    },
    data: [
      1,
      2,
      3,
    ],
  };

  render(<StoreWriter state={mockState} />, appMount);
  expect(appDomState.innerHTML).toContain(JSON.stringify(mockState));
});

it('does not write state to dom if paused', () => {
  const mockState = {
    counter: 5,
    posts: [
      {id: 1, data: 'abc'},
      {id: 2, data: 'xyz'},
    ],
  };

  render(<StoreWriter state={mockState} pauseWrite={true} />, appMount);
  expect(appDomState.innerHTML).toEqual('');
});

it('updates dom until paused', () => {
  const mockState = {
    counter: 5,
    posts: [
      {id: 1, data: 'abc'},
      {id: 2, data: 'xyz'},
    ],
  };

  const mockState2 = {
    ...mockState, counter: 6,
  }

  const mockState3 = {
    ...mockState, counter: 7,
  }

  render(<StoreWriter state={mockState} />, appMount);
  expect(appDomState.innerHTML).toContain(JSON.stringify(mockState));
  render(<StoreWriter state={mockState2} />, appMount);
  expect(appDomState.innerHTML).toContain(JSON.stringify(mockState2));
  render(<StoreWriter state={mockState3} pauseWrite={true} />, appMount);
  expect(appDomState.innerHTML).toContain(JSON.stringify(mockState2));
});

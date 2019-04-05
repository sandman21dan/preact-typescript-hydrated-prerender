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

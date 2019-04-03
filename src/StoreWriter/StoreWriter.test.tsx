import { h, render } from 'preact';

import { StoreWriter } from './';

let mockDom: HTMLElement;

beforeEach(() => {
  mockDom = document.createElement('div');
  document.body.innerHTML = '';
  document.body.appendChild(mockDom);
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

  render(<StoreWriter state={mockState} />, mockDom);
  expect(mockDom.innerHTML).toContain(JSON.stringify(mockState));
});

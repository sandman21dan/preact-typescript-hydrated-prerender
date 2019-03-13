import { h, render } from 'preact';
import App from './App';

const root = document.getElementById('root');
const app = document.querySelector('.app');

render(<App />, root, app);

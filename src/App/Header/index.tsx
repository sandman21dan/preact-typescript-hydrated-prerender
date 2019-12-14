import {h, FunctionalComponent } from 'preact'
import './Header.scss';

export const Header: FunctionalComponent = () => (
  <header class="app-header">
    <a class="app-header__link" href="/">Home</a>
    <a class="app-header__link" href="/about">About</a>
  </header>
);

import {h, FunctionalComponent } from 'preact'
import { Link } from 'preact-router/match';
import './Header.scss';

export const Header: FunctionalComponent = () => (
  <nav class="app-nav">
    <Link
      class="app-nav__link"
      activeClassName="app-nav__link--active"
      href="/"
    >
      Home
    </Link>
    <Link
      class="app-nav__link"
      activeClassName="app-nav__link--active"
      href="/about"
    >
      About
    </Link>
  </nav>
);

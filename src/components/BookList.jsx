import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className='book-list'
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the martian</li>
          <li style={{ background: theme.ui }}>lord of the rings</li>
        </ul>
      </div>
    );
  }
}

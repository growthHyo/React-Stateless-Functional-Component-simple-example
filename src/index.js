import './test/test'
import '../assets/app.scss'
import "../views/index.pug"

if (module.hot) {
  module.hot.accept('./test/test', () => {
    console.log('OK !')
  })
}

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { ListComponent} from './containers/app'

const items = [
  {
    name: 'Anderson',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    name: 'Dorregaray',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  },
  {
    name: 'Linares',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
  }
]

ReactDom.render(
  <div>
    <ListComponent items={items}/>
  </div>,
  document.getElementById('new_root')
);

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    ReactDom.render(
      <div>
        <ListComponent items={items}/>
      </div>,
      document.getElementById('new_root')
    );
  });
}

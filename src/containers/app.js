import React from 'react'

const sayHello = (e, name) => {
  e.preventDefault();
  alert(`Hi ${name} !!`);
}

export const PokeAvatar = (props) => (
  <div>
    <img src={props.item.image} alt=""/>
  </div>

)

const SayHello = (props) => (
  <div>
    <h2>
      <a href="#" onClick={(e) => sayHello(e, props.item.name)}>Say Hello to {props.item.name}
        !!!</a>
    </h2>
  </div>
)

const ItemComponent = (props) => {
  return (
    <div>
      <PokeAvatar item={props.item} />
      <SayHello item={props.item} />
    </div>

  )
}

export const ListComponent = (props) => {
  const itemList = props.items.map((item, i) => (
    <ItemComponent item={item} key={i}/>
  ));

  return(
    <div>
      {itemList}
    </div>
  )
}

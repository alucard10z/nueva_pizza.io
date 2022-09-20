import Item from "../Item/inddex";

import React from 'react'

function ItemList({data = []}) {
  return (
    data.map(film => <Item key={film.id} info={film}/>)
  );
}

export default ItemList
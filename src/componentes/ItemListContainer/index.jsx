import ItemList from '../ItemList';

import React, {useState, useEffect} from 'react';
import Titulo from '../Titulo';
import ItemCount from '../ItemCount';
import { useParams} from "react-router-dom"


const film = [
  {id: 1, Image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",categoria: "film", Title:"pizza"},
  {id: 2, Image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",categoria: "film", Title:"pizza"},
  {id: 3, Image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",categoria: "burge", Title:"pizza"},
  {id: 4, Image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",categoria: "burge", Title:"pizza"},
];




export const ItemListContainer = ({texto}) =>{

  const [data, setData] = useState([]);

  const {categoriaId} = useParams();
 
  useEffect(()=>{
    const getData = new Promise(resolve =>{
      setTimeout(() =>{
        resolve(film);
      },3000);

    });

    if (categoriaId) {
      getData.then(res => setData(res.filter(film => film.category == categoriaId))) ;

    } else {
      getData.then(res => setData(res));
    }

   getData.then(res => setData(res));

    
  }, [categoriaId])
  

  const onAdd = (quantity) =>{
    console.log("compraste",quantity,"unidades");
  }
  return (
    <>
     <Titulo greeting={texto} />
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    <ItemList data={data}/>
    
    </>
   
  );
  
}

export default ItemListContainer;
import React,{ useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';
import { AddCategory } from './AddCategory';
import { GifReadItems } from './GifReadItems';


export const GifRead = ({category}) => {


    const [images, setimages] = useState([])

    useEffect(  ()=>{
        getGifs(category)
            .then( gif => setimages(gif))       
    }, [ category ]);

    return (<>
        <h1 class="categoryName">{   category    }</h1>
        <div class="conteinerGalery">
            
                {
                    images.map((img)=>{
                      return <GifReadItems key={img.id} {...img}  />
                    })
                }   
        </div>
       </>
    )
}

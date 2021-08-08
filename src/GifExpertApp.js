import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifRead } from "./components/GifRead";




export const GifExpertApp = ()=>{

    const [categories, setcategories] = useState([""]);

    return (<>
            <h2 class="Title">Aplicacion de Ale Lalli para buscar Gifs ahre</h2>
            < AddCategory setCategories={ setcategories } />
            <hr />   
            {
                 categories.map((category,i)=>{
                      const setKey = `${i}_${category}`;
                     return <GifRead 
                     key={ setKey }
                     category = {   category    }
                     />
                 })
            }
        </>)
}


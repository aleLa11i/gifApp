import React from 'react';

export const GifReadItems = ({id,title,url}) => {

    return  (
    <div>
        <img src={  url  } alt={  title  }></img>
    
    </div>
    )
}

import React from 'react';

interface Props{
    img: Item,
   
}

interface Item{
    id:string,
    title: string,
    url: string
}

const GifGridItems = ({img: {id,title,url}}: Props) => {

    
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItems

import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
interface Props{
    category: any
}
const GifGrid = ({category}: Props) => {

    const {data: images ,loading} = useFetchGifs(category);

    return (
        <>
        <h1>{category}</h1>
        {loading && <p>Loading...</p>}
        <div className="card-grid">
               {images.map((i:any) => <GifGridItem key={i.id} img={{...i}}/>)}
        </div> 
        </>
    )
}

export default GifGrid

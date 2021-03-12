import React,{useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [category, setCategory] = useState(['Dragon Ball']);

    return (
        <>
            <h2>Arthur's Gif App</h2>
            <AddCategory setCategory={setCategory}/>
            <hr/>
            <ol>
                {category.map(categoria => <GifGrid key={categoria} category={categoria}/>)}
            </ol>
        </>
    )
}

export default GifExpertApp
